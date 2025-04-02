import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import { setProducts } from '../JS/redux/slices/productSlice.js';

const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            name
            price
            image
        }
    }
`;

const ProductPage = () => {
    const dispatch = useDispatch();
    const { data, loading } = useQuery(GET_PRODUCTS);
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        if (data) {
            dispatch(setProducts(data.products));
        }
    }, [data, dispatch]);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="container mt-4">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5>{product.name}</h5>
                                <p>${product.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
