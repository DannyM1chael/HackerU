import React from 'react';
import * as PropTypes from 'prop-types';
import Remove from './remove';
import Counter from '../../../components/product_counter'
import { useSelector } from 'react-redux';

function Row({ id, image, title, price, quantity}) {

    return(
        <React.Fragment>
            <tr className="text-center">
                <Remove id={ id }/>
                <td className="image-prod">
                    <div className="img" style={{backgroundImage : `url(${ image })`}}>
                    </div>
                </td>
                <td className="product-name">
                    <h3>{ title }</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                </td>
                <td className="price">${ price.toFixed(2) }
                </td>
                <Counter id={ id } quantity={ quantity } />
                <td className="total"> ${ (price * quantity).toFixed(2) }
                </td>
                
            </tr>
        </React.Fragment>
    )
}

Row.propTypes = {
    id: PropTypes.number,
    image: PropTypes.any,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    total: PropTypes.number,

};

export default Row;