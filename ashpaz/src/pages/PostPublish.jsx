import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CKEditor from "../components/myCKEditor";
import axios from 'axios';
import "../styles/CustomStyles.css";
import "../styles/CKEditor.css";

function PostPublish() {
    const [content, setContent] = useState("");

    const savePost = (event) => {
        console.log('running')
        const body = {
            author: "User",
            content: content
        }
        axios.post(`${process.env.REACT_APP_SERVER}/api/save-post`, body).then((res) =>{
            console.log(res);
        });
    }

    return (
        <Container
            fluid={true}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
            <Row bsPrefix="row-marg">
                <div
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Row>
            <Row bsPrefix="row-marg">
                <Col xs={12}>
                    <div className="App">
                        <CKEditor handler={setContent} />
                    </div>
                </Col>
            </Row>
            <Row bsPrefix="row-marg" >
                <Col className="div-right-align" xs={12} lg={2}>
                    <Button size='lg' block onClick={savePost}>Post</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PostPublish;
