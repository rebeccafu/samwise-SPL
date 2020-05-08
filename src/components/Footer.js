import React from 'react';
import { Row,Col } from 'react-bootstrap';

import './Footer.css';
import samwiselogo from '../images/samwiselogo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content text-center">
                <Row>
                    <Col>
                    <div>
                        <p className='mission'>
                            <strong>Our Mission:</strong> To spread some positive news and good vibes during these trying times. 
                        </p>
                    </div>
                    <div>
                        <p className='samwise'>
                            Samwise is a task management tool that aims to help Cornell students create tangible timelines for their busy schedules. If you’d like to learn more about our product, visit <a href='https://www.samwise.today' rel='noopener noreferrer' target='_blank'><strong>www.samwise.today!</strong></a>
                        </p>
                    </div>
                    <div className='bear-align'>
                        <a href='https://www.samwise.today' rel='noopener noreferrer' target='_blank'><img className='samwise-logo' src={samwiselogo} alt='samwise logo'/></a>
                    </div>
                    </Col>
                </Row>
                
                
            </div>
        </div>
    )
}