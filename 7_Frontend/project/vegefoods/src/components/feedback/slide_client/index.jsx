import React from 'react';

const SlideClient = props => {
    const {
        id,
        image,
        text,
        clientName,
        position
    }=props;

    return(
          <div className="owl-item active center" style={{display: 'flex'}}>
            <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url${ image }`}}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text text-center">
                    <p className="mb-5 pl-4 line">{ text }</p>
                    <p className="name">{ clientName }</p>
                    <span className="position">{ position }</span>
                  </div>
                </div>
            </div>
          </div>
    )
}

export default SlideClient;