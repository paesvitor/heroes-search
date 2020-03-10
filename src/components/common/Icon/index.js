import React from 'react';
import PropTypes from 'prop-types';
import iconSearch from 'resources/icons/ic_busca_menor.svg';
import iconHero from 'resources/icons/ic_heroi.svg';
import iconComics from 'resources/icons/ic_quadrinhos.svg';
import iconTrailer from 'resources/icons/ic_trailer.svg';

const icons = {
  search: iconSearch,
  hero: iconHero,
  comics: iconComics,
  trailer: iconTrailer,
};

function Icon({name}) {
  return <img src={icons[name]} alt={name} />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(['search', 'hero', 'comics', 'trailer']).isRequired,
};

export default Icon;
