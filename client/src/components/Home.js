import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, List } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import beerLogo from '../images/beer.png';

class Home extends Component {
  state = { beers: [] };

  componentDidMount() {
    debugger
    axios.get('http://localhost:5100/api/all_beers')
      .then(res => {
        debugger
        this.setState({ beers: res.data.entries })
      })
      .catch( error => {
        console.log(error.response);
    });
    debugger
  }



  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={beerLogo} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>Beers & Breweries</Header>
          <Header as='h5' style={styles.header}>Everything you need to know to get deliciously buzzed</Header>
        </Segment>

        
        <Grid>

{/* Section to the left */}

      <Grid.Column computer={8} tablet={8} mobile={16}>
        <Segment>     

          <List>
          { this.state.beers.map( beer =>
            <List.Item>
              <List.Content>
                <List.Header as='a'>{beer.name_display}</List.Header>
                <List.Description>
                  {beer.description}
                </List.Description>
              </List.Content>
            </List.Item>
          )
          }
          </List>
        </Segment>
      </Grid.Column >


{/* Section to the right */}

          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Assessment API Endpoints:
              </Header>
              <Divider />
              <iframe
                style={styles.iframe}
                title='Assignment README.md'
                frameBorder={0}
                src='http://localhost:3001/rails/info/routes'
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Home;
