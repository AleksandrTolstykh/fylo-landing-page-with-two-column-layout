import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    color: ${props.color};
    font-family: ${props.fontFamily ? props.fontFamily : 'Raleway'};
    font-size: 16px;
    font-weight: ${props.fontWeight ? props.fontWeight : 700};
    text-decoration: ${props.decoration};
    text-transform: none;
    width: ${props.width};
    &:hover {
      background: ${props.backgroundHover};
      color: ${props.colorHover};
      font-weight: ${props.fontWeightHover};
      text-decoration: ${props.decorationHover};
      opacity: ${props.opacity};
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
