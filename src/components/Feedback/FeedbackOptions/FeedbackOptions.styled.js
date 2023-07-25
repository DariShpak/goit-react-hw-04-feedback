import styled from "styled-components"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  display: flex;
  gap: 18px;
`

export const Button = styled.button`
  cursor: pointer;
  width: 65px;
  background: #eac161;
  border-radius: 10px;
  border: 2px solid #51748f;
  color: #435055;
  font-size: 15px;
  padding: 8px;

  &:hover {
    border: 2px solid #eac161;
    background-color: #7694a1;
  }
`
