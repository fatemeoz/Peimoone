import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Link from "../components/Link";
import "../styles/CustomStyles.css";
import "../styles/CKEditor.css";

function Posts(props) {
    const [cookies, setCookie, removeCookie] = useCookies(["auth-token"]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        console.log("hi");
        axios
            .post(`${process.env.REACT_APP_SERVER}/api/recipes`, {
                author: jwtDecode(cookies["auth-token"])._id,
            })
            .then((res) => {
                setRecipes(res.data);
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
                    <Button style={{width:'100%'}} onClick={()=>{props.history.push('/publish');}}>Create New Recipe</Button>
                </Col>
            </Row>
            <Row>
                {recipes.map((recipe, i) => (
                    <Col xs={12} md={3} key={i}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text dangerouslySetInnerHTML={{
                                            __html: recipe.content.substring(0, 20),
                                        }}>
                                    
                                </Card.Text>
                                <Link to={`/posts/${recipe._id}`}>
                                    <Button>Edit</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Posts;
