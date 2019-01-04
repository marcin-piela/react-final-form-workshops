import React from 'react';

import { isError } from './';

const errorTextStyles = {
  color: 'red',
  fontSize: '11px',
  position: 'relative',
  top: '-5px',
  display: 'block',
  marginBottom: '-5px',
};

export const ErrorText = ({ meta }) => isError(meta) ? <span style={errorTextStyles}>{meta.error}</span> : null;
