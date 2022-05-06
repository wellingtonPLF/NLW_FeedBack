import React from 'react';
import { Camera } from 'phosphor-react';
import LoadingComponent from '../loadComponent/LoadScript'
import './ScreenShootStyle.scss'

const ScreenShootView = (props: any) => {
    return (
        <>
            <button type='button' onClick={props.takeShoot} className='getPicture'>
                { props.isTakingShoot ? <LoadingComponent /> : <Camera className='w-6 h-6' />}
            </button>
        </>
    );
};

export default ScreenShootView;