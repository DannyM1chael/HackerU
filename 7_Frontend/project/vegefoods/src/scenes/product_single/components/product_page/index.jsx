import React from 'react';
import SizeSelector from '../selector';
import AddToCartBtn from '../addtocart_btn';
import Counter from '../../../../components/product_counter';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductPage(props) {
    const { id, quantity } = props;

    const productData = useSelector(store => store.app.shop);
    const volumeData = useSelector(store => store.app.volume);

    return(
        <React.Fragment>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <Link to="#" className="image-popup"><img src={ productData.image } className="img-fluid" alt=""/></Link>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5">
                            <h3>{ productData.title }</h3>
                            <div className="rating d-flex">
                                <p className="text-left mr-4">
                                    <Link to="#" className="mr-2">5.0</Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                </p>
                                <p className="text-left mr-4">
                                    <Link to="#" className="mr-2" style={{color: '#000'}}>100 <span style={{color: '#bbb'}}>Rating</span></Link>
                                </p>
                                <p className="text-left">
                                    <Link to="#" className="mr-2" style={{color: '#000'}}>500 <span style={{color: '#bbb'}}>Sold</span></Link>
                                </p>
                            </div>
                            <p className="price"><span>${ productData.price }</span></p>
                            <p>{ productData.description }</p>
                            <div className="row mt-4">
                                <SizeSelector />
                                <div className="w-100"></div>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <Counter id={ id } quantity={ quantity } />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-12">
                                    <p style={{color: '#000'}}> { volumeData } kg available</p>
                                </div>
                            </div>
                            <AddToCartBtn id={ id }/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProductPage;