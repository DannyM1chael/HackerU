import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../../router/url';
import CategoryImg from '../../../../components/assets/images/category.jpg';
import CategoryImg1 from '../../../../components/assets/images/category-1.jpg';
import CategoryImg2 from '../../../../components/assets/images/category-2.jpg';
import CategoryImg3 from '../../../../components/assets/images/category-3.jpg';
import CategoryImg4 from '../../../../components/assets/images/category-4.jpg';

function Category(props) {
    
    return(
        <section className="ftco-section ftco-category ftco-no-pt">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch d-flex">
								<div className="category-wrap-2 ftco-animate img align-self-stretch d-flex fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg })`}}>
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><Link to={ URL.SHOP } className="btn btn-primary">Shop now</Link></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg1 })`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><Link to={ URL.SHOP }>Fruits</Link></h2>
									</div>
								</div>
								<div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg2 })`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><Link to={ URL.SHOP }>Vegetables</Link></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg3 })`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><Link to={ URL.SHOP }>Juices</Link></h2>
							</div>		
						</div>
						<div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg4 })`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><Link to={ URL.SHOP }>Dried</Link></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Category;