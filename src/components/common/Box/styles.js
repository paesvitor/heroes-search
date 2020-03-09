import styled, {css} from 'styled-components';
import {prop, ifProp} from 'styled-tools';

const Container = styled.section`
  ${ifProp(
    'container',
    css`
      max-width: 1200px;
      padding: ${({theme}) => theme.makeSpacing(5)};
      margin: 0 auto;
    `,
  )}

  ${ifProp(
    'grid',
    css`
      display: flex;
      flex-wrap: wrap;
    `,
  )}

${ifProp(
  'textAlign',
  css`
    text-align: ${({textAlign}) => textAlign};
  `,
)}

  ${ifProp(
    'gridItem',
    css`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      ${ifProp(
        'col',
        css`
          flex: ${({col}) => `0 0 ${(col / 12) * 100}%`};
        `,
      )}
    `,
  )}

  ${ifProp(
    'flex',
    css`
      display: flex;
      flex: ${prop('flex')};
    `,
  )}

  ${ifProp(
    'p',
    css`
      padding: ${({theme, p}) => theme.makeSpacing(p)};
    `,
  )}

  ${ifProp(
    'py',
    css`
      padding-top: ${({theme, py}) => theme.makeSpacing(py)};
      padding-bottom: ${({theme, py}) => theme.makeSpacing(py)};
    `,
  )}

  ${ifProp(
    'px',
    css`
      padding-left: ${({theme, px}) => theme.makeSpacing(px)};
      padding-right: ${({theme, px}) => theme.makeSpacing(px)};
    `,
  )}

  ${ifProp(
    'm',
    css`
      margin: ${({theme, m}) => theme.makeSpacing(m)};
    `,
  )}

  ${ifProp(
    'my',
    css`
      margin-top: ${({theme, my}) => theme.makeSpacing(my)};
      margin-bottom: ${({theme, my}) => theme.makeSpacing(my)};
    `,
  )}

  ${ifProp(
    'mx',
    css`
      margin-left: ${({theme, mx}) => theme.makeSpacing(mx)};
      margin-right: ${({theme, mx}) => theme.makeSpacing(mx)};
    `,
  )}

  ${ifProp(
    'mb',
    css`
      margin-bottom: ${({theme, mb}) => theme.makeSpacing(mb)};
    `,
  )}

  ${ifProp(
    'mr',
    css`
      margin-right: ${({theme, mr}) => theme.makeSpacing(mr)};
    `,
  )}

  ${ifProp(
    'mt',
    css`
      margin-top: ${({theme, mt}) => theme.makeSpacing(mt)};
    `,
  )}

  ${ifProp(
    'ml',
    css`
      margin-left: ${({theme, ml}) => theme.makeSpacing(ml)};
    `,
  )}

  ${ifProp(
    'pb',
    css`
      padding-bottom: ${({theme, pb}) => theme.makeSpacing(pb)};
    `,
  )}

  ${ifProp(
    'pr',
    css`
      padding-right: ${({theme, pr}) => theme.makeSpacing(pr)};
    `,
  )}

  ${ifProp(
    'pt',
    css`
      padding-top: ${({theme, pt}) => theme.makeSpacing(pt)};
    `,
  )}

  ${ifProp(
    'pl',
    css`
      padding-top: ${({theme, pl}) => theme.makeSpacing(pl)};
    `,
  )}
`;

export default Container;
