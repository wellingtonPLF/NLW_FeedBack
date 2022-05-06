import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import ScreenShootView from './ScreenShootView';
import { ScreenShootSaveButtonProps } from '../widgetComponent/formLayout/FeedStructure/InterfaceFeed'
import { Trash } from 'phosphor-react';

const ScreenShootScript = ({onScreenShootTook, screenShot}: ScreenShootSaveButtonProps) => {
    const [isTakingScreenShoot, setIsTakingScreenShoot] = useState(false)

    const handleTakeScreenShoot = async () => {
        setIsTakingScreenShoot(true)
        const canvas = await  html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        onScreenShootTook(base64image)
        setIsTakingScreenShoot(false)
    }

    if (screenShot){
        return  (
            <button type='button' className='afterShot' onClick={() => onScreenShootTook(null)} 
            style={{backgroundImage: `url(${screenShot})`, backgroundPosition: 'right bottom', backgroundSize: 180}}>
                <Trash weight='fill' />
            </button>
        )
    }

    return (
        <>
            <ScreenShootView 
            takeShoot={handleTakeScreenShoot}
            isTakingShoot={isTakingScreenShoot}  />   
        </>
    );
};

export default ScreenShootScript;