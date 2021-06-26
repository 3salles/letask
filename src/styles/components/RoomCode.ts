import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--desaturated-dark-blue);
  display: flex;

  div{
    background: var(--desaturated-dark-blue);
    height: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 230px;
    font-size: 0.875rem;
    font-weight: 500;
  }
`