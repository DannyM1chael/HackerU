import React from 'react';

function SizeSelector(props) {
    
    return(
        <div className="col-md-6">
            <div className="form-group d-flex">
                <div className="select-wrap">
                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                    <select name="" id="" className="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SizeSelector;