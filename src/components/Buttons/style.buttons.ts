import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ToolbarActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const BlockButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
export const UnBlockButton = styled.button`
  background-color: greenyellow;
  color: #333;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`

export const Delete = styled.span`
  background-color: transparent;
  color: red;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;