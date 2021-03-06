import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom'
class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    console.log(id)
    this.props.fetchPost(id)
  }
  render(){
    const { post } = this.props;
    if(!post){ return <div>rere</div>}
    return (
      <div>
        <Link to="/" >Back to index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <h6>{post.content}</h6>
        </div>
    )
  }

}
function mapStateToProps({posts}, ownProps){
  return {post: posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { fetchPost } )(PostsShow);