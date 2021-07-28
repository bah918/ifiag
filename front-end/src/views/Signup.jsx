import React from "react";
import '../App.css';
import { Styles } from '../components/styles';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function Signup() {
  let history = useHistory();

  const onFinish = async (data) => {
    try {
      // Should format date value before submit.
      console.log("Received values of form: ", data);
      delete data.confirm_password;
      data.age = parseInt(data.age)
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response) {
        const tokenObj = await response.json();
        localStorage.setItem("token", tokenObj.token);
        history.push("/welcome");
        
      }
    } catch (err) {
      console.log(err, 'marche pas');
    }
  };

  return (

    <Styles>
      <Form {...layout} name="basic" onFinish={onFinish} className="formInscrition">
        
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Entrez votre email !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mot de Passe"
          name="motDePasse"
          rules={[
            {
              required: true,
              message: "Entrez votre mot de passe!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirmer MDP"
          name="confirm_password"
          dependencies={["motDePasse"]}
          rules={[
            {
              required: true,
              message: "Confirmez mot de Passe !",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("motDePasse") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Vos mots de passes doivent etre identiques!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Prénom"
          name="prénom"
          rules={[
            {
              required: true,
              message: "Entrez votre prénom!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nom"
          name="nom"
          rules={[
            {
              required: true,
              message: "Entrez votre Nom!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="numero"
          label="Numéro de Tél"
          rules={[
            {
              required: true,
              message: "Entrez votre numéro",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            <a href="http://localhost:3000/login">S'inscrire</a>
        </Button>
        </Form.Item>
      </Form>

    </Styles>

  );
}



  




