import React from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faGooglePlus,
    faInstagram,
    faPinterest,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <div className="bg-secondary padding-10">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={4}>
                            <FontAwesomeIcon icon={faEnvelope} className="text-primary" />&nbsp;
                            info@gmail.com&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faMobileAlt} className="text-primary" />&nbsp;
                            12345678910
                        </Col>
                        <Col xs={4}>
                            <div className="float-right">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary" />&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faGooglePlus} className="text-primary" />&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faTwitter} className="text-primary" />&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faPinterest} className="text-primary" />&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faInstagram} className="text-primary" />&nbsp;&nbsp;
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;
