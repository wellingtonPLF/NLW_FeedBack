import React from 'react'
import { ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react' 
import FormWidgetScript from '../formLayout/FormWidgetScript'
import './WidgetStyle.scss'

export function WidgetView(){
    return (
        <>
            <Popover className='mainPopover'>
                <Popover.Panel>
                    <FormWidgetScript />
                </Popover.Panel>
                <Popover.Button className='popoverBtn bg-brand-500 group'>
                    <ChatTeardropDots className='w-6 h-6' />
                    <span className='popoverBtnChild'>
                        <span className='pl-2'>FeedBack</span>
                    </span>
                </Popover.Button>
            </Popover>
        </>
    )
}
