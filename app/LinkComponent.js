import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Navigation } from 'react-toolbox'
import theme from './LinkComponent.scss'

class LinkComponent extends React.Component {
  constructor () {
    super()

    this.state = {
      method: 'raw'
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (prop) {
    // due to the binding for onClick vals
    this.setState({active: prop.method, method: prop.method})
  }

  handleActive (e) {
    console.dir('Special one activated', e)
  }

  render () {
    var self = this
    let onChange = wrap(self.props.onChange)
    let changeHandler = this.props.onChange
    let apiMethods = this.props.apiMethods // generalize later

    let generateLink = apiMethods.map((link) => {
      return <Link
               theme={theme}
               key={link}
               label={link}
               value={link}
               active={self.state.method === link}
               onClick={onChange.bind(this, {method: link})} />
    })

    function wrap (fn) {
      return function (event) {
        self.onChange(event)
        return fn.call(self, event)
      }
    }
    return (
      <Navigation type='horizontal' theme={theme}>
        {generateLink}
      </Navigation>
    )
  }
}

export default LinkComponent
