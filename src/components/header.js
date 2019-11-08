import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
    render() {
        const { title } = this.props

        return (
            <header
                style={{
                    margin: 30,
                    padding: 0
                }}
            >
                <h1
                    style={{
                        padding: 0,
                        margin: 0,
                        textAlign: `center`,
                    }}
                >
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `#5DA2D5`,
                        fontSize: `100%`,                
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </h1>
          </header>
        )
    }
}


export default Header