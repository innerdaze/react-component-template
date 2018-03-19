import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import MyComponent from '../src/index.jsx'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('MyComponent', module).add('with text', () => (
  <MyComponent>Hello World</MyComponent>
))

storiesOf('MyComponent', module).add('with text inverted', () => (
  <MyComponent theme='inverted'>Hello World</MyComponent>
))
