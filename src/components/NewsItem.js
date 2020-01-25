import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function NewsItem({
  title,
  description,
  urlToImage,
  author,
  content
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`${description.slice(0, 77)}...`}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}
