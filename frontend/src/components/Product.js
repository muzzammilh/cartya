import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from './Rating';

function Product({ product }) {
    const slug = product.name.replace(/\s+/g, '-').toLowerCase();
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}/${slug}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}/${slug}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product