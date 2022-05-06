import React from 'react';
import FeedSuccessView from './FeedSuccessView';
import { FeedSuccessProps  } from '../formLayout/FeedStructure/InterfaceFeed'

const FeedSuccessScript = ({restartFeedBack}: FeedSuccessProps) => {
    return (
        <>
            <FeedSuccessView restartFeedBack={restartFeedBack}/>   
        </>
    );
};

export default FeedSuccessScript;