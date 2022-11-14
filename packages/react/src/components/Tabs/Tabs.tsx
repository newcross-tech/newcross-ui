import { useSpring } from '@react-spring/web';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import Typography, { TypographyVariant } from '../Typography';
import * as Styled from './Tabs.style';
import { getDividerPosition } from './utils';

export type TabsProps = {
  /**
   * Array of labels for the segments
   */
  tabs: Array<ReactNode | string>;
  /**
   * Index value for the current tab.
   */
  currentIndex: number;
  /**
   * Callback function for selecting a tab.
   * Returns index value of selected tab.
   */
  onCurrentIndexChange: (newState: number) => void;
  /**
   * Disables segment from being pressed
   */
  disabled?: boolean;
};

const Tabs = ({
  tabs,
  currentIndex,
  onCurrentIndexChange,
  disabled = false,
}: TabsProps) => {
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const [index, setIndex] = useState(currentIndex);
  const translateValue = widthOfContainer / tabs.length;

  const springProps = useSpring(
    Styled.getAnimatedStyles({ translateValue, index })
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getContentWidth = () => {
      ref && ref.current && setWidthOfContainer(ref.current.offsetWidth);
    };
    setIndex(currentIndex);
    getContentWidth();
    window.addEventListener('resize', () => getContentWidth());
    return () => window.removeEventListener('resize', getContentWidth);
  }, [ref, widthOfContainer, currentIndex]);

  return (
    <Styled.Container>
      <Styled.InnerContainer disabled={disabled} ref={ref}>
        <Styled.ActiveTab disabled={disabled} style={springProps} />
        {tabs.map((tab, index) => {
          const isString = typeof tab === 'string';
          const isSelectedTab = currentIndex === index;
          return (
            <Fragment key={index}>
              <Styled.Tab
                data-testid={`tab-${index}`}
                onClick={() => !disabled && onCurrentIndexChange(index)}
              >
                {isString ? (
                  <Typography
                    variant={
                      isSelectedTab
                        ? TypographyVariant.heading3
                        : TypographyVariant.paragraph1
                    }
                    numberOfLines={1}
                  >
                    <Styled.Content disabled={disabled}>{tab}</Styled.Content>
                  </Typography>
                ) : (
                  <Styled.Content
                    disabled={disabled}
                    data-testid={`tab-view-${index}`}
                  >
                    {tab}
                  </Styled.Content>
                )}
              </Styled.Tab>
              <Styled.Divider
                showDivider={getDividerPosition(index, currentIndex, tabs)}
              />
            </Fragment>
          );
        })}
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Tabs;
