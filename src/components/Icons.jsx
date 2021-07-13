import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from 'styled-components';

export function CustomFaceBookIcon(props) {
  const StyledFaceBookIcon = styled(FacebookIcon)`
    color: white;
    border: solid 1px white;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
      border: solid 1px hsl(224, 93%, 58%);
    }
  `;

  return (
    <StyledFaceBookIcon />
  );
}

export function CustomTwitterIcon(props) {
  const StyledTwitterIcon = styled(TwitterIcon)`
    color: white;
    border: solid 1px white;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
      border: solid 1px hsl(224, 93%, 58%);
    }
  `;

  return (
    <StyledTwitterIcon />
  );
}

export function CustomInstagramIcon(props) {
  const StyledInstagramIcon = styled(InstagramIcon)`
    color: white;
    border: solid 1px white;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
      border: solid 1px hsl(224, 93%, 58%);
    }
  `;

  return (
    <StyledInstagramIcon />
  );
}
