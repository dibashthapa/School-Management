import React, { useEffect, useState } from 'react';
import { SidebarWrapper, SidebarLinks } from './index.style';
import { IconLink } from '../../../@ui/IconLink';
import { Flex } from '../../../@ui/Flex';
import { studentLinks } from '../../../routes/studentLinks';
import { adminLinks } from '../../../routes/adminLinks';
import axios from 'axios';
import Avatar from '../Avatar';

const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  const role = localStorage.getItem('role');
  const [username, setUsername] = useState('');
  const toggleChildren = () => {
    setShow(!show);
  };

  useEffect(() => {
    async function getUser() {
      const body = {};
      const user = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/me`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setUsername(user.data.name);
    }
    getUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const renderAdmin = adminLinks.map(
    ({ route, icon, text, children }, index) => {
      return (
        <>
          {children ? (
            <>
              <IconLink
                to={route}
                icon={icon}
                key={text}
                rightIcon={show ? 'chevron-down' : 'chevron-right'}
                onClick={toggleChildren}
              >
                {text}
              </IconLink>
              {children.map(({ route, text }, index) => {
                return (
                  <IconLink
                    to={route}
                    className="children"
                    key={text}
                    style={show ? { display: 'block' } : { display: 'none' }}
                  >
                    {text}
                  </IconLink>
                );
              })}
            </>
          ) : (
            <IconLink to={route} icon={icon} key={index}>
              {text}
            </IconLink>
          )}
        </>
      );
    }
  );

  const renderStudent = studentLinks.map(
    ({ route, icon, text, children }, index) => {
      return (
        <>
          {children ? (
            <>
              <IconLink
                to={route}
                icon={icon}
                key={text}
                rightIcon={show ? 'chevron-down' : 'chevron-right'}
                onClick={toggleChildren}
              >
                {text}
              </IconLink>
              {children.map(({ route, text }, index) => {
                return (
                  <IconLink
                    to={route}
                    className="children"
                    key={text}
                    style={show ? { display: 'block' } : { display: 'none' }}
                  >
                    {text}
                  </IconLink>
                );
              })}
            </>
          ) : (
            <IconLink to={route} icon={icon} key={index}>
              {text}
            </IconLink>
          )}
        </>
      );
    }
  );
  return (
    <SidebarWrapper>
      <div className="sidebar--sticky">
        <Flex align="center" justify="flex-start">
          <Avatar
            className="dashboard__avatar"
            width="100"
            src={'http://ekattor-school-erp.com/demo/v7/uploads/users/259.jpg'}
            height="100"
            username={username}
          />
        </Flex>
      </div>
      <div className="navigation">Navigation</div>
      <SidebarLinks>
        {role === 'Admin' ? renderAdmin : renderStudent}
        <IconLink icon={'exit'} onClick={logOut}>
          LogOut
        </IconLink>
      </SidebarLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;
