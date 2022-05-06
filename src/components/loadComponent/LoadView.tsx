import { CircleNotch } from 'phosphor-react';
import React from 'react';
import './LoadStyle.scss'

const LoadView = () => {
    return (
        <div className='loadComponent'>
            <CircleNotch weight='bold' className='w-4 h-4 animate-spin'/>
        </div>
    );
};

export default LoadView;