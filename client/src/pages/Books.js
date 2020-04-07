// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import GBSearch from "../utils/GBSearch";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/Form";

export default function Books() {
  const [book, setBook] = useState('');
  const [results, setResults] = useState([]);
  const [gbFormObject, setGBFormObject] = useState({});

  function handleInputChange(event) {
    setBook(event.target.value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (book) {
      GBSearch.findBooks(book)
        // .then(res => console.log(res.data))
        .then(res => {
          console.log(res.data.items);
          setResults(res.data.items);
        })
        .catch(err => console.log(err));
    }
  };

  function handleViewSubmit(event) {
    event.preventDefault();
    alert('Not yet implemented.');
  }

  function handleSaveSubmit(event) {
    event.preventDefault();
    alert('Not yet implemented.');
  }

  return (
    <Container fluid>
      <Row><Col size='md-12'><div>&nbsp;</div></Col></Row>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Better Today?</h1>
            <p>One way of looking at coronavirus and you. </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="card">
            <div className="card-body">
              <h3>Where do you live?</h3>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="gbSearchTitle"
                  placeholder="Enter a city"
                />
                <FormBtn onClick={handleFormSubmit}>
                  Search
                </FormBtn>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Row><Col size='md-12'><div>&nbsp;</div></Col></Row>
      <Row>
        <Col size="md-12">
          <div className="card">
            <div className="card-body">
              <h3>Results</h3>
              <div>

                {results.map(book => (

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="float-right">
                        <FormBtn onClick={handleViewSubmit}>
                          View
                        </FormBtn>
                        <FormBtn onClick={handleSaveSubmit}>
                          Save
                        </FormBtn>
                      </div>
                      <h5 className="card-title">{book.volumeInfo.title}{(book.volumeInfo.subtitle) ? (': ' + book.volumeInfo.subtitle) : ('')}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{book.volumeInfo.authors[0]}</h6>
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title} className="rounded float-left pr-3" />
                      <p className="card-text">{book.volumeInfo.description}</p>
                    </div>
                  </div>

                ))}
                {/* book.length: {gbook.length}
                {(gbook.length) ? (
                  <List>
                    {gbook.map(gbook => (
                      <ListItem key={gbook._id}>
                        <Link to={"/books/" + gbook._id}>
                          <strong>
                            {gbook.title} by {gbook.author}
                          </strong>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )} */}

              </div>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
