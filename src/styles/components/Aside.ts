import styled from 'styled-components'

import {ReactComponent as IllustrationSvg} from '../../assets/images/illustration.svg'

export const Container = styled.aside`
  flex: 7;
  background: var(--soft-violet);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7.5rem 5rem;

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: var(--very-light-gray-white);
  }

  @media(max-width: 768px){
    flex: 1;
    padding: 3.75rem 2.5rem;

    strong {
    font-size: 1.5rem;
    width: 100%;
  }
  }
`

export const Illustration = styled(IllustrationSvg)`
  max-width: 320px;
  @media(max-width: 768px){
    max-width: 100%;
  }
`
