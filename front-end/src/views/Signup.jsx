import React from "react";
import '../App.css';
import {useHistory} from "react-router-dom";
import {Form, Input, Button} from "antd"

export default function Signup() {
    return (
        <Form name="basic" className="formInscription">
        <h2>Inscription</h2>
         <Form.Item label="email" rules={[
             {
                 required:true,
                 message:"Entrez votre email !",
             }
         ]}>
         <Input />
    
        </Form.Item>
    
        <Form.Item
              label="Mot de passe"
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
              label="Mot de passe"
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
              name="numero"
              label="Numéro"
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
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                S'inscrire
              </Button>
            </Form.Item>
    </Form> 
    );
    
}
 