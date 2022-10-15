import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import {
  decrement,
  increment,
  setValue
} from '../../Redux/Reducers/counterReducer/counterReducers';

function ReduxComponent() {
  const [changeValue, setChangeValue] = useState(0);
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setValue(changeValue));
  }

  function handleChange(e) {
    setChangeValue(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <h1>count:{count}</h1>
            <button
              onClick={() => {
                dispatch(increment());
              }}>
              Increment
            </button>
            <button
              onClick={() => {
                dispatch(decrement());
              }}>
              Decrement
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3">
            <Form onClick={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Enter number" onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReduxComponent;
