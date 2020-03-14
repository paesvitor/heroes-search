import styled, {css} from 'styled-components';
import {prop} from 'styled-tools';

export default styled.section`
  color: ${({color}) => prop(`theme.palette.${color}`)};
  text-align: ${({align}) => align || 'left'};
  text-transform: ${({textTransform}) => textTransform};
  /* New */
  ${({variant}) => css`
    ${variant === 'sectionTitle' &&
      css`
        font-size: 17px;
        letter-spacing: -0.1px;
        font-weight: 700;
      `}
  `}

  ${({variant}) => css`
    ${variant === 'mainTitle' &&
      css`
        font-size: 24px;
        letter-spacing: 0;
        font-weight: bold;
      `}
  `}

  ${({variant}) => css`
    ${variant === 'subTitle' &&
      css`
        font-size: 14px;
        letter-spacing: -0.1px;
        font-weight: 700
        margin-right: 15px;
      `}
  `}

    ${({variant}) => css`
      ${variant === 'helper' &&
        css`
          font-size: 12;
          letter-spacing: 0px;
          font-weight: 300;
        `}
    `}

    ${({variant}) => css`
      ${variant === 'body' &&
        css`
          font-size: 15px;
          letter-spacing: 0.1px;
          line-height: 24;
          font-weight: 300;
        `}
    `}

    ${({variant}) => css`
      ${variant === 'label' &&
        css`
          font-size: 14px;
          letter-spacing: 0.1px;
          font-weight: 700;
        `}
    `}

    ${({variant}) => css`
      ${variant === 'button' &&
        css`
          font-size: 13px;
          letter-spacing: 0.1px;
          font-weight: 400;
        `}
    `}
`;
