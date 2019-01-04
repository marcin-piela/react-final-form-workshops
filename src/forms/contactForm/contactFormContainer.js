import { compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

import { ContactForm } from './contactForm';
import { CONTACT_FORM } from '../shared/constants';
import { sendContactMessage } from '../../store/forms/formsActions';

const selector = formValueSelector(CONTACT_FORM);

const mapStateToProps = state => ({
  isCompany: selector(state, 'isCompany'),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: formValues => dispatch(sendContactMessage(formValues)),
});

export const ContactFormContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: CONTACT_FORM,
    initialValues: {
      isCompany: false,
    },
  }),
)(ContactForm);
