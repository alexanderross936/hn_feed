import React from 'react';

class Hits extends React.Component {

render(){
  return (
<div>

<p>Created At: {this.props.created_at}</p>
    <p>text: {this.props.comment_text}</p>
    </div>
    )
    }
}
  


export default Hits;
