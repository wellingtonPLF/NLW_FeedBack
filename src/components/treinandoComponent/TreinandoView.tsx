import React from 'react';

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
    return (
        <>
            <Testando text='vai'/>
            <Testando />
        </>
    );
};

export default Treinando;