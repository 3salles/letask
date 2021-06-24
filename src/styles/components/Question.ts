import styled from "styled-components";

export const Container = styled.div`
  background: var(--very-lightest-gray-white);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  p {
    color: var(--very-dark-blue-black);
  }

  & + div {
    margin-top: 0.5rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span{
    margin-left: 0.5rem;
    color: var(--dark-grayish-blue);
    font-size: 0.875rem;
  }
`