import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 14px;
  background-color: var(--Gray-80);
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.div<OptionProps>`
  width: 100%;
  padding: 8px 0;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  color: ${({ selected }) =>
    selected ? "var(--Text-Oncolor)" : "var(--Gray-60)"};
  background-color: ${({ selected }) => (selected ? "var(--Gray-70)" : "")};

  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
`;
