import React from 'react';
import { Camera } from 'phosphor-react';
import LoadingComponent from '../loadComponent/LoadScript'
import './ScreenShootStyle.scss'
import { ScreenShootButtonProps } from './ScreenStructure/InterfaceScreenShoot'

const ScreenShootView = ({takeShoot, isTakingShoot }: ScreenShootButtonProps) => {
    return (
        <>
            <button type='button' onClick={takeShoot} className='getPicture'>
                { isTakingShoot ? <LoadingComponent /> : <Camera className='w-6 h-6' />}
            </button>
        </>
    );
};

export default ScreenShootView;