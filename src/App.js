import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    term: '',
    option: 'story',
    data: null
  }

  handleChange = (event) => {
    const query = event.target.value
    this.setState({ term: query })
    // console.log(this.state)
  }



//res.data.hits
getbyComment = (e) => {
  e.preventDefault()
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.term}&tags=comment`)
    .then(res => { console.log(res.data.hits)})
}

  render(){
    return(
      <div>
        <form onSubmit={this.getbyComment}>
        <input placeholder="search for" onChange={this.handleChange} value={this.state.term} />
        <input type="submit" value="Submit" />
      
        </form>
        {this.state.data}
      </div>
    )
    }
}

export default App;
