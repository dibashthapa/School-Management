import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { CardBody, CardTitle, CardWrapper, CardFooter } from '../../@ui/Card';
import { Col, Row } from '../../@ui/Layout';
const Home = () => {
  return (
    <React.Fragment>
      <DashboardHeader>
        <span className="dashboard-title">
          <i className="dripicons-meter"></i>
          Dashboard
        </span>
      </DashboardHeader>
      <Row>
        <Col lg={3}>
          <CardWrapper border>
            <CardTitle>Total Students</CardTitle>
            <CardBody>4</CardBody>
            <CardFooter> No.of Students </CardFooter>
          </CardWrapper>
        </Col>

        <Col lg={3}>
          <CardWrapper border>
            <CardTitle>Attendance</CardTitle>
            <CardBody>4</CardBody>
            <CardFooter>No.of Attendance </CardFooter>
          </CardWrapper>
        </Col>
        <Col lg={3}>
          <CardWrapper border>
            <CardTitle>Attendance</CardTitle>
            <CardBody>4</CardBody>
            <CardFooter>No.of Attendance </CardFooter>
          </CardWrapper>
        </Col>
        <Col lg={3}>
          <CardWrapper border>
            <CardTitle>Attendance</CardTitle>
            <CardBody>4</CardBody>
            <CardFooter>No.of Attendance </CardFooter>
          </CardWrapper>
        </Col>
        <Col lg={3}>
          <CardWrapper border>
            <CardTitle>Total Teachers</CardTitle>
            <CardBody>4</CardBody>
            <CardFooter> No.of Teachers </CardFooter>
          </CardWrapper>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
