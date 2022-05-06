import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import ScreenShootView from './ScreenShootView';

const ScreenShootScript = () => {
    const [isTakingScreenShoot, setIsTakingScreenShoot] = useState(false)

    const handleTakeScreenShoot = async () => {
        setIsTakingScreenShoot(true)
        const canvas = await  html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        setIsTakingScreenShoot(false)
    }

    return (
        <>
            <ScreenShootView isTakingShoot={isTakingScreenShoot} takeShoot={handleTakeScreenShoot} />   
        </>
    );
};

export default ScreenShootScript;