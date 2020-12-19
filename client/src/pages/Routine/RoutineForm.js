import React from "react";
import { Input, FormGroup } from "../../@ui/Input";
import { Button } from "../../@ui/Button";

const RoutineForm = () => {
  return (
    <form action="">
      <FormGroup>
        <label htmlFor="">Enter Class</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Section</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Day</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Subject</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Enter Teacher</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Button>Create Routine</Button>
      </FormGroup>
    </form>
  );
};

export default RoutineForm;
