import React from 'react';
import garden from './garden.jpg';
import spritual from './spritual.jpeg';

const ProductCategory = props => {
    return (
        <div className="productcategory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${spritual})`}}>
                    <a>Shop Spritual Products</a>
                </div>

                <div className="item" style={{backgroundImage: `url(${garden})`}}>
                    <a>Shop Graden Products</a>
                </div>

            </div>
            
        </div>
    );
}

export default ProductCategory;
