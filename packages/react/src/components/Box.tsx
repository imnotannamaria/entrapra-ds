import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',

  variants: {
    backgroundColor: {
      grey: { backgroundColor: '$grey500', border: '1px solid $grey600' },
      transparent: { backgroundColor: 'transparent' },
    },
  },

  defaultVariants: {
    backgroundColor: 'grey',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
