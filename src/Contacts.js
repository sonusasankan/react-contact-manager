import React, { Component } from 'react';
import Contact from './Contact';

 class Contacts extends Component {
  constructor(){
      super();
      this.state = {
        contacts : [{
           id : 1,
           name : 'John Doe',
           email: 'doe@gmail.com',
           phone: '555-555-5555'
        },
          {
            id : 2,
            name : 'Henry Williams',
            email: 'henry@gmail.com',
            phone: '222-222-2222'
          },
          {
            id : 3,
            name : 'Thomas Null',
            email: 'thomas@gmail.com',
            phone: '333-333-3333'
          }
         ]
      }
  };
  
  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts,
    })
  }
  render() {
    const {contacts} = this.state;  
    return (
      <React.Fragment>
        {contacts.map(contact => (
           <Contact
           key={contact.id}
           contact={contact}
           deleteClickHandler={this.deleteContact.bind(this, contact.id)}
           />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;