import React from 'react';

import AddedFeature from './AddedFeature';
import { connect, useSelector } from 'react-redux'

const AddedFeatures = (props) => {

  const {car} = useSelector(state => state)
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
