export const isError = meta => (meta.touched && !!meta.error) || (!!meta.submitError && !meta.dirtySinceLastSubmit);
