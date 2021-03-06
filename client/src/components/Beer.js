
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Header, 
  Card,
} from 'semantic-ui-react'
import axios from 'axios'


class Beer extends React.Component {

  state = { beerId: '', beerInfo: [], current: [] }

	componentDidMount() {
    
    const id = this.props.match.params.id
    this.setState({ beerId: id })
      axios.get('http://localhost:5100/api/all_beers')
        .then( res => {
          this.setState({ beerInfo: res.data })
        })
        .catch( err => {
          // debugger
          console.log(err) 
        })
        
  }

  beerInfo = () => {
    debugger
   
    return this.state.beerInfo.filter(b => b.id == this.state.beerId).map( beer => 
      <Card key={beer.id}>
        <Card.Content>
          <Card.Description>
            {beer.name}
          </Card.Description>
          <Card.Meta>
            {beer.description}
          </Card.Meta>
          </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Segment>
        <Header>Name of beer</Header>
          {this.beerInfo}
      </Segment>
    )
  }
}

export default Beer

// const mapStateToProps = (state, props) => {
//   return { 
//     posts: state.posts,
//     // friend: state.users.find(f => f.id === props.match.params.id)
//    }
// }

// export default connect()(Posts)