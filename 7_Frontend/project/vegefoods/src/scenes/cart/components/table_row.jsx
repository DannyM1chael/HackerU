import React from 'react';
import * as PropTypes from 'prop-types';
import Remove from './remove';
import Counter from '../../../components/product_counter'
import { useSelector } from 'react-redux';

function Row({ id, cnt, max}) {

    const cartData = useSelector((store) => store.app.cart);

    let subTotal = 0;
	cartData.map( product => {
		subTotal = (product.price * product.cnt).toFixed(2);
	});

    return(
        <React.Fragment>
            <tr className="text-center">
                <Remove />
                <td className="image-prod" key={ cartData.id }>
                    <div className="img" style={{backgroundImage : `url(${ cartData.image })`}}>
                    </div>
                </td>
                <td className="product-name">
                    <h3>{ cartData.title }</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </td>
                <td className="price">${ cartData.price }
                </td>
                <Counter id={ id } cnt={ cnt } max={ max } />
                <td className="total"> ${ subTotal }</td>
            </tr>
        </React.Fragment>
    )
}

Row.propTypes = {
    id: PropTypes.number,
    image: PropTypes.any,
    title: PropTypes.string,
    price: PropTypes.number,
    cnt: PropTypes.number,
    total: PropTypes.number,

};

export default Row;