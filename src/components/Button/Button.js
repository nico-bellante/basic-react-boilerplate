import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: rebeccapurple;
  color: snow;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 400;

  border: 0px;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: violet;
  }
`

export default ({ label }) => <Button>{label}</Button>
