import React, { Component } from 'react';
import { useSelector, useDispatch, connect} from 'react-redux';
import CartButton from '../../../shop/components/cart_btn';
import products from '../../../../components/api/dataProducts';

class FeaturedProducts extends Component {
    
    render(){
        let productList = products.map(product =>{
            return(
                <div className="col-md-6 col-lg-3" key={ product.id }>
                    <div className="product" >
                        <div className="img-prod"><img className="img-fluid" src= { product.image } alt=""/>
                            <div className="overlay"></div>
                        </div>
                        <div className="text py-3 pb-4 px-3 text-center">
                            <h3><div> { product.title } </div></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span className="mr-2 price">${ product.price }.00</span></p>
                                </div>
                            </div>
                            <CartButton />
                        </div>
                    </div>
                </div>
            )
        })
    
        return(
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <span className="subheading">Featured Products</span>
                        <h2 className="mb-4">Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                    { productList }
                </div>   		
            </div>
        );
    }
}

export default FeaturedProducts;