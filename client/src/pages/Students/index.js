import React, { useEffect, useState } from 'react';
import { TableRow, TableWrapper } from '../../@ui/Table';
import { Row, Col } from '../../@ui/Layout';
import DashboardHeader from '../../App/components/DashboardHeader';
import { Drawer, makeStyles } from '@material-ui/core';
import StudentForm from './Form';
import axios from 'axios';
const useStyles = makeStyles({
  drawer: {
    width: '20%',
    maxWidth: '20%',
  },
});
const Student = () => {
  const [response, setResponse] = useState([]);
  const [mounted, setMounted] = useState(false);
  async function getData() {
    const data = await axios.get('http://localhost:8000/api/user/students');
    const responseData = data.data;
    setResponse(responseData);
  }
  useEffect(() => {
    if (!mounted) {
      getData();
      setMounted(true);
    }
  }, [response, mounted]);
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const role = localStorage.getItem('role');
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
        <StudentForm getStudents={getData} />
      </Drawer>
      <DashboardHeader>
        <span className="dashboard-title">
          <i className="dripicons-user"></i>
          Students
        </span>
        {role === 'Admin' && (
          <span
            className="dashboard-create--button"
            onClick={() => setShow(!show)}
          >
            + Add New Student
          </span>
        )}
      </DashboardHeader>

      <Row>
        <Col lg={10}>
          <TableWrapper>
            <thead>
              <TableRow>
                <th>Name</th>
                <th>Grade</th>
                <th>Stream</th>
              </TableRow>
            </thead>

            {response.map(({ id, name, grade, stream }) => (
              <TableRow className={id % 2 === 0 ? 'even' : 'odd'}>
                <td>{name}</td>
                <td>{grade}</td>
                <td>{stream}</td>
              </TableRow>
            ))}
          </TableWrapper>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Student;
