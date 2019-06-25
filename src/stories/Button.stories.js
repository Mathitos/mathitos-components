import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      <span>Hello Button</span>
    </Button>
  ))
  .add('with long text', () => (
    <Button onClick={action('clicked')}>
      <span>Helloooooooooooooooooooooooooooooooo Button</span>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with a lot of emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯 😂 🙀 👏
      </span>
    </Button>
  ))
