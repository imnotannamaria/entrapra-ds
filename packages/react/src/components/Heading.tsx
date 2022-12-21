import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$short',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
    color: {
      white: { color: '$white' },
      purple: { color: '$purple500' },
      grey: { color: '$grey500' },
      red: { color: '$red500' },
      green: { color: '$green500' },
      orange: { color: '$orange500' },
      black: { color: '$black' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'purple',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
