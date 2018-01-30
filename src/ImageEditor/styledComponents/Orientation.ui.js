import styled from 'styled-components';
import { getIconByName, getIconStyles } from '../../lib/styledComponents/styleUtils'


const OrientationWrapper = styled.div`
  color: ${props => props.theme.textColor};
  text-align: center;
`;

const RotateWrapper = styled.div`
  display: inline-block;
  padding: 20px;
`;

const RotateLabel = styled.div`

`;

const RotateButton = styled.div`
  margin-top: 10px;
  
  button:focus,  button:active {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const RotateIcon = styled.span`
  height: 14px;
  font-size: 14px;
  
  ${props => getIconStyles(props)}
  ${props => getIconByName(props.name)}
`;

export { OrientationWrapper, RotateWrapper, RotateButton, RotateLabel, RotateIcon }