import Pill from '../Pill';
import * as Styled from './Dropdown.style';
import { DropdownValueProps } from './Dropdown.types';

const DropdownValue = ({
  value,
  placeholder,
  onMultiSelect,
}: DropdownValueProps) => {
  if (!value || !value.length) return <>{placeholder}</>;
  if (typeof value === 'string') return <>{value}</>;

  return (
    <Styled.PillContainer>
      {(value as string[]).map((option) => (
        <Pill
          testID={option}
          key={`dropdown-pill-${option}`}
          removable
          hasPadding={false}
          label={option}
          onClick={(event) => {
            event.stopPropagation();
            onMultiSelect(true, option);
          }}
        />
      ))}
    </Styled.PillContainer>
  );
};

export default DropdownValue;
