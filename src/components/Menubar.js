import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './../assets/logo.png';

class Menubar extends React.Component {
    render() {
        return (
            <div className="padding-10">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={1}>
                            <div className="mt-2">
                                <img src={logo} />
                            </div>
                        </Col>
                        <Col>
                            <ul className="list-menu">
                                <li><strong><a href="" className="text-primary">Home</a></strong></li>
                                <li><strong><a href="" className="text-primary">Portfolio</a></strong></li>
                                <li><strong><a href="" className="text-primary">Blog</a></strong></li>
                                <li><strong><a href="" className="text-primary">Pages</a></strong></li>
                                <li><strong><a href="" className="text-primary">Features</a></strong></li>
                                <li><strong><a href="" className="text-primary">Megamenu</a></strong></li>
                                <li><strong><a href="" className="text-primary">Contact</a></strong></li>
                            </ul>
                        </Col>
                        <Col xs={1}>
                            <div className="text-right mt-2">
                                <FontAwesomeIcon icon={faSearch} className="text-primary" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Menubar;