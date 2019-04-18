import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    
    const { name, email, phone } = this.state;

    //  VALIDATE/CHECK FOR ERRORS
    if(name === '') {
      this.setState({errors: { name: 'Name is Required' }});
      return;
    }

    if(email === '') {
      this.setState({errors: { email: 'Email is Required' }});
      return;
    }

    if(phone === '') {
      this.setState({errors: { phone: 'Phone is Required' }});
      return;
    }

    const newContact = {
      id: uuid(),
      name, 
      email, 
      phone
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact});

    //  CLEAR STATE/INPUT FIELDS AFTER SUBMIT
    this.setState({
      name: '', 
      email: '',
      phone: '',
      errors: {}
    })

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
            <div className="card-header display-4"><span className="text-warning">Add</span> Contact</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup 
                  label="Name"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextInputGroup 
                type="email"
                label="Email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
                />
                <TextInputGroup 
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
                />
                <input type="submit" className="btn btn-block btn-secondary" value="Add Contact" />
              </form>
            </div>
          </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
