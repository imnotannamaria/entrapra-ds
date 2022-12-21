import { Hightlight, HightlightProps } from '@entrapta/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Hightlight',
  component: Hightlight,
  args: {
    size: 'md',
    color: 'purple',
    children: 'highlight',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'grey', 'red', 'green', 'orange'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HightlightProps>

export const Primary: StoryObj<HightlightProps> = {}

export const CustomTag: StoryObj<HightlightProps> = {
  args: {
    children: 'Strong Hightlight',
    as: 'h1',
  },
}
