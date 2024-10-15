import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TbReceiptRupee } from "react-icons/tb";
import { BsFillBrushFill } from "react-icons/bs";
import axios from 'axios';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Headernav from './headernav';

export default function Productitems() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = "https://fakestoreapi.com/products";
        axios.get(url)
            .then((res) => {
                setProduct(res.data);
            })
    }, []);

    return (
                 <>
                <Headernav/>
                    <Container>
                        <Row className="p-3">
                            <Col>
                                <h1 className="text-center text-primary">Our Products</h1>
                            </Col>
                        </Row>
                        <Row className='justify-content-center border p-3'>
                            {
                                product ?
                                    product.map((items) => {
                                        return (
                                            <Col lg={3} className="p-3 m-3 border shadow rounded" key={items.id}>
                                               
                                                <img src={items.image} alt={items.title} style={{ width: '100%', height: '250px' }} />
                                            
                                                <div className='border mt-2'>
                                                    <h4><TbReceiptRupee className='rupee' />{items.price}</h4>
                                                    <h6>
                                                        <BsFillBrushFill className='m-2' />{items.title}
                                                    </h6>
                                                </div>
                                            </Col>
                                        )
                                    })
                                    :
                                    "No Data Found"
                            }
                        </Row>
                    </Container>
                    </>
              
    );
}