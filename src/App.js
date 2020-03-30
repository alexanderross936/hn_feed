import React from 'react';
import './App.css';
import axios from 'axios';
import Hits from './Hit'
import HitsStory from './HitStory';

class App extends React.Component {
  state = {
    term: '',
    option: '',
    data: [],
    isComment: false
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }



//res.data.hits
handleSubmit = (e) => {
  e.preventDefault()
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.term}&tags=${this.state.option}`)
    .then(res => 
       { this.setState({data: res.data.hits}) 
       if (this.state.option === 'comment'){
         this.setState({
          isComment: true
         })
       } else {
         this.setState({
           isComment: false
         })
       }
       console.log(this.state.option)
       console.log(this.state.isComment)
    })
    
}

  render(){
    const comment = this.state.isComment;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input placeholder="search for" onChange={this.handleChange}  type='text' name='term'/>
        <select onChange={this.handleChange} name='option'>
          <option>comment</option>
          <option>story</option>
        </select>
        <input type="submit" value="Submit" />
      
        </form>
        {
        comment === true && 
        <div>
        {this.state.data.map((data, index) => {
          return <Hits created_at={data.created_at} comment_text={data.comment_text} />
        })}
        </div>
        }
        { comment === false &&
        <div>
          {        this.state.data.map((data, index) => {
          return <HitsStory created_at={data.created_at} title={data.title} />
        })}
        

      </div>}
  </div>)
  }
}
    
    
      

export default App;
