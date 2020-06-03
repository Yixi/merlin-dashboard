import * as React from 'react'
import './index.scss'
import { Form, Input, Button } from 'antd'
import { ISSSubscription } from '@root/utils/SSDataConvert'

const SSSubscription: React.FC<{config: ISSSubscription}> = (props) => {

  const [form] = Form.useForm()

  const save = () => {
    console.log(form.getFieldsValue())
  }

  return (
    <div className="SSSubscription card">
      <div>订阅设置</div>
      <div>
        <Form
          name="basic"
          form={form}
        >
          <Form.Item
            label="订阅地址"
            name="links"
            initialValue={props.config.link}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={save}>保存并订阅</Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default SSSubscription
