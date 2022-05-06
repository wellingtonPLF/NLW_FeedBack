import React from 'react';
import CloseButtonScript from '../closeButtonLayout/CloseButtonScript';
import './FormWidgetStyle.scss'
import { FeedBackType } from './FeedTypes';
import { ArrowLeft } from 'phosphor-react';
import ScreenShotComponent from '../../screenShootComponent/ScreenShootScript'

interface FeedBackTypeStepProps {
    setKeys: (type: FeedBackType ) => void;
    getFeedBackType: FeedBackType;
    getFeedArray: any;
    restartFeedBack: () => void;
}

const FormWidgetView = ({setKeys, getFeedBackType, getFeedArray, restartFeedBack}: FeedBackTypeStepProps) => {
    return (
        <>
            <div className='formWidget'>
                <header>
                    { getFeedBackType && (
                        <button type='button' onClick={restartFeedBack} className='arrowLeftBtn'>
                            <ArrowLeft weight="bold" className="w-4 h-4" />
                        </button>
                    )}

                    <span className='text-xl leading-6 flex items-center gap-2'>
                        { getFeedArray[getFeedBackType] ? ( 
                            <>
                                <img src={getFeedArray[getFeedBackType].image.source} 
                                alt={getFeedArray[getFeedBackType].image.alt} className='w-6 h-6'/>
                                { getFeedArray[getFeedBackType].title }
                            </>                            
                            ) : (
                                'Send your feedback'
                            )
                        }
                    </span>
                    <CloseButtonScript />
                </header>

                {
                    !getFeedBackType ? (
                        <div className='formBody'>
                            { Object.entries(getFeedArray).map(
                                ([key, value]: any) => {
                                    return (
                                        <button key={key} onClick={() => setKeys(key as FeedBackType)} 
                                        className='threeIcons'>
                                            <img src={value.image.source} alt={value.image.alt} />
                                            <span>{value.title}</span>
                                        </button>
                                    );
                                } 
                            )}
                        </div>
                    ) : (
                        <form className='my-4 w-full'>
                            <textarea className='formTextArea scrollbar scrollbar-thumb-zinc-700 
                            scrollbar-track-transparent scrollbar-thin' placeholder="Let me know what's going on..." />

                            <div className='flex gap-2 mt-2'>
                                <ScreenShotComponent />
                                <button type="submit" className='buttonFooter bg-brand-500'>Send feedback</button>
                            </div>
                        </form>
                    )
                }
                
                <footer className='formFooter'>
                    A good feedBack by <a className='underline underline-offset-2'>WellingtonPLF</a>
                </footer>
            </div>   
        </>
    );
};

export default FormWidgetView;