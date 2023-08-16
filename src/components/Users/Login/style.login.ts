import styled from 'styled-components'

export const StyleLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const MainTitle = styled.h3`
  font-size: 23px;
  line-height: 26px;
  font-weight: 600;
`
export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
export const SwitchPage = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const Text = styled.p`
 font-size: 15px;
`
export const PrimaryLink = styled.p`
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`