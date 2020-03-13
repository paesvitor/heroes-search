import React from 'react';
import PropTypes from 'prop-types';
import logoImage from 'resources/images/common/logo.svg';
import logoImageSmall from 'resources/images/common/logo_menor.svg';
import {Link} from 'react-router-dom';

function Logo({variant}) {
  return (
    <Link to="/">
      <img
        src={variant === 'default' ? logoImage : logoImageSmall}
        alt="logo"
      />
    </Link>
  );
}

Logo.defaultProps = {
  variant: 'default',
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['default', 'small']),
};

export default Logo;
