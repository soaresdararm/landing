import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const DivInputCheckbox = styled.div`
  display: flex;
  padding: ${pixelToRem(24, 0, 32, 0)};
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: ${pixelToRem(24)};
  height: ${pixelToRem(24)};
  border: 1px solid var(--gray-05);
  margin-right: ${pixelToRem(16)};
  appearance: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  content: "";

  &:checked {
    background-color: var(--mars);
  }
`;

export const TextCheckbox = styled.p`
  font: var(--text-1);
  color: var(--gray-05);
`;

const Checkbox = () => {
  return (
    <DivInputCheckbox>
      <InputCheckbox type="checkbox" />
      <TextCheckbox>Concordo em receber comunicações</TextCheckbox>
    </DivInputCheckbox>
  );
};

export default Checkbox;
