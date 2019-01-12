import { compose } from 'redux';
import { connect } from 'react-redux';

import ContactForm from './contactForm';
import { sendContactMessage } from '../../store/forms/formsActions';
import { submitForm } from '../shared/submitForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: submitForm(dispatch, sendContactMessage),
});

export const ContactFormContainer = compose(
  connect(
    undefined,
    mapDispatchToProps
  )
)(ContactForm);
