import React from "react"
import Header from "./header"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: 5,
          maxWidth: rhythm(30),
        }}
      >
        <Header title={this.props.title} />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
