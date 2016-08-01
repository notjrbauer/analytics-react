import React from 'react'

import 'whatwg-fetch'

import Link from 'react-toolbox'
import HeaderComponent from './HeaderComponent.js'
import DropdownComponent from './Dropdown.js'
import LinkComponent from './LinkComponent.js'
import TextAreaComponent from './TextAreaComponent.js'
import FooterComponent from './FooterComponent.js'
import SnackBarComponent from './SnackBarComponent.js'

const languages = [
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python'},
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go'}
]

const apiMethods = [
  'raw',
  'identify',
  'track',
  'group',
  'page',
  'screen',
  'alias'
]

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      language: 'nodejs',
      method: 'raw',
      format: '',
      data: '',
      result: '',
      errors: {},
      modal: false
    }
    this.onSelectLanguage = this.onSelectLanguage.bind(this)
    this.onSelectMethod = this.onSelectMethod.bind(this)
    this.onFormChange = this.onFormChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onModal = this.onModal.bind(this)
  }
  validate (data) {
    try {
      data = JSON.parse(data)
    } catch (err) {
      return err
    }
    return {data: data}
  }
  onSelectMethod (e) {
    var activeMethod = e.method
    this.setState({method: activeMethod})
  }
  onFormSubmit (e) {
    var data = this.state.data
    var validation = this.validate(data.trim())

    if (validation.message) {
      this.setState({errors: validation.message, formatted: '', modal: true, result: validation.message })
      return
    }

    this.setState({formatted: validation.data, errors: {}})

    var self = this
//http://192.168.99.100:3000/
    fetch('https://notjrbauer.ngrok.io.ngrok.io/' + this.state.method, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: validation.data,
        method: this.state.method,
        language: this.state.language
      })
    })
      .then(function (response) {
        var data = response.text()
        return data
      })
      .then(function (data) {
        self.setState({modal: true, result: data})
      })
      .catch(function (err) {
        this.setState({errors: err, formatted: '', modal: true, result: err.message})
      })
  }
  onSelectLanguage (language) {
    this.setState({language: language})
  }
  onFormChange (type, text) {
    this.setState({data: text})
  }
  onModal () {
    this.setState({modal: false, result: ''})
  }
  render () {
    return (
      <div>
        <HeaderComponent />
        <DropdownComponent
          source={languages}
          language={this.state.language}
          onChange={this.onSelectLanguage}
          label='Which Library?' />
        <LinkComponent onChange={this.onSelectMethod} apiMethods={apiMethods} />
        <TextAreaComponent onChange={this.onFormChange} onSubmit={this.onFormSubmit} />
        <FooterComponent />
        <SnackBarComponent
          active={this.state.modal}
          label={this.state.result.toString()}
          onTimeout={this.onModal}
          onClick={this.onModal} />
      </div>
    )
  }
}

export default App
