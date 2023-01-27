import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = second => {
  const handleContactFormSubmit = (values, { resetForm }) => {
    // values - собирает значения инпутов, далее в {actions} можно просмотреть все
    //  возможные методы для формы
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleContactFormSubmit}>
      <Form>
        <label htmlFor="">
          Name
          <Field type="text" name="name" placeholder="Enter your name"></Field>
        </label>
        <label htmlFor="">
          Number
          <Field
            type="tel"
            name="number"
            placeholder="Enter your phone number"
          ></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
