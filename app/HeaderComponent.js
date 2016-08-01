import React from 'react'
import { AppBar, Checkbox, IconButton } from 'react-toolbox'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import theme from './HeaderComponent.scss'

class HeaderComponent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Layout>
        <Panel theme={theme}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h1>Analytics Simulator</h1>
            <p>
              Simulate an API call from any Segment library.
            </p>
          </div>
        </Panel>
      </Layout>
    )
  }
}

export default HeaderComponent
