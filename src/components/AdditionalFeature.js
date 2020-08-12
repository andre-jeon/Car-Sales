import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { addItem } from '../actions/index'

const AdditionalFeature = props => {
  const dispatch = useDispatch()

  const handleChanges = (e) => {
    e.preventDefault()
    dispatch(addItem(props.feature))
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleChanges}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
