
import React from 'react'
import { Box, colors } from 'axs'

const Slider = ({ css, ...props }) => (
  <Box
    is='input'
    type='range'
    css={{ ...cx, ...css }}
    display='block'
    width={1}
    m0
    bgGray3
    rounded='circle'
    {...props}
  />
)

const thumbStyles = {
  width: 24,
  height: 24,
  backgroundColor: colors.black, // 'currentcolor',
  border: 0,
  borderRadius: 9999,
  WebkitAppearance: 'none'
}

const cx = {
  boxSizing: 'border-box',
  height: 6,
  marginTop: 6,
  marginBottom: 6,
  cursor: 'pointer',
  color: 'inherit',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  '::-webkit-slider-thumb': {
    ...thumbStyles
  },
  '::-moz-range-thumb': {
    ...thumbStyles
  },
  ':focus': {
    outline: 'none',
    '::-webkit-slider-thumb': {
      backgroundColor: 'currentcolor'
    },
    '::-moz-range-thumb': {
      backgroundColor: 'currentcolor'
    }
  }
}

export default Slider

