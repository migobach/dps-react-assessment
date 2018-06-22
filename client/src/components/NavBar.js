import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='Home' active={this.activeItem('/')} />
          </Link>
          <Link to='/beers'>
            <Menu.Item name='Beers' active={this.activeItem('/beers')} />
          </Link>
          <Link to='/breweries'>
            <Menu.Item name='Breweries' active={this.activeItem('/breweries')} />
          </Link>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
