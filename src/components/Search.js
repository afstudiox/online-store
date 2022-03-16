import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

class Search extends Component {
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const cartBefore = localStorage.getItem('cart');
    return cartBefore === null ? [] : JSON.parse(cartBefore);
  }

  addProduct = (product) => {
    const newProduct = JSON.stringify(product);
    localStorage.setItem('cart', newProduct);
    // localStorage.setItem('cart', JSON.stringify(product));
  }

  render() {
    const { results } = this.props;
    return (
      <section className="container-search flex-container">
        {
          results.map((product) => (
            <div
              key={ product.id }
              data-testid="product"
              className="container-products flex-container col"
            >
              <Link
                data-testid="product-detail-link"
                to={ `/product-details/${product.id}` }
              >
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.title }</p>
                <p>{`R$${product.price}`}</p>
              </Link>
              <ButtonAddCart addProduct={ this.addProduct } product={ product } />
            </div>
          ))
        }
      </section>
    );
  }
}

Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
