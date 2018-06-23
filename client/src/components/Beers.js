import React, { Component } from 'react'
import axios from 'axios'
import { Header, Card, Segment, Icon } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';


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
          <Header as='h1' textAlign='center'>Top 50 Beers</Header>

        <Card.Group>
            { this.state.beers.map( beer =>
              <Card 
                key={beer.id}
                href={"beers/" + beer.id}
              >

                <Card.Content>{beer.name_display}</Card.Content>
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

// const CardExampleLinkCard = () => (
//   <Card
//     href='#card-example-link-card'
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//   />
// TODO - make each card a link using the Semantic UI docs and have them link to a view page with a conditionally rendered description (some don't seem to have descriptions), along with all the metadata.