import React from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import theme from './DropdownComponent.scss'

class DropdownComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: 'nodejs'
    }
    this.handleChange.bind(this.handleChange)
  }

  handleChange (value) {
    this.setState({selected: value})
  }

  render () {
    let source = this.props.source
    let onChange = this.props.onChange
    let language = this.props.language

    return (
      <Dropdown
        theme={theme}
        auto={false}
        source={source}
        value={this.state}
        onChange={onChange}
        label='Which Library?'
        value={language} />
    )
  }
}

export default DropdownComponent
