import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

type Story = ComponentStoryObj<typeof Button>

const component = {
  component: Button,
  args: {
    as: 'button',
    label: 'ラベル',
    displayIcon: true,
    color: 'red',
    size: 'medium',
  },
}

export default component as ComponentMeta<typeof Button>

export const Default: Story = {}
