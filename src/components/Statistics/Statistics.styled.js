import styled from '@emotion/styled';

export const Section = styled.div`
  min-width: 480px;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  flex-shrink: 1;
`;

export const Item = styled.li`
  min-width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span``;

export const PercentAge = styled.span`
  font-size: 20px;
`;
