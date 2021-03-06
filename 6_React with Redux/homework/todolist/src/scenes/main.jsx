import React from 'react';
import PropTypes from 'prop-types';
import MainForm from '../components/main_form';
import MainList from '../components/main_list';

export const MainTab = (props) => {

	return (
		<div className="row">
			<div className="col-sm-6">
				<MainForm />
			</div>
			<div className="col-sm-6">
				<MainList  />
			</div>
		</div>
	);
};

MainTab.propTypes = {
	children: PropTypes.object, 
};

export default React.memo(MainTab);
