import * as React from 'react'

import { Container } from 'decentraland-ui'
import Navbar from '@dapps/containers/Navbar'

import './Page.css'

export default class Page extends React.PureComponent {
  static defaultProps = {
    children: null
  }

  render() {
    const { children } = this.props

    return (
      <>
        <Navbar />
        <div className="Page">
          <Container>{children}</Container>
        </div>
      </>
    )
  }
}
