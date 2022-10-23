import { NextPage } from "next";
import styled, { css } from 'styled-components'

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`

const font = css`
  color: #1e90ff;
  font-size: 2em;
`

const Button = styled.button`
  background-color: transparent;
  margin: 1em;
  cursor: pointer;

  ${redBox}
  ${font}
`

const Text = styled.p`
  font-weight: bold;

  ${font}
`

const Page: NextPage = () => {
  return (
    <div>
      <Button>Hello</Button>
      <Text>World</Text>
    </div>
  )
}

export default Page
