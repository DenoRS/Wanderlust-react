import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="https://www.facebook.com/images/fb_icon_325x325.png" thumbnail circle />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar