import React from 'react';
import CartButton from '../cart_btn';

const Product = props => {
    const {
            id,
            category,
            title,
            description,
            price,
            image
        } = props;

    return(
        <div className="col-md-6 col-lg-3">
            <div className="product" id= { id }>
                <div className="img-prod"><img className="img-fluid" src= { image } alt=""/>
                    <div className="overlay"></div>
                </div>
                <div className="text py-3 pb-4 px-3 text-center">
                    <h3><div> { title } </div></h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span className="mr-2 price">${ price.toFixed(2) }</span></p>
                        </div>
                    </div>
                    <CartButton />
                </div>
            </div>
        </div>
    )
}

export default Product;