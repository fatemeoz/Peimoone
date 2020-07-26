import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Error404 extends Component {
    render() {
        return (
            <Container
                fluid={true}
                style={{ padding: "20px 20px 100px 20px", backgroundColor: "#FFD300" }}
            >
                <div className="dynamicTitle" style={{marginTop:"50%;"}}>
                    404
                </div>
            </Container>
        )
    }
}

export default Error404
