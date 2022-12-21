import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Hightlight = styled('strong', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  padding: '$1',
  borderRadius: '$sm',
  width: 'fit-content',
  display: 'inline',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
    color: {
      purple: { color: '$purple500' },
      grey: { color: '$grey500' },
      red: { color: '$red500' },
      green: { color: '$green500' },
      orange: { color: '$orange500' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'purple',
  },
})

export interface HightlightProps extends ComponentProps<typeof Hightlight> {
  as?: ElementType
}

Hightlight.displayName = 'Hightlight'
