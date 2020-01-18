import React from 'react';

function BillingForm(props) {
    
    return(
        <div className="col-xl-7 ftco-animate fadeInUp ftco-animated">
						<form action="#" className="billing-form">
							<h3 className="mb-4 billing-heading">Billing Details</h3>
	          	<div className="row align-items-end">
	          		<div className="col-md-6">
	                <div className="form-group">
	                	<label for="firstname">Firt Name</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
	              </div>
	              <div className="col-md-6">
	                <div className="form-group">
	                	<label for="lastname">Last Name</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
                </div>
                <div className="w-100"></div>
		            <div className="col-md-12">
		            	<div className="form-group">
		            		<label for="country">State / Country</label>
		            		<div className="select-wrap">
		                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
		                  <select name="" id="" className="form-control">
		                  	<option value="">France</option>
		                    <option value="">Italy</option>
		                    <option value="">Philippines</option>
		                    <option value="">South Korea</option>
		                    <option value="">Hongkong</option>
		                    <option value="">Japan</option>
		                  </select>
		                </div>
		            	</div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                	<label for="streetaddress">Street Address</label>
	                  <input type="text" className="form-control" placeholder="House number and street name"/>
	                </div>
		            </div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                  <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)"/>
	                </div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                	<label for="towncity">Town / City</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
		            </div>
		            <div className="col-md-6">
		            	<div className="form-group">
		            		<label for="postcodezip">Postcode / ZIP *</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
	                <div className="form-group">
	                	<label for="phone">Phone</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
	              </div>
	              <div className="col-md-6">
	                <div className="form-group">
	                	<label for="emailaddress">Email Address</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                	<div className="form-group mt-4">
										<div className="radio">
										  <label className="mr-3"><input type="radio" name="optradio"/> Create an Account? </label>
										  <label><input type="radio" name="optradio"/> Ship to different address</label>
										</div>
									</div>
                </div>
	            </div>
	          </form>
        </div>
    )
}

export default BillingForm;