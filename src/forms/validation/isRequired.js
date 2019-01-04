export const isRequired = value =>
  (value || typeof value === 'number') && ((typeof value === 'string' && value.trim()) || typeof value !== 'string')
    ? undefined
    : 'Field required';
