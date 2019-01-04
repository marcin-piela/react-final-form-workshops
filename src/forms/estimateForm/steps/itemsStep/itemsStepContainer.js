import { connect } from 'react-redux';
import { change, formValueSelector } from 'redux-form';

import { ItemsStep } from './itemsStep';
import { ESTIMATE_FORM } from '../../../shared/constants';

const selector = formValueSelector(ESTIMATE_FORM);

const mapStateToProps = state => ({
  items: selector(state, 'items'),
});

const mapDispatchToProps = dispatch => ({
  onAddPromotionItem: (items, item) => dispatch(change(ESTIMATE_FORM, 'items', items ? [...items, item]: [item])),
});

export const ItemsStepContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsStep);
