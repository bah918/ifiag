import styled from 'styled-components';

export const Styles = styled.div`
h1,
h5,
h4{
    color : #37628d;
};

h2{
    text-align : center; 
    color : #777;
    margin : 50px;
};

form{
    display : flex;
    flex-direction : column;
    width : 50%;
    height : auto;
    margin : 10px auto;
    // border : 1px solid white;
    border-radius : 5px;
    box-shadow : 0 8px 16px rgba(0,0,0,.3)
};

button{
    margin-top : 5%;
    margin-left : 20%;
    border : none;
    outline : none;
    cursor : pointer;
    font-size : 14px;
    border-radius : 4px;
    transition : .3s;
    background-color : #37628d;

well:{
        boxShadow: "1px 3px 1px #9E9E9E"
      }
}`;


//backgroundImage: "linear-gradient(to bottom, #ffffff 2%, #D6EAF8)", borderRadius : "5px", boxShadow : 0 8 16 rgba(0,0,0,.3), width:"500px", height:"300px", marginTop: "30%"