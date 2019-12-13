import React from 'react';
import CategoryImg from '../../scenes/components/assets/images/category.jpg';
import CategoryImg1 from '../../scenes/components/assets/images/category-1.jpg';
import CategoryImg2 from '../../scenes/components/assets/images/category-2.jpg';
import CategoryImg3 from '../../scenes/components/assets/images/category-3.jpg';
import CategoryImg4 from '../../scenes/components/assets/images/category-4.jpg';

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
										<p><a href="#" className="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg1 })`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Fruits</a></h2>
									</div>
								</div>
								<div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg2 })`}}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg3 })`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Juices</a></h2>
							</div>		
						</div>
						<div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated" style={{backgroundImage: `url(${ CategoryImg4 })`}}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Category;