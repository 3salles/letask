import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid var(--very-light-gray);
`

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Logo = styled.img`
  max-height: 45px;
  @media(max-width: 768px){
    display: none;
  }
`

export const MobLogo = styled.img`
  max-height: 45px;
  @media(min-width: 768px){
    display: none;
  }
`

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  >button{
    height: 40px;
  }
`