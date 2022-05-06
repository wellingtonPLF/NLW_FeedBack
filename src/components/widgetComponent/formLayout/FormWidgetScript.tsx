import React, { FormEvent, useCallback, useState } from 'react';
import FormWidgetView from './FormWidgetView';
import feedBackTypes from './FeedStructure/FeedObject';
import { FeedBackType } from './FeedStructure/FeedTypes';

const FormWidgetScript = () => {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | any>(null)
    const [screenShot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('')
    const [feedBackSent, setFeedBackSent] = useState<boolean>(false)

    const handleRestartFeedBack = () => {
        setFeedBackSent(false);
        setFeedBackType(null);
    }

    const handleSubmitFeedback = (e: FormEvent) => {
        e.preventDefault();
        setFeedBackSent(true);
    }

    return (
        <>
            <FormWidgetView getFeedBackType={feedBackType} getFeedArray={feedBackTypes} screenShot={screenShot}
            setKeys={setFeedBackType} restartFeedBack={handleRestartFeedBack} onScreenShootTook={setScreenShot}
            setMessage={setComment} showSubmit={handleSubmitFeedback} content={comment} getFeedSent={feedBackSent}/>   
        </>
    );
};

export default FormWidgetScript;