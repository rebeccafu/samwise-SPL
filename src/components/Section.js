import React from 'react';

import './Section.css'
import Container from 'react-bootstrap/Container' 

export default function Section(props) {
    return (
        <Container className={`${props.center ? 'text-center' : ''} progress`}>
            { props.children }
        </Container>
        
    )
}