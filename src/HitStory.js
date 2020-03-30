import React from 'react';

class HitsStory extends React.Component {

render(){
  return (
<div>

<p>Created At: {this.props.created_at}</p>
    <p>Title: {this.props.title}</p>
    </div>
    )
    }
}
  


export default HitsStory;
