import React from 'react'
// import Button from 'antd/lib/button'
// import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Header } from '../Header'
import { Button, PageHeader, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        RC Aracade Docs
      </p>
      <h2>Documentation for an open source Arcade Site led by Rahat Chowdhury</h2>
      <p>
        This is a fork of{' '}
        <a href="https://github.com/cvluca/gatsby-starter-markdown">
          https://github.com/cvluca/gatsby-starter-markdown
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          href="https://twitter.com/rahatcodes"
          target="_blank"
        >
          Twitter
          <Icon type="twitter" />
        </Button>
        <Button
          href="https://github.com/Rahat-ch/Arcade"
          target="_blank"
        >
          Github
          <Icon type="github" />
        </Button>
        <Button>
          <Link to="/contributors">Contributors <Icon type="aliwangwang" /></Link>
        </Button>
        <Button type="primary" >
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
