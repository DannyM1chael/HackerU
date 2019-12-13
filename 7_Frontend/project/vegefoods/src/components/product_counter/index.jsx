import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateCartCounter } from '../../store/actions';


function Counter(props) {
	const dispatcher = useDispatch();
	const { id, cnt, max } = props;

	const handleIncrement = () => {
		if (cnt + 1 > max) {
			return null;
		}
		dispatcher({
			type: updateCartCounter.getType(),
			payload: {id, cnt: cnt + 1},
		});
	};

	const handleDecrement = () => {
        if (cnt - 1 < 1) {
            return null;
        }
		dispatcher({
			type: updateCartCounter.getType(),
			payload: {id, cnt: cnt - 1},
		});
	};

	const handleChange = (e) => {
		const re = /\D+/gi;
		let value = +e.target.value.replace(re, '');

		dispatcher({
			type: updateCartCounter.getType(),
			payload: {id, cnt: value},
		});
	};


	return (
        
		<td className="quantity">
			<div className="qty-btn d-flex">
				<div className="input-group mb-3">
						<span
							className="qty-minus"
				      onClick={handleDecrement}
						>
							<i className="fa fa-minus" aria-hidden="true"></i>
						</span>
					<input
						type="number"
						className="quantity form-control input-number"
						step="1"
						min="1"
						max="100"
						name="quantity"
						value={ cnt }
						onChange={ handleChange }
					/>
					<span
						className="qty-plus"
			      onClick={ handleIncrement }>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		</td>
	);
};

Counter.propTypes = {
	id: PropTypes.number,
	cnt: PropTypes.number,
	max: PropTypes.number,
};

export default Counter;
