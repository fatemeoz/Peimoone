import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import CKEditor from "../components/myCKEditor";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Link from "../components/Link";
import "../styles/CustomStyles.css";
import "../styles/CKEditor.css";

function EditPost(props) {
    const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
    const [content, setContent] = useState('');
    const [title, setTtile] = useState('');

    useEffect(() => {
        console.log(props.match.params.id);
        axios
            .post(`${process.env.REACT_APP_SERVER}/api/recipes`, {
                _id: props.match.params.id,
            })
            .then((res) => {
                setContent(res.data[0].content)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container
            fluid={true}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
            <Row bsPrefix="row-marg">
                <Col xs={12}>
                    <div className="App">
                        <CKEditor init={content} handler={setContent} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default EditPost;
