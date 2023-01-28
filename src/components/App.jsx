import { Component } from 'react';
import { ContactForm, ContactList } from '../components';

// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101',
//     // }}
//     >
//       <ContactForm />
//     </div>
//   );
// };

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactToContactBook = contact => {
    this.setState(({ contacts }) => {
      console.log(contacts);
      return {
        contacts: [...contacts, contact],
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList
          addContact={this.addContactToContactBook}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
