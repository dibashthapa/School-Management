import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { TableRow, TableWrapper } from '../../@ui/Table';
import { Row, Col } from '../../@ui/Layout';
import { useFetch } from '../../hooks/useFetch';
import { Drawer } from '@material-ui/core';
import RoutineForm from './RoutineForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    width: '20%',
    maxWidth: '20%',
  },
});
const Routine = () => {
  const response = useFetch({ url: 'user/routine', method: 'GET' });
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const role = localStorage.getItem('role');
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        variant="temporary"
        open={show}
        onClose={() => setShow(false)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <RoutineForm />
      </Drawer>
      <DashboardHeader>
        <span className="dashboard--title">
          <i className="dripicons-document"></i>
          Routine
        </span>
        {role === 'Admin' && (
          <span
            className="dashboard-create--button"
            onClick={() => setShow(!show)}
          >
            +Add New Routine
          </span>
        )}
      </DashboardHeader>

      <Row>
        <Col lg={10}>
          <TableWrapper>
            <thead>
              <TableRow>
                <th>SN</th>
                <th>Class</th>
                <th>Section</th>
                <th>Day</th>
                <th>Subject</th>
                <th>Teacher</th>
              </TableRow>
            </thead>

            {response.map((res) => {
              return (
                <TableRow className={res.id % 2 === 0 ? 'even' : 'odd'}>
                  <td>{res.id}</td>
                  <td>{res.class}</td>
                  <td>{res.section}</td>
                  <td>{res.day}</td>
                  <td>{res.subject}</td>
                  <td> {res.teacher}</td>
                </TableRow>
              );
            })}
          </TableWrapper>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Routine;
