import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchemeForm = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .number()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = addContact => {
  const handleContactFormSubmit = (values, { resetForm }) => {
    // values - собирает значения инпутов, далее в {actions} можно просмотреть все
    //  возможные методы для формы
    //  addContact(values);
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemeForm}
      onSubmit={handleContactFormSubmit}
    >
      <Form>
        <label htmlFor="">
          Name
          <Field type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="">
          Number
          <Field
            type="tel"
            name="number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage component="div" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
