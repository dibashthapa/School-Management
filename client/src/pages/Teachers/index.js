import React, { useState } from 'react';
import { TableRow, TableWrapper } from '../../@ui/Table';
import { Row, Col } from '../../@ui/Layout';
import DashboardHeader from '../../App/components/DashboardHeader';
import { Drawer, makeStyles } from '@material-ui/core';
import TeacherForm from './TeacherForm';
import { useFetch } from '../../App/hooks/useFetch';
const useStyles = makeStyles({
  drawer: {
    width: '20%',
    maxWidth: '20%',
  },
});

const Teacher = () => {
  const response = useFetch({ url: 'user/teachers', method: 'GET' });
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const role = localStorage.getItem('role');

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        variant="temporary"
        open={show}
        classes={{
          paper: classes.drawer,
        }}
        onClose={() => setShow(false)}
      >
        <TeacherForm />
      </Drawer>
      <DashboardHeader>
        <span className="dashboard-title">
          <i className="dripicons-user"></i>
          Teachers
        </span>
        {role === 'Admin' && (
          <span
            className="dashboard-create--button"
            onClick={() => setShow(!show)}
          >
            + Add New Teacher
          </span>
        )}
      </DashboardHeader>

      <Row>
        <Col lg={10}>
          <TableWrapper>
            <thead>
              <TableRow>
                <th>SN</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Faculty</th>
              </TableRow>
            </thead>

            {response.map(({ id, name, subject, stream }) => (
              <TableRow className={id % 2 === 0 ? 'even' : 'odd'}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{subject}</td>
                <td>{stream}</td>
              </TableRow>
            ))}
          </TableWrapper>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Teacher;
