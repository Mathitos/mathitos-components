import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from '../components/Button'

const stories = storiesOf('Button', module)

stories.addDecorator(withInfo)

stories.add(
  'Primary theme',
  () => (
    <Button onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ),
  { info: { inline: true } },
)

stories.add(
  'Secondary theme',
  () => (
    <Button theme="secondary" onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ),
  { info: { inline: true } },
)
stories.add(
  'Disabled',
  () => (
    <Button disabled onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ),
  { info: { inline: true } },
)
