import { Box, BoxProps, Heading, Hightlight, Text } from '@entrapta/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: (
      <>
        <Heading>Componente Box</Heading>
        <Text>
          Testando elemento <Hightlight>Box</Hightlight>
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
    backgroundColor: {
      options: ['grey', 'transparent'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
