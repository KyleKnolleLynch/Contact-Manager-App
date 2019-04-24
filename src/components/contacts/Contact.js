import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //  DELETE CONTACT EVENT
  onDeleteClick = async (email, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${email}`);
    dispatch({ type: 'DELETE_CONTACT', payload: email });
  };

  render() {
    const {id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-user-times text-danger"
                  style={{ float: 'right', cursor: 'pointer' }}
                  onClick={() => this.onDeleteClick(email, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                 <i
                  className="far fa-edit text-success"
                  style={{ float: 'right', marginRight: '20px', cursor: 'pointer' }}
                />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
