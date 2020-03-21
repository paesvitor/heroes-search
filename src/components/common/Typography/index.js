import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

function Typography(props) {
  return <Container {...props} />;
}

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'sectionTitle',
    'mainTitle',
    'subTitle',
    'helper',
    'body',
    'label',
    'button',
  ]),
};

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
