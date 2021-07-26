import React from "react";
import '../App.css';
import emailjs from "emailjs-com";
import { Form, Input, InputNumber, Button } from 'antd';
import { Styles } from "../components/styles";

export default function Contact() {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_f2ok7l7', 'template_7gwb6st', e.target, 'user_SvE8HjG8uEiUex1GOe5OC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Styles>
      <h4>Vous avez une question veuillez completer le formulaire ci-dessous</h4>
      <h5>
        ou allez à la page contact de L'IFIAG en cliquant 
        <a href="https://www.ifiag.org/contact/" target="_blank"> ici </a>
      </h5>
      
      <Form {...layout} name="nest-messages" 
                        onFinish={sendEmail} validateMessages={validateMessages} >
        <div className="container" style={{ marginTop: "5%" }}>
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          
          <Form.Item name={['user', 'message']} label="Message" >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Envoyer
            </Button>
          </Form.Item>
        </div>
      

      </Form>
    </Styles>

  );
}