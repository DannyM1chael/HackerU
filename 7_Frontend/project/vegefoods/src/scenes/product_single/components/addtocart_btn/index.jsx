import React from 'react';
import { Link } from 'react-router-dom';
import { updateCart, updateCartCounter, updateCartTotal } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function AddToCartBtn(props) {
    const{ id } = props;

    const cartData = useSelector(store => store.app.cart)
    const dispatcher = useDispatch();

    const handleAddToCart = () =>{
        const addedProduct = cartData.filter(product => product.id === id);

        if(addedProduct[0]){
            dispatcher({
                type: updateCartCounter.getType(),
                payload:{id, quantity: addedProduct[0].quantity + 1},
            })
        }else{
            dispatcher({
                type: updateCart.getType(),
                payload: [...cartData]
            })
        }
        dispatcher({
            type: updateCartTotal.getType(),
        })
    };
    
    return(
        <p><Link to='#' onClick= { handleAddToCart } className="btn btn-black py-3 px-5">Add to Cart</Link></p>
    )
}

export default AddToCartBtn;