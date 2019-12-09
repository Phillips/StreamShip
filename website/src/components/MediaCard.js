import React from "react";
import { Card, Icon, Image, Transition } from "semantic-ui-react";

function MediaCard({ movie: { image, url, name } }) {
  return (
    <Card fluid href={url} target="_blank">
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
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

export default MediaCard;
