
import React from 'react'
import { Box, colors } from 'axs'
import resets from './resets'

const Button = ({ href, css, ...props }) => (
  <Box
    is={href ? 'a' : 'button'}
    href={href}
    css={{
      ...cx,
      ...css
    }}
    bold
    white
    bgBlue
    rounded
    {...props}
  />
)

const cx = {
  ...resets.button,
  ':hover': {
    backgroundColor: colors.blue7
  },
  ':focus': {
    outline: 'none',
    backgroundColor: colors.blue7,
    boxShadow: `0 0 0 2px ${colors.blue3}`
  }
}

export default Button

