import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';

export class UserPosts extends React.Component {

    componentDidMount() {
      const userId = this.props.match.params.id;
      // const {match: {params: {userId}}} = this.props;
      this.props.getAllUserPosts(userId)
    }

  render() {
   
    return (
      <div className="details">
        { <h4 className="title">Posts del usuario {getAllUserPosts(userId)}</h4> }
        <h1>ID del usuario: {this.props.posts.userId}</h1>
        <h1>ID del post: {this.props.posts.id}</h1>
        <h1>Título del post: {this.props.posts.title}</h1>
        <h1>Contenido del post: {this.props.posts.body}</h1>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.userPosts
  };
}

function mapDispatchToProps(dispatch){
  return{
    getAllUsersPost: userPosts => dispatch(getAllUserPosts(userPosts))
  };
}


export default connect (mapStateToProps, mapDispatchToProps)(UserPosts);