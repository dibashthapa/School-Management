import { Form } from "formik";
import React from "react";
import { Button } from "../../@ui/Button";
import { FormGroup, Input } from "../../@ui/Input";

const AssignmentForm = () => {
  return (
    <form action="">
      <FormGroup>
        <label htmlFor="">Enter Stream</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Subject</label>
        <Input/>
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Task</label>
        <Input />
      </FormGroup>
      <FormGroup>
      <Button>Create Assignment</Button>
      </FormGroup>
    </form>
  );
};

export default AssignmentForm;
