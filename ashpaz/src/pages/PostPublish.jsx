import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import CKEditor from "../components/myCKEditor";
import axios from "axios";
import STATUS from "../consts";
import jwtDecode from "jwt-decode";
import "../styles/CustomStyles.css";
import "../styles/CKEditor.css";

function PostPublish(props) {
    const [content, setContent] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);

    axios.interceptors.request.use(function (config) {
        const token = cookies["auth-token"];
        config.headers["auth-token"] = token;
        return config;
    });

    const savePost = (event) => {
        console.log()
        const body = {
            title: document.getElementById('recipe-title').value,
            author: jwtDecode(cookies["auth-token"])._id,
            content: content,
        };
        axios
            .post(`${process.env.REACT_APP_SERVER}/api/save-post`, body)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                if (
                    err.response &&
                    err.response.data.status == STATUS.unauthorized
                ) {
                    removeCookie("auth-token");
                    props.history.push("/");
                }
            });
    };

    return (
        <Container
            fluid={true}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
            {cookies["auth-token"]}
            <Row bsPrefix="row-marg">
                <div
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </Row>
            <Row bsPrefix="row-marg">
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Title
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id='recipe-title'
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row bsPrefix="row-marg">
                <Col xs={12}>
                    <div className="App">
                        <CKEditor handler={setContent} />
                    </div>
                </Col>
            </Row>
            <Row bsPrefix="row-marg">
                <Col className="div-right-align" xs={12} lg={2}>
                    <Button size="lg" block onClick={savePost}>
                        Post
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PostPublish;
