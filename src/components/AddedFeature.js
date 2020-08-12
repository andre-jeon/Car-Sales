import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { removeItem } from '../actions/index'

const AddedFeature = (props) => {

  const dispatch = useDispatch();

  const handleChanges = (e) => {
    e.preventDefault()
    dispatch(removeItem(props.feature))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleChanges}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
