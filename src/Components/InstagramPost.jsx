import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function InstagramPost(props) {

    const {image, title, desc} = props;

    const [likes, setLikes] = useState(0);

    const [liked, setLiked] = useState(false);

    function handleLikes() {
        setLikes(prevState => (!liked ? prevState +1 : prevState-1));
        setLiked(!liked);
    }

  return (
    <div className='justify-content-center d-flex align-items-center'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button outline="primary" onClick={handleLikes}>
            {liked ? "Not liked" : "Like"}
        </Button>
      </Card.Body>
      <Badge bg="primary">{likes} likes</Badge>
    </Card>
    </div>
  )
};

