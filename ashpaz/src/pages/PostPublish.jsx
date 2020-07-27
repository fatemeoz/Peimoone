import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CKEditor from "../components/myCKEditor";
import "../styles/CustomStyles.css";
import "../styles/CKEditor.css";

function PostPublish() {
    const [content, setContent] = useState("");

    return (
        <Container
            fluid={true}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
            <Row>
                <div
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="App">
                        <CKEditor handler={setContent} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PostPublish;
