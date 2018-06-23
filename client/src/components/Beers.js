import React, { Component } from 'react'
import axios from 'axios'
import { Header, Card, Segment, Icon, Pagination } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';


class Beers extends Component {
  state = { beers: [], hasMore: true, nextHref: null }

  LoadMore = (page) => { 
    debugger
    const self = this;
    let url = axios.baseUrl + '/beers';
      if(this.state.nextHref) 
        url = this.state.nextHref;
   }

  componentDidMount() {
    axios.get('http://localhost:5100/api/all_beers?page=1&per_page=6', { cache: true }) 
      .then(res => {
      if(res.next_href) {
          this.setState({ beers: res.data.entries })
                nextHref: res.next_href
        } else {
            this.setState({
                hasMore: false
            });
        }
      // .catch( error => {
      //   debugger
      //   console.log(error.response);
      // });
      })
  }


  render() {
    const loader = <Segment className="loader"> Loading ...</Segment>

      // var items = [];
    <Segment>
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



    return (
      <Segment>
      <InfiniteScroll
           pageStart={0}
           loadMore={this.loadMore} 
           hasMore={true || false}
           loader={loader}
           >
          <Header as='h1' textAlign='center'>Top 50 Beers</Header>

       
       </InfiniteScroll>
       </Segment>
    )
  }
}

export default Beers


// TODO - make each card a link using the Semantic UI docs and have them link to a view page with a conditionally rendered description (some don't seem to have descriptions), along with all the metadata.