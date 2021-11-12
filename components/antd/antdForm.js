import { Form, Input, InputNumber, Button } from 'antd';
import React, { useState } from 'react';
import AntdDate from '../reusableComponent/antdDate';
import {  } from 'antd';

export default function AntdForm() {

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const Demo = () => {

  const [nameField, setNameField] = useState('')
  const [ageField,setAgeField] = useState('')
  const [instansiField,setInstansiField] = useState('')

  console.log(nameField)

  const onFinish = (values) => {
    console.log(values);
  };

  const handleChangeName = (e) => {
    setNameField(e.target.value);
  }

  const handleChangeInstansi = (e) => {
    setInstansiField(e.target.value);
  }

  const handleChangeDate = (e) => {
    console.log('hai aku parent',e)
    setAgeField(e)
  }

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} 
    >
      <Form.Item
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={handleChangeName}/>
      </Form.Item>
      <Form.Item
        label="Instansi"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={handleChangeInstansi}/>
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
      >
        <InputNumber value={ageField} />
      </Form.Item>
      <Form.Item
        label="Birthday"
      >
      <AntdDate handleChangeDates={handleChangeDate}/>
      </Form.Item>
      <Form.Item  label="Website">
        <Input/>
      </Form.Item>
      <Form.Item label="Introduction">
        <Input.TextArea value={"Halo nama saya " + nameField + " saya bekerja di instansi " + instansiField}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
return (
    <div>
        <Demo/>
    </div>
)
}
