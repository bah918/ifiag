import React from "react";
import '../App.css';
//import { useHistory } from "react-router-dom";
//import { form, Input, Button } from "antd";
import { Form, Input, Button } from 'antd';

function Signup(){

    return (
      <Form  className="formInscrition">
        <h2>Inscription</h2>
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

    
           
     )

}
export default Signup;

{
 /**
  * 
  <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1">
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
            </form>
  */
}