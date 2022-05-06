import React from 'react';
import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';
import './CloseButtonStyle.scss'

const CloseButtonView = () => {
    return (
        <>
            <Popover.Button className="closePopoverBtn" title='Close Form'>
                {/*Esse x é o icon*/}
                <X className='w-4 h-4' weight='bold'></X>
            </Popover.Button>
        </>
    );
};

export default CloseButtonView;