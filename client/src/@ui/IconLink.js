import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const defaultProps = {
  to: '/',
  children: null,
  icon: null,
};

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${(p) => p.theme.colors.grayDark};
  text-decoration: none;
  font-size: 30px;
  transition: 0.2s;

  .nav-link {
    margin-left: 10px;
  }

  &.children {
    margin-top: 0;
    margin-bottom: 5px;
    margin-left: 40px;
    margin-right: 0;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const IconLink = ({ to, icon, rightIcon, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {icon && <i className={`dripicons-${icon}`}></i>}
      <span className="nav-link">{children}</span>
      {<i className={`dripicons-${rightIcon}`}> </i>}
    </Link>
  );
};

IconLink.defaultProps = defaultProps;
