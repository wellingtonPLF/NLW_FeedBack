import React, { useState } from 'react';
import FormWidgetView from './FormWidgetView';
import feedBackTypes from './FeedObject';
import { FeedBackType } from './FeedTypes';

const FormWidgetScript = () => {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | any>(null)

    const handleRestartFeedBack = () => {
        setFeedBackType(null);
    }

    return (
        <>
            <FormWidgetView getFeedBackType={feedBackType} getFeedArray={feedBackTypes} 
            setKeys={setFeedBackType} restartFeedBack={handleRestartFeedBack}/>   
        </>
    );
};

export default FormWidgetScript;