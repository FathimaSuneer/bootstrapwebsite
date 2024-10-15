import { useState,useRef,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
export default function Login(){
  
    const refElement=useRef(null)
    const nav=useNavigate()
    const [login,setLogin]=useState({})
    const [msg,setMsg]=useState("")
   
    const changeValue=(e)=>{ 
        setLogin({...login,[e.target.name]:e.target.value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(login)
        if(login.email=="example@gmail.com" && login.password=="123"){
            console.log("login success")
            nav("/userhome")
        }
        else{
            console.log("Not Success")
             
            setMsg("Error in Login")
            nav("/")
        }

    }
    return(
        <>
          <Container>
            <Row className="justify-content-center">
                <Col ref={refElement}  lg={12}>
                <h1  className="text-center text-info">Login Here!</h1>
                <h2>{msg}</h2>
                </Col>
                
             
                <Col lg={12} className="p-3">
                <FloatingLabel label="Email" className="m-3">
                    <Form.Control onChange={changeValue} name="email" type="email" placeholder="your emailid"/>
                </FloatingLabel>
                </Col>
                <Col lg={12} className="p-3">
                <FloatingLabel label="Password" className="m-3">
                    <Form.Control  onChange={changeValue}name="password" type="password" placeholder="your password"/>
                </FloatingLabel>
                </Col>
                <Col lg={12} className="mt-3 p-3" align="center">
                <Button variant="success" onClick={handleSubmit}>
                  Login
                </Button>
                </Col>
            </Row>
            </Container>
        
        </>
    )
}