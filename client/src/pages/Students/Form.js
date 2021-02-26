import React, { useState } from 'react';
import { Input, FormGroup } from '../../@ui/Input';
import { Button } from '../../@ui/Button';
import { useSnackbar } from 'notistack';
import axios from 'axios';
const StudentForm = (props) => {
  const [values, setValues] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const createAssignment = async () => {
    const { name, grade, stream } = values;
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/students`,
      {
        name,
        grade,
        stream,
      }
    );
    const { message, errors } = response.data;

    if (errors)
      enqueueSnackbar(`${Object.keys(errors)} required`, { variant: 'error' });
    if (message) {
      enqueueSnackbar(message, { variant: 'success' });
    }
  };
  const handleClick = (e) => {
    new Promise((resolve, reject) => {
      try {
        createAssignment();
        resolve(props.getStudents());
      } catch (err) {
        reject(err);
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <label>Name</label>
        <Input onChange={handleChange} name="name" value={values.name || ''} />
      </FormGroup>
      <FormGroup>
        <label>Grade</label>
        <Input
          onChange={handleChange}
          name="grade"
          value={values.grade || ''}
        />
      </FormGroup>
      <FormGroup>
        <label>Stream</label>
        <Input
          onChange={handleChange}
          name="stream"
          value={values.stream || ''}
        />
      </FormGroup>

      <FormGroup>
        <Button onClick={handleClick}>Create Student</Button>
      </FormGroup>
    </form>
  );
};

export default StudentForm;
