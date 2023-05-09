// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="h1">Destination Search</h1>
          <div className="search-bar">
            <input
              type="search"
              className="search"
              placeholder="Search"
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              className="icon"
              alt="search icon"
            />
          </div>
          <div>
            <ul className="ul">
              {searchResults.map(each => (
                <DestinationItem destinationDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
