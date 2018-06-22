import React, { Component } from 'react'
import axios from 'axios'
import { Header, Card, Segment, Icon } from 'semantic-ui-react';

class Beers extends Component {
  state = { beers: [] }

  componentDidMount() {
    axios.get('http://localhost:5100/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data.entries })
      })
      .catch( error => {
        debugger
        console.log(error.response);
    });
  }

  render() {
    return (
      <Segment>
          <Header as='h1' textAlign='center'>Beers</Header>

        <Card.Group>
            { this.state.beers.map( beer =>
              <Card 
                key={beer.id}
              >
                <Card.Content>{beer.name_display}</Card.Content>
                <Card.Meta>{beer.description}</Card.Meta>
                <Card.Content extra>
                <Icon name="beer" /><p>IBUs:{beer.ibu} | ABV:{beer.abv}</p>
                </Card.Content>
              </Card>
              )
            }
        </Card.Group>
      </Segment>
    )
  }
}

export default Beers


// TODO - make each card a link using the Semantic UI docs and have them link to a view page with a conditionally rendered description (some don't seem to have descriptions), along with all the metadata.