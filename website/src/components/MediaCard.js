import React from "react";
import { Card, Image } from "semantic-ui-react";
import Netflix from "../img/netflix.webp"

function MediaCard({ movie: { image, url, name } }) {
  return (
    <Card fluid color="orange" href={url} target="_blank">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Image src={ Netflix } size='mini' rounded />
      </Card.Content>
    </Card>
  );
}

export default MediaCard;
