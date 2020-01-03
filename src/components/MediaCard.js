import React from "react";
import { Card, Image } from "semantic-ui-react";
import Netflix from "../img/netflix.webp"
import Rotten from "../img/tomatometer-rotten.svg"
import Fresh from "../img/tomatometer-fresh.svg"

function MediaCard({ movie: { image, url, name, provider, year, rating, duration, genre, description, cast, imdb_score, rotten_tomatoes_score, metacritic_score } }) {

  return (
    <Card fluid color="orange" href={url} target="_blank">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{year}</span>
          <b>|</b>
          <div class="ui circular label"><span className="rating">{rating}</span></div>
          <b>|</b>
          <i class="clock icon"></i><span className="duration">{duration}</span>
          <b>|</b>
          <span className="genre">{genre}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
          <div class="ui stackable four column grid">
            <div class="column">
              <Image class="ui image" src={Netflix} size='mini' rounded />
            </div>
            <div class="column">
              <i class="large yellow star icon"></i>
              {imdb_score}
            </div>
            <div class="column">
              {parseInt(rotten_tomatoes_score.substr(0, rotten_tomatoes_score.indexOf('%'))) < 60 &&
                <Image src={Rotten} size='mini' />
              }
              {parseInt(rotten_tomatoes_score.substr(0, rotten_tomatoes_score.indexOf('%'))) >= 60 &&
                <Image src={Fresh} size='mini' />
              }
              {rotten_tomatoes_score}
            </div>
            <div class="column">
              {parseInt(metacritic_score.substr(0, metacritic_score.indexOf('/'))) > 60 &&
                <div class="ui green label">{metacritic_score.substr(0, metacritic_score.indexOf('/'))}</div>
              }
              {parseInt(metacritic_score.substr(0, metacritic_score.indexOf('/'))) >= 40 && parseInt(metacritic_score.substr(0, metacritic_score.indexOf('/'))) <= 60 &&
                <div class="ui yellow label">{metacritic_score.substr(0, metacritic_score.indexOf('/'))}</div>
              }
              {parseInt(metacritic_score.substr(0, metacritic_score.indexOf('/'))) < 40 &&
                <div class="ui red label">{metacritic_score.substr(0, metacritic_score.indexOf('/'))}</div>
              }
            </div>
          </div>
      </Card.Content>
    </Card>
  );
}

export default MediaCard;
