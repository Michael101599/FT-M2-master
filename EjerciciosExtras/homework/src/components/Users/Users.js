import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {
          this.props.users && this.props.users.map(user => (
            <tr>
              <td>
                <div key={user.id}>
                  <td>
                    <Link to={`/users/${user.id}/posts`} className='button'>
                    Posts
                    </Link>
                  </td>
                </div>
              </td>
            </tr>
          ))
        }
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  }
}

function mapSDispatchToProps(dispatch){
  return{
    getAllUsers: users => dispatch(getAllUsers(users))
  }
}

export default connect(mapStateToProps, mapSDispatchToProps) (Users);

