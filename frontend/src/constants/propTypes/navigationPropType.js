import PropTypes from 'prop-types';

const { shape, func, object } = PropTypes;

export const navigationPropType = shape({
  navigate: func.isRequired,
  goBack: func.isRequired,
  reset: func.isRequired,
  replace: func.isRequired,
  setOptions: func.isRequired,
});

export const routePropType = shape({
  params: object,
});
