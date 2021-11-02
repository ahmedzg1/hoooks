import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

 

  const Moviecard = ({movie}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <ReactStars
    count={5}
  value={movie.rate}
    size={24}
    edit={false}
    activeColor="#ffd700"
  />
      </Card>
    
    </div>
  
  );
};

 


 

export default Moviecard;



