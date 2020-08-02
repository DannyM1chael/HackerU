import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateCartCounter, updateCartTotal, deleteItemFromCart } from '../../store/actions';

function Counter(props) {
  const { id, quantity } = props;

  const dispatcher = useDispatch();

  const handleIncrement = () => {
    dispatcher({
      type: updateCartCounter.getType(),
      payload: { id, quantity: quantity + 1 },
    });
    dispatcher({
      type: updateCartTotal.getType(),
    });
  };

  const handleDecrement = () => {
    if (quantity - 1 === 0) {
      dispatcher({
        type: deleteItemFromCart.getType(),
        payload: { id },
      });
    } else {
      dispatcher({
        type: updateCartCounter.getType(),
        payload: { id, quantity: quantity - 1 },
      });
    }
    dispatcher({
      type: updateCartTotal.getType(),
    });
  };

  const handleChange = (e) => {
    const re = /\D+/gi;
    let value = +e.target.value.replace(re, '');

    dispatcher({
      type: updateCartCounter.getType(),
      payload: { id, quantity: value },
    });
    dispatcher({
      type: updateCartTotal.getType(),
    });
  };

  return (
    <td className="quantity">
      <div className="qty-btn d-flex">
        <div className="input-group mb-3">
          <span className="qty-minus" onClick={handleDecrement}>
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
          <input
            type="number"
            className="quantity form-control input-number"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
          <span className="qty-plus" onClick={handleIncrement}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </td>
  );
}

Counter.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
  max: PropTypes.number,
};

export default Counter;
