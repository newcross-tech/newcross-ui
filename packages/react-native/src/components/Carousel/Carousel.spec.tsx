import React from 'react';
import { Image } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Carousel, { CarouselProps } from './Carousel';

const data = [
  {
    id: '1',
    image: `https://picsum.photos/1440/2842?random=1`,
    text: 'first slide',
  },
  {
    id: '2',
    image: `https://picsum.photos/1440/2842?random=1`,
    text: 'second slide',
  },
  {
    id: '3',
    image: `https://picsum.photos/1440/2842?random=1`,
    text: 'third slide',
  },
];

const slideData = data.map((slide) => {
  return {
    id: slide.id,
    content: <Image source={{ uri: slide.image }} />,
  };
});

describe('Carousel Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: CarouselProps = {
      items: slideData,
      testID: 'carousel-component',
    };

    // Act
    const { getByTestId } = render(<Carousel {...props} />);

    // Assert
    expect(getByTestId('carousel-component')).toBeTruthy();
  });

  it('triggers the onSwipe function when scroll action is called', () => {
    // Arrange
    const onSwipe = jest.fn();
    const props: CarouselProps = {
      items: slideData,
      onSwipe,
      testID: 'carousel-component',
    };

    // Act
    const { getByTestId } = render(<Carousel {...props} />);
    fireEvent.scroll(getByTestId('carousel-component'), {
      nativeEvent: {
        contentSize: { height: 600, width: 400 },
        contentOffset: { y: 150, x: 100 },
        layoutMeasurement: { height: 100, width: 100 },
      },
    });

    // Assert
    expect(getByTestId('carousel-component')).toBeTruthy();
    expect(onSwipe).toBeCalled();
  });

  it('calculates the width of the content dynamically', () => {
    // Arrange
    const props: CarouselProps = {
      items: slideData,
      testID: 'carousel-component',
    };
    // Act
    const { getByTestId } = render(<Carousel {...props} />);
    fireEvent(getByTestId('carousel-component'), 'layout', {
      nativeEvent: { layout: { width: 380 } },
    });

    // Assert
    expect(getByTestId('carousel-component')).toBeTruthy();
  });
});
