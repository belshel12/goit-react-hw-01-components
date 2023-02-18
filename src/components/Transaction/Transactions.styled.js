import styled from '@emotion/styled';

export const Table = styled.table`
  min-width: 480px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  text-align: center;
  align-items: center;
  background-color: #2196f3;
  width: 100%;
`;

export const Th = styled.th`
  padding: 8px 16px;
`;

export const Tr = styled.tr`
  :nth-of-type(even) {
    background-color: #f5f4fa;
  }
`;

export const Td = styled.td`
  padding: 8px 16px;
`;
