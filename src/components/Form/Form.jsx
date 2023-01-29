import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormSlyled, Label, Button } from './FormStyled.styled';
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

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleContactFormSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    // values - собирает значения инпутов, далее в {actions} можно просмотреть все
    //  возможные методы для формы
    addContact(values);
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemeForm}
      onSubmit={handleContactFormSubmit}
    >
      <FormSlyled>
        <Label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            id="number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormSlyled>
    </Formik>
  );
};

export default ContactForm;
