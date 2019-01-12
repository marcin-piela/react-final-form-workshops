import { compose } from 'redux';
import { connect } from 'react-redux';

import EstimateForm from './estimateForm';
import { sendProjectEstimate } from '../../store/forms/formsActions';
import { submitForm } from '../shared/submitForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: submitForm(dispatch, sendProjectEstimate),
});

export const EstimateFormContainer = compose(
  connect(
    undefined,
    mapDispatchToProps
  )
)(EstimateForm);
