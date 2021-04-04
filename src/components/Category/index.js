import React from 'react';
import garden from './garden.jpg';
import spritual from './spritual.jpeg';
import './styles.scss';

const ProductCategory = props => {
    return (
        <div className="productcategory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${spritual})`}}>
                    <a className="product-title">Shop Spritual Products</a>
                </div>

                <div className="item" style={{backgroundImage: `url(${garden})`}}>
                    <a className="product-title">Shop Garden Products</a>
                </div>

            </div>
            
        </div>
    );
}

export default ProductCategory;
