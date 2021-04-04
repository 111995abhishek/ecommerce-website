import React from 'react';
import ProductCategory from '../../components/Category';
import './styles.scss';

const HomePage = props => {
    return (
        <section className="Homepage">
            <ProductCategory />
        </section>
    );
}

export default HomePage;