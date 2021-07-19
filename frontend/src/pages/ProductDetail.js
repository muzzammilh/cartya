import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetail } from '../actions/productActions';

function ProductDetail({ match, history }) {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productDetail)
    const { error, loading, product } = productDetail

    useEffect( () => {
        dispatch(listProductDetail(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}/?qty=${qty}`);
    }

    return (
        <div>
            <Link to="/" className="btn btn-dark my-3">Go Back</Link>

            { 
                loading ? <Loader /> : 
                error ? <Message variant='danger'> { error } </Message> :
                (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.num_reviews} reviews`} color={'#f8e825'} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush" className="p-1">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price: </Col>
                                            <Col><strong>${product.price}</strong></Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status: </Col>
                                            <Col>
                                                {product.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.count_in_stock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col xs="auto" className='my-1'>
                                                    <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                        {
                                                            [...Array(product.count_in_stock).keys()].map((x) => (
                                                                <option key={x+1} value={x+1}>
                                                                    {x+1}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}
                                    <ListGroup.Item>
                                        <Row>
                                            <Button variant="primary" disabled={product.count_in_stock == 0} onClick={addToCartHandler}>Add to Cart</Button>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>
    )
}

export default ProductDetail