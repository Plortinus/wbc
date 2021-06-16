import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent'
import { Button } from 'antd'
import 'antd/dist/antd.css'

class CButton extends React.Component {

  render() {
    const { type, text } = this.props
    return <Button type={type}>{text}</Button>
  }
}

CButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
}

export default CButton

customElements.define(
  'c-button',
  reactToWebComponent(CButton, React, ReactDOM)
)
