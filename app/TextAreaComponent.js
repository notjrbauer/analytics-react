import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Panel, Layout, Form } from 'react-toolbox'
import theme from './TextAreaComponent.scss'

const FormFields = {
  multiline: {kind: 'Input', type: 'text', multiline: true, required: true},
  submit: {kind: 'Button', type: 'submit', label: 'SIMULATE'}
}

class TextAreaComponent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  handleEvent (type, event, form) {}
  render () {
    let onChange = this.props.onChange
    let onSubmit = this.props.onSubmit

    return (
      <Layout theme={theme}>
        <Panel>
          <label>
            Raw JSON
          </label>
          <Form model={FormFields} onChange={onChange} onSubmit={onSubmit} />
        </Panel>
      </Layout>
    )
  }
}

export default TextAreaComponent
