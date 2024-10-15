import { Container, FloatingLabel, Form, Row,Col,Button } from "react-bootstrap";
import Headernav from "./headernav";


export default function Signup(){
    return(
        <>
        <Headernav/>
          <Container>
            <Row className="justify-content-center">
                <Col lg={12}>
                <h1 className="text-center text-info">Register Here!</h1>
                </Col>
                <Col lg={6} className="p-3">
                <FloatingLabel label="First Name" className="m-3">
                    <Form.Control name="firstname"type="text" placeholder="your firstname"/>
                </FloatingLabel>
                </Col>
                <Col lg={6} className="p-3">
                <FloatingLabel label="Last Name" className="m-3">
                    <Form.Control name="lastname" type="text" placeholder="your lastname"/>
                </FloatingLabel>
                </Col>
                <Col lg={6} className="p-3">
                <FloatingLabel label="Email" className="m-3">
                    <Form.Control name="email" type="email" placeholder="your emailid"/>
                </FloatingLabel>
                </Col>
                <Col lg={6} className="p-3">
                <FloatingLabel label="Password" className="m-3">
                    <Form.Control name="password" type="password" placeholder="your password"/>
                </FloatingLabel>
                </Col>
                <Col lg={12} className="mt-3 p-3" align="center">
                <Button variant="success">
                    Send
                </Button>
                </Col>
            </Row>
            </Container>
        
        </>
    )
}