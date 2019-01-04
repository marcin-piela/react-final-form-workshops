import { compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

import { EstimateForm } from './estimateForm';
import { ESTIMATE_FORM } from '../shared/constants';
import { sendProjectEstimate } from '../../store/forms/formsActions';

const selector = formValueSelector(ESTIMATE_FORM);

const mapStateToProps = state => ({
  itemsBudget: selector(state, 'items')
    ? selector(state, 'items').reduce((prev, curr) => prev + (curr && curr.budget ? parseInt(curr.budget) : 0), 0)
    : 0,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: formValues => dispatch(sendProjectEstimate(formValues)),
});

export const EstimateFormContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: ESTIMATE_FORM,
    initialValues: {
      items: [],
    },
  }),
)(EstimateForm);
