
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Card,
  Button,
} from 'semantic-ui-react'
import axios from 'axios'


class Beer extends React.Component {
  state = { beerId: ''}

	// componentDidMount() {
  //   const id = this.props.match.params.id
  //   this.setState({ beerId: id })
  //     axios.get(`/api/beer/${id}`)
  //       .then( res => {
  //         this.setState({ posts: res.data })
  //       })
  //       .catch( err => {
  //         console.log(err) 
  //       })
  // }

  // beerInfo = () => {
  //   // return this.state.posts.map( post => 
  //   return this.state.posts.filter(p => p.user_id == this.state.friend).map( post => 
  //     <Card key={post.id}>
  //       <Card.Content>
  //         <Card.Description>
  //           {post.title}
  //         </Card.Description>
  //         <Card.Meta>
  //           {post.body}
  //         </Card.Meta>
  //       </Card.Content>
  //       <Card.Content extra>
  //         <Button onClick={() => this.props.dispatch(deletePost(post.id))}>
  //           Delete
  //         </Button>
  //       </Card.Content>
  //     </Card>
  //   )
  // }

  render() {
    // const { toggleForm } = this.state
    return (
      <Container>
        <Header>Name of beer</Header>
        
      </Container>
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