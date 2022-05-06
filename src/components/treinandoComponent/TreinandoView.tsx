import React, { useState } from 'react';

interface BtnProps {
    text?: string
}

const Testando = (props: BtnProps) => {
    return (
        <>
            <button>{props.text ?? 'Default'}</button> 
            
        </>
    )
}

const Treinando = () => {
    const [vai] = useState(1)
    const [vei] = useState(2)

    return (
        <>
            <Testando text='vai'/> <Testando />

            { 
                vai ===1 ? (<div>hi</div>) : 
                (vai === 2 ? (<div>maybe</div>) : 
                (<div>ok</div>))
            }

            {
                vai === 1 ? (<div>Hello</div>) : (
                    <>
                        {
                            vei === 2 ? (<div>aa</div>) : (<div>aa</div>)
                        }
                    </>
                )
            }
        </>
    );
};

export default Treinando;
