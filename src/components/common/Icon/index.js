import React from 'react';
import PropTypes from 'prop-types';
import iconSearch from 'resources/icons/ic_busca_menor.svg';
import iconHero from 'resources/icons/ic_heroi.svg';
import iconComics from 'resources/icons/ic_quadrinhos.svg';
import iconTrailer from 'resources/icons/ic_trailer.svg';
import iconFavorite from 'resources/icons/favorito_01.svg';

const icons = {
  search: iconSearch,
  hero: iconHero,
  comics: iconComics,
  trailer: iconTrailer,
  favorite: iconFavorite,
};

function Icon({name}) {
  return <img src={icons[name]} alt={name} style={{height: '21px'}} />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(['search', 'hero', 'comics', 'trailer', 'favorite'])
    .isRequired,
};

export default Icon;
