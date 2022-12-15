import React from 'react';
import Header from '../../../../Components/Header/Header';
import Overview from '../../Overview/Overview';
import ActiveOrdes from '../ActiveOrder/ActiveOrdes';
import {MdVerified} from 'react-icons/md';
import {AiTwotoneStop} from 'react-icons/ai';

const ShiptedOrder = () => {
    return (
        <div>
            <Header>
                <div className="d-flex justify-content-between pt-3 pb-5">
                    <div>
                        Mono Super Market <MdVerified></MdVerified>
                    </div>
                    <div>
                        Online <AiTwotoneStop />
                    </div>
                </div>
            </Header>
            <div className='mx-2'>
                <Overview></Overview>
                <ActiveOrdes className='mx-3'></ActiveOrdes>
            </div>
        </div>
    );
};

export default ShiptedOrder;