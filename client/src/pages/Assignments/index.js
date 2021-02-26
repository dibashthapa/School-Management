import React, { useState } from 'react';
import DashboardHeader from '../../App/components/DashboardHeader';
import { Flex } from '../../@ui/Flex';
import { useFetch } from '../../App/hooks/useFetch';
import { CardWrapper, CardTitle } from '../../@ui/Card';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentForm from './form';
const useStyles = makeStyles({
  drawer: {
    width: '20%',
    maxWidth: '20%',
  },
});
const Assignments = () => {
  const classes = useStyles();
  const response = useFetch({ url: 'user/assignments', method: 'GET' });
  const role = localStorage.getItem('role');
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        variant="temporary"
        classes={{
          paper: classes.drawer,
        }}
        open={show}
        onClose={() => setShow(false)}
      >
        <AssignmentForm />
      </Drawer>
      <DashboardHeader>
        <span className="dashboard-title">
          <i className="dripicons-graduation"></i>
          Assignments
        </span>
        {role === 'Admin' && (
          <span
            className="dashboard-create--button"
            onClick={() => setShow(!show)}
          >
            +Add New Assignment
          </span>
        )}
      </DashboardHeader>
      <Flex direction="column">
        {response.map((res) => {
          return (
            <>
              <CardWrapper>
                <CardTitle>{res.teacher} posted an assignment</CardTitle>
              </CardWrapper>
            </>
          );
        })}
      </Flex>
    </React.Fragment>
  );
};

export default Assignments;
