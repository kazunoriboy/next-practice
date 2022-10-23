import { NextPage } from 'next'
import styled from 'styled-components'

type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
`

const Page: NextPage = () => {
  return (
    <div>
      <Button backgroundColor='transparent' color='#FF0000'>
        Hello
      </Button>
      <Button backgroundColor='#1E90FF' color='white'>World</Button>
    </div>
  )
}

export default Page
