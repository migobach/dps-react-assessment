import React, { Component } from 'react'
import axios from 'axios'
import { Header, Card, Segment, Icon } from 'semantic-ui-react';

class Beers extends Component {
  state = { breweries: [] }

  componentDidMount() {
    debugger
    axios.get('http://localhost:5100/api/all_breweries')
      .then(res => {
        debugger
        this.setState({ breweries: res.data.entries })
      })
      .catch( error => {
        debugger
        console.log(error.response);
    });
    debugger
  }

  // res.data.entries[1].images.icon
  
  // "id": "Klgom2",
  //           "name": "'t Hofbrouwerijke",
  //           "name_short_display": "'t Hofbrouwerijke",
  //           "website": "http://www.thofbrouwerijke.be/",
  //           "is_organic": "N",
  //           "images": {
  //               "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/Klgom2/upload_UZxn4s-icon.png",
  //               "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/Klgom2/upload_UZxn4s-medium.png",
  //               "large": "https://s3.amazonaws.com/brewerydbapi/brewery/Klgom2/upload_UZxn4s-large.png",
  //               "square_medium"

  render() {
    return (
      <Segment>
          <Header as='h1' textAlign='center'>Top 50 Breweries</Header>

        <Card.Group>
            { this.state.breweries.map( brewery =>
              <Card 
                key={brewery.id}
              >
                {/* <Image src=`` */}
                <Card.Content>{brewery.name_short_display}</Card.Content>
                <Card.Content extra>
                <Card.Meta>Type of brewery: {brewery.brand_classification}</Card.Meta>
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