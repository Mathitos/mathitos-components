import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'

storiesOf('Button', module)
  .add('Primary theme', () => (
    <Button onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ))
  .add('Secondary theme', () => (
    <Button theme="secondary" onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ))
