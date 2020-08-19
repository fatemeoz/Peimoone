import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import './styles/CKEditor.css'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/api/recipes`).then((res) => {
      setRecipes(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Container fluid>
      {recipes.map((recipe, i) =>
        <Row key={i} style={{ margin: '20px 0px 20px 0px', textAlign:'right' }}>
          <Col xs={12}>
            <Card>
              <Card.Body className='farsi'><div
                className="ck-content"
                dangerouslySetInnerHTML={{ __html: recipe.content }}
              ></div></Card.Body>
            </Card>
          </Col>
        </Row>)}
    </Container>
  );
}

export default App;
