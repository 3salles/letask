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
  > img {
    max-height: 45px;
  }
`