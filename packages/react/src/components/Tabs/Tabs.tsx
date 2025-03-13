import { useSpring } from '@react-spring/web';
import { onSpacePressTrigger } from '../../utils';
import * as Styled from './Tabs.style';
import { OptionalProps } from '../../types';
import { TabsPropsStrict } from './Tabs.types';

export type TabsProps = OptionalProps<TabsPropsStrict, 'disabled'>;

const normalizedTabsProps = (props: TabsProps): TabsPropsStrict => ({
  ...props,
  disabled: props.disabled ?? false,
});

const baseTestId = 'tab';

const Tabs = (_props: TabsProps) => {
  const { currentIndex, tabs, onCurrentIndexChange, disabled } =
    normalizedTabsProps(_props);

  const springProps = useSpring(
    Styled.getAnimatedStyles({ tabs, currentIndex })
  );

  return (
    <Styled.TabsContainer p="xs">
      <Styled.InnerContainer alignItems="center" gap="xs" disabled={disabled}>
        <Styled.ActiveTab
          currentIndex={currentIndex}
          tabs={tabs}
          style={springProps}
          disabled={disabled}
        />
        {tabs.map((tab, index) => {
          const isSelectedTab = currentIndex === index;

          return (
            <Styled.Tab
              key={index}
              justifyContent="center"
              alignItems="center"
              isSelected={isSelectedTab}
              disabled={disabled}
              testID={`${baseTestId}-${index}`}
              onClick={() => !disabled && onCurrentIndexChange(index)}
              onKeyDown={(event) =>
                onSpacePressTrigger(
                  event,
                  () => !disabled && onCurrentIndexChange(index)
                )
              }
            >
              {typeof tab === 'string' ? (
                <Styled.Text
                  tabIndex={!disabled ? 0 : -1}
                  variant={isSelectedTab ? 'heading6' : 'paragraph1'}
                  numberOfLines={1}
                >
                  <Styled.Content display="block" px="md" disabled={disabled}>
                    {tab}
                  </Styled.Content>
                </Styled.Text>
              ) : (
                <Styled.Content
                  display="block"
                  px="md"
                  disabled={disabled}
                  tabIndex={!disabled ? 0 : -1}
                  testID={`${baseTestId}-view-${index}`}
                >
                  {tab}
                </Styled.Content>
              )}
            </Styled.Tab>
          );
        })}
      </Styled.InnerContainer>
    </Styled.TabsContainer>
  );
};

export default Tabs;
