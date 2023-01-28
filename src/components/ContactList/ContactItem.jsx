const ContactItem = ({ name, number }) => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button type="button">Delete</button>
    </li>
  );
};

export default ContactItem;
