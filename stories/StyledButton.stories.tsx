import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../pages/components/StyledButton";
import { linkTo } from "@storybook/addon-links"

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>

export const Primary = (props: []) => {
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = (props: []) => {
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton', 'Transparent')}>
      Success
    </StyledButton>
  )
}

export const Transparent = (props: []) => {
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton', 'Primary')}>
      Transparent
    </StyledButton>
  )
}

