import React from 'react';

const CustomerCard = ({customerData}) => {
    const {name, order, picture} = customerData;

    // If picture not first letter and last letter
    let first = name.split(' ').slice(0,1).join(' ').slice(0,1);
    let last = name.split(' ').slice(-1).join(' ').slice(0,1);

    return (
        <div className='mx-3'>
            <div className="container ">
                <div className='row p-2'>
                    <div className="col-4">
                        {
                            picture ? <img className='product-picture rounded' src={picture} alt="picture" />:
                            <div className='rounded text-center py-4 fw-bold fs-3' style={{background:"#eeeeee"}}>{first+" "+last}</div>
                        }
                    </div>
                    <div className="col-6">
                        <div className='d-flex flex-column justify-content-start align-item-center text-start'>
                            <div className='fs-6 fw-bold'>{name}</div>
                            <div className='fw-semibold text-secondary'>{order} Order</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;