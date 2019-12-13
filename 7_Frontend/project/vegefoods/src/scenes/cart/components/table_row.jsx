import React from 'react';
import * as PropTypes from 'prop-types';
import Remove from './remove';
import Counter from '../../../components/product_counter'
import { useSelector } from 'react-redux';

function Row({ id, img, title, price, cnt, max }) {


    const cartData = useSelector((store) => store.app.cart);

    let subTotal = 0;
	cartData.forEach( item => {
		subTotal = (item.price * item.cnt).toFixed(2);
	});

    return(
        <React.Fragment>
            <tr className="text-center" key={ id }>
                <Remove />
                <td className="image-prod">
                    <div className="img" style={{backgroundImage : `url(${ img })`}}>
                    </div>
                </td>
                <td className="product-name">
                    <h3>{ title }</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </td>
                <td className="price">${ price }
                </td>
                <Counter id={ id } cnt={ cnt } max={ max } />
                <td className="total"> ${ subTotal }</td>
            </tr>
        </React.Fragment>
    )
}

Row.propTypes = {
    img: PropTypes.any,
    title: PropTypes.string,
    price: PropTypes.number,
    cnt: PropTypes.number,
    total: PropTypes.number,

};

export default Row;