import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media(max-width: 768px){
    h1 {
      font-size: 1.125rem;
    }

    img {
      max-width: 18.75rem;
    }
  }
`