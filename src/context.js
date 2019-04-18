import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Connor',
        email: 'jc@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 2,
        name: 'Lance Hendrix',
        email: 'lh@gmail.com',
        phone: '222-333-3333'
      },
      {
        id: 3,
        name: 'Sarah Connor',
        email: 'sc@gmail.com',
        phone: '222-444-4444'
      },
      {
      id: 4,
      name: 'Richard Deckard',
      email: 'rd@hotmail.com',
      phone: '123-456-7890'
      },
      {
        id: 5,
        name: 'Helena Slater',
        email: 'hs@startmail.com',
        phone: '001-002-0003'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
