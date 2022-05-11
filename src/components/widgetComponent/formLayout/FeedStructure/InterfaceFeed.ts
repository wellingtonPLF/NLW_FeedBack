import { FeedBackType } from './FeedTypes';
import feedBackTypes from './FeedObject'
import { FormEvent } from 'react';

export interface FeedBackTypeStepProps {
    setKeys: (type: FeedBackType ) => void;
    getFeedBackType: FeedBackType;
    getFeedArray: typeof feedBackTypes;
    setMessage: (comment: string) => void;
    showSubmit: (e: FormEvent) => void;
    content: string;
    getFeedSent: boolean;
    isFeedLoading: boolean;
}

export interface FeedSuccessProps {
    restartFeedBack: () => void;
}

export interface ScreenShootSaveButtonProps {
    screenShot: string | null;
    onScreenShootTook: (screenshot: string | null) => void;
}