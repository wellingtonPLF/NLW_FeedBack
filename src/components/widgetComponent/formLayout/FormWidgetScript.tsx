import React, { FormEvent, useCallback, useState } from 'react';
import FormWidgetView from './FormWidgetView';
import feedBackTypes from './FeedStructure/FeedObject';
import { FeedBackType } from './FeedStructure/FeedTypes';
import { api } from '../../../shared/services/api';

const FormWidgetScript = () => {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | any>(null)
    const [screenShot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('')
    const [feedBackSent, setFeedBackSent] = useState<boolean>(false)
    const [isSendingFeedBack, setIsSendingFeedBack] = useState<boolean>(false)

    const handleRestartFeedBack = () => {
        setFeedBackSent(false);
        setFeedBackType(null);
    }

    const handleSubmitFeedback = async(e: FormEvent) => {
        e.preventDefault();

        setIsSendingFeedBack(true);

        await api.post('/feedbacks', {
            type: feedBackType,
            comment,
            screenShot
        })
        setIsSendingFeedBack(false);
        setFeedBackSent(true);
    }

    return (
        <>
            <FormWidgetView getFeedBackType={feedBackType} getFeedArray={feedBackTypes} screenShot={screenShot}
            setKeys={setFeedBackType} restartFeedBack={handleRestartFeedBack} onScreenShootTook={setScreenShot}
            setMessage={setComment} showSubmit={handleSubmitFeedback} content={comment} getFeedSent={feedBackSent}
            isFeedLoading={isSendingFeedBack}/>   
        </>
    );
};

export default FormWidgetScript;