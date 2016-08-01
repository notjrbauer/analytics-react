import React from 'react'
import { Panel, Layout, Form } from 'react-toolbox'
import theme from './FooterComponent.scss'

class FooterComponent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <Layout theme={theme}>
        <Panel>
          <label>
            Calls made from the simulator will show up in the <a href='https://segment.com'>segment/testing</a> project.
          </label>
        </Panel>
      </Layout>
    )
  }
}

export default FooterComponent
