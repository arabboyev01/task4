import styled from "styled-components";

export const TableContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #f0f0f0;
  padding: 5px;
  justify-content: space-between;
  align-items: start !important;
`;

export const TableCell = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;
  width: 20%;
`;

export const Active = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;
  width: 20%;
  color: black;
  background: greenyellow;
`