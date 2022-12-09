import * as Styled from './Tabs.style';
import { getDividerPosition } from './utils';
import { useSpring } from '@react-spring/web';
import { TypographyVariant } from '../Typography';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';

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

const baseTestId = 'tab';

const Tabs = ({
  tabs,
  currentIndex,
  onCurrentIndexChange,
  disabled = false,
}: TabsProps) => {
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const [index, setIndex] = useState(currentIndex);
  const translateValue = widthOfContainer / tabs.length;
  const ref = useRef<HTMLDivElement>(null);

  const springProps = useSpring(
    Styled.getAnimatedStyles({ translateValue, index })
  );

  useEffect(() => {
    const setContentWidth = () => {
      ref && ref.current && setWidthOfContainer(ref.current.offsetWidth);
    };
    setIndex(currentIndex);
    setContentWidth();
    window.addEventListener('resize', () => setContentWidth());
    return () => window.removeEventListener('resize', setContentWidth);
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
                data-testid={`${baseTestId}-${index}`}
                onClick={() => !disabled && onCurrentIndexChange(index)}
                onKeyPress={(event) =>
                  onSpacePressTrigger(event, () => onCurrentIndexChange(index))
                }
              >
                {isString ? (
                  <Styled.Text
                    tabIndex={!disabled ? 0 : -1}
                    variant={
                      isSelectedTab
                        ? TypographyVariant.heading3
                        : TypographyVariant.paragraph1
                    }
                    numberOfLines={1}
                  >
                    <Styled.Content disabled={disabled}>{tab}</Styled.Content>
                  </Styled.Text>
                ) : (
                  <Styled.Content
                    disabled={disabled}
                    data-testid={`${baseTestId}-view-${index}`}
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
