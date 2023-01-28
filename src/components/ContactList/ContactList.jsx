const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name}
              {number}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
