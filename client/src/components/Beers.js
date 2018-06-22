// import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import { Header, Card } from 'semantic-ui-react';

// class Beers extends Component {
//   state = { beers: [] }

//   componentDidMount() {
//     debugger
//     axios.get('http://localhost:5100/api/all_beers')
//       .then(res => {
//         this.setState({ beers: res.data })
//       })
//       .catch( error => {
//         console.log(error.response);
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//           <Header as='h1' textAlign='center'>Beers</Header>

//         <Card.Group>
//             { this.state.beers.map( beer =>
//               <Card 
//                 key={beer.id}
//               >
//                 <h2>{beer.name_display}</h2>
//                 <p>{beer.description}</p>
//                 <h5>IBUs:{beer.ibu}</h5>
//                 <h5>ABV:{beer.abv}</h5>
//               </Card>
//               )
//             }
//         </Card.Group>
//       </Fragment>
//     )
//   }
// }

// export default Beers