import React from 'react';

const Overview = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3>Overview</h3>
                <select className="form-control-sm border-0 " style={{width:"30%", marginRight:"10px", background:"#eee"}}>
                    <option>Last Week</option>
                </select>
            </div>

            <div className="container overflow-hidden text-start mt-3">
                <div className="row gy-3" style={{background: "#e3e3e3"}}>
                    <div className="col-6">
                        <div className="p-3 border bg-light">ORDERS <br /> <span className='fs-4 fw-semibold'>33</span> </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">TOTAL SALES <br /> <span className='fs-4 fw-semibold'>$2918</span> </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">STORE VIEWS <br /> <span className='fs-4 fw-semibold'>301</span> </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">PRODUCT VIEWS <br /> <span className='fs-4 fw-semibold'>19,121</span> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;