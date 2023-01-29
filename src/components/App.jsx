import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm, ContactList, Filter } from '../components';

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

  addContactToContactBook = (name, number) => {
    this.state.contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => {
          return {
            // { name, number, id: nanoid() } - добавление нового контакта в массив обьектов
            contacts: [...prevState.contacts, { name, number, id: nanoid() }],
          };
        });
  };

  deleteContactFromContactBook = id => {
    //  console.log('id', id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleFilter = event => {
    //   выводит в консоль то, что мы ввели в инпут/фильтр
    //  console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    //  выводит имя, которое мы ввели в фильтр, и которое совпадает с именем из списка
    const visibleFilter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContactToContactBook} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleFilter}
          deleteContact={this.deleteContactFromContactBook}
        />
      </div>
    );
  }
}
