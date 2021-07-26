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





// import React from "react";
// import '../App.css';
// import { Styles } from '../components/Styles';
// import { useHistory } from "react-router-dom";
// import { Form, Input, Button} from "antd";


// const layout = {
//   labelCol: {
//     span: 5,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// export default function Signup() {
//   let history = useHistory();

//   const onFinish = async (data) => {
//     try {
//       // Should format date value before submit.
//       console.log("Received values of form: ", data);
//       delete data.confirm_password;
//       data.age = parseInt(data.age)
//       const response = await fetch("http://localhost:8000/auth/signup", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       if (response) {
//         const tokenObj = await response.json();
//         localStorage.setItem("token", tokenObj.token);
//         history.push("/welcome");
        
//       }
//     } catch (err) {
//       console.log(err, 'marche po');
//     }
//   };

//   return (

//     <Styles>
//       <Form style={{backgroundImage: "linear-gradient(to bottom, #ffffff 2%, #D6EAF8)"}} {...layout} name="basic" onFinish={onFinish} className="formInscrition">
//         <h2>Inscription</h2>

//         <table>
//           <thead>
//             <tr>
//               <th colspan="2"></th>
//             </tr>
//           </thead>
//           <tbody style={{textAlign : "right",}}>
            
//             <tr>
//               <td><span style={{color:"red"}}>*</span> Prenom :</td>
//               <td> 
//                 <Form.Item
//                   label=""
//                   name="prénom"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Entrez votre prénom!",
//                     },
//                   ]}
//                 >
//                   <Input style={{ width:"70%", marginRight:"28%"}}/>
//                 </Form.Item>
//               </td>
//             </tr>
//             <tr>
//               <td><span style={{color:"red"}}>*</span> Nom :</td>
//               <td>
//                 <Form.Item
//                   label=""
//                   name="nom"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Entrez votre Nom!",
//                     },
//                   ]}
//                 >
//                   <Input style={{ width:"70%", marginRight:"28%"}}/>
//                 </Form.Item>
//               </td>
//             </tr>
//             <tr>
//               <td><span style={{color:"red"}}>*</span> Numéro :</td>
//               <td>
//                 <Form.Item
//                   name="numero"
//                   label=""
//                   rules={[
//                     {
//                       required: true,
//                       message: "Entrez votre numéro",
//                     },
//                   ]}
//                 >
//                   <Input style={{ width:"70%", marginRight:"28%"}}/>
//                 </Form.Item>
//               </td>
//             </tr>

//             <tr>
//               <td style={{width:"30%"}} > <span style={{color:"red"}}>*</span> Email :</td>
//               <td>
//                 <Form.Item
//                   label=""
//                   name="email"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Entrez votre email !",
//                     },
//                   ]}
//                 >
//                   <Input style={{ width:"70%", marginRight:"28%"}}/>
//                 </Form.Item>
//               </td>
//             </tr>
//             <tr>
//               <td><span style={{color:"red"}}>*</span> Mot de passe :</td>
//               <td>
//                 <Form.Item
//                   label=""
//                   name="motDePasse"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Entrez votre mot de passe!", /*modification css à mettre pour que ça soit aligner quand ça apparait*/
//                     },
//                   ]}
//                 >


//                     <Input.Password 
//                       style={{ display: "inline", width: "70%", marginRight: "68.4%" }}
                      
//                     />

//                 </Form.Item>
//               </td>
//             </tr>
//             <tr>
//               <td><span style={{color:"red"}}>*</span> Confirmation du mot de passe :</td>
//               <td>
//                 <Form.Item
//                   label=""
//                   name="confirm_password"
//                   dependencies={["motDePasse"]}
//                   rules ={[
//                     {
//                       required: true,
//                       message: "Confirmez votre mot de passe !",
//                     },
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue("motDePasse") === value) {
//                           return Promise.resolve();
//                         }
//                         return Promise.reject(
//                           new Error("Vos mots de passes doivent etre identiques!") /*modification css à mettre pour que ça soit aligner quand ça apparait*/
//                         );
//                       },
//                     }),
//                   ]}
//                 >
//                   <Input.Password
//                     style={{ display: "inline", width: "70%", marginRight: "68.4%" }}

//                   />

//                 </Form.Item>
//               </td>
//             </tr>

//           </tbody>
//         </table>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button style={{ marginRight:"17%", marginBottom:"2%"}} type="primary" htmlType="submit">
//             S'inscrire
//         </Button>
//         </Form.Item>
//       </Form>


//     </Styles>
  

//   );
// }








