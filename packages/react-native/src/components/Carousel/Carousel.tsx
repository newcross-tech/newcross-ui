import React, { useState, ReactNode, useCallback, useRef } from 'react';
import {
  View,
  FlatList,
  ViewStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Badge, { BadgeSizes } from '../Badge';
import carouselStyle, {
  getContentWidth,
  getPaginationDotStyles,
} from './Carousel.style';
import { CarouselItem } from './Carousel.types';

export type CarouselProps = {
  /**
   * items for the carousel slides.
   */
  items: Array<CarouselItem>;
  /**
   * on swipe action
   */
  onSwipe?: (index: number) => void;
  /**
   * Accepts a test ID to be used for the component.
   */
  testID?: string;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle;
};

type PaginationProps = {
  /**
   * Data for which the pagination uses to calculate the number of dots
   */
  data: Array<CarouselItem>;
  /**
   * Active Pagination index
   */
  activeIndex: number;
};

type SlideProps = {
  /**
   * item to render inside carousel
   */
  item: { content: ReactNode };
  /**
   * index of item
   */
  index: number;
  /**
   * dynamic width of item
   */
  contentWidth?: number;
};

const Pagination = ({ activeIndex, data }: PaginationProps) => {
  const styles = carouselStyle();

  return (
    <View testID={`carousel-pagination`} style={styles.paginationContainer}>
      {data.map((_, currentIndex) => {
        return (
          <Badge
            key={currentIndex}
            size={BadgeSizes.small}
            style={getPaginationDotStyles(activeIndex === currentIndex)}
          />
        );
      })}
    </View>
  );
};

const Slide = ({ item, index, contentWidth }: SlideProps) => (
  <View
    testID={`carousel-slide-${index}`}
    style={getContentWidth(contentWidth)}
  >
    {item.content}
  </View>
);

const Carousel = ({ items, onSwipe, style, ...rest }: CarouselProps) => {
  const styles = carouselStyle();
  const [indexOfActiveSlide, setIndexOfActiveSlide] = useState(0);
  const [contentWidth, setContentWidth] = useState<number>();

  const indexRef = useRef(indexOfActiveSlide);
  indexRef.current = indexOfActiveSlide;

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset } = event.nativeEvent;
      const sizeOfSlide = layoutMeasurement.width;
      const index = contentOffset.x / sizeOfSlide;
      const roundIndex = Math.round(index);

      if (roundIndex !== indexRef.current) {
        setIndexOfActiveSlide(roundIndex);
        onSwipe && onSwipe(roundIndex);
      }
    },
    [indexOfActiveSlide]
  );

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={items}
        style={[styles.carousel]}
        renderItem={({ index, item }) => (
          <Slide contentWidth={contentWidth} item={item} index={index} />
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onLayout={(event) => setContentWidth(event.nativeEvent.layout.width)}
        {...rest}
      />
      <Pagination data={items} activeIndex={indexOfActiveSlide} />
    </View>
  );
};

export default Carousel;
