import React from 'react';
import CloseButtonScript from '../closeButtonLayout/CloseButtonScript';
import './FormWidgetStyle.scss'
import { ArrowLeft } from 'phosphor-react';
import { FeedBackType } from './FeedStructure/FeedTypes';
import ScreenShotComponent from '../../screenShootComponent/ScreenShootScript'
import { FeedBackTypeStepProps, ScreenShootSaveButtonProps, FeedSuccessProps } from './FeedStructure/InterfaceFeed'
import FeedSuccessComponent from '../feedSuccessLayout/FeedSuccessScript';

const FormWidgetView = ({setKeys, getFeedBackType, getFeedArray, restartFeedBack, setMessage, 
    showSubmit, content, onScreenShootTook, getFeedSent, screenShot} : 
    (FeedBackTypeStepProps & ScreenShootSaveButtonProps & FeedSuccessProps)) => {
    return (
        <>
            <div className='formWidget'>
                {
                    getFeedSent ? (<FeedSuccessComponent restartFeedBack={restartFeedBack} />) : (
                        <>
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
                                    <form onSubmit={showSubmit} className='my-4 w-full'>
                                        <textarea className='formTextArea scrollbar scrollbar-thumb-zinc-700 
                                        scrollbar-track-transparent scrollbar-thin' placeholder="Let me know what's going on..." 
                                        onChange={event => setMessage(event.target.value)}/>
            
                                        <div className='flex gap-2 mt-2'>
                                            <ScreenShotComponent screenShot={screenShot} onScreenShootTook={onScreenShootTook}/>
                                            <button type="submit" disabled={content.length === 0}
                                            className='buttonFooter bg-brand-500'>Send feedback</button>
                                        </div>
                                    </form>
                                )
                            }
                        </>
                    )
                }                
                <footer className='formFooter'>
                    A great feedBack by <a className='underline underline-offset-2'>WellingtonPLF</a>
                </footer>
            </div>   
        </>
    );
};

export default FormWidgetView;