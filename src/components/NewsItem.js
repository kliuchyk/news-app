import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function NewsItem({ title, description, urlToImage, url }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={urlToImage ? urlToImage : `holder.js/100px180?text=Image cap`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`${description.slice(0, 77)}...`}</Card.Text>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          <Button variant="primary">Read more</Button>
        </a>
      </Card.Body>
    </Card>
  );
}
