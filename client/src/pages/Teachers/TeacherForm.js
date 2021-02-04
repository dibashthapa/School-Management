import React from 'react';
import { Input, FormGroup } from '../../@ui/Input';
import { Button } from '../../@ui/Button';
const TeacherForm = () => {
  return (
    <form action="">
      <FormGroup>
        <label htmlFor="">Name</label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Subject </label>
        <Input />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Faculty</label>
        <Input />
      </FormGroup>

      <FormGroup>
        <Button>Create Teacher</Button>
      </FormGroup>
    </form>
  );
};

export default TeacherForm;
