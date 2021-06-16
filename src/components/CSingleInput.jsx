import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent'
import { Form, Input } from 'antd'
import 'antd/dist/antd.css'

class CSingleInput extends React.Component {

  render() {
    const { id, label, placeholder, attr, ismust } = this.props
    console.log('label: ', label);
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }
    return (
      <Form {...layout}>
        <Form.Item label={label} name={attr} required={Boolean(ismust)}>
          <Input id={id} name={attr} placeholder={placeholder} />
        </Form.Item>
      </Form>
    )
  }
}
export default CSingleInput

CSingleInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  attr: PropTypes.string,
  ismust: PropTypes.string,
}


customElements.define(
  'c-singleinput',
  reactToWebComponent(CSingleInput, React, ReactDOM)
)
