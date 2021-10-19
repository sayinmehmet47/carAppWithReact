import styled from 'styled-components';
import Back from '../../images/back.png';

export const TopBanner = styled.div`
  background-image: url(${Back});
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  grid-template-columns: repeat(auto-fill, minmax(315px, max-content));
`;
