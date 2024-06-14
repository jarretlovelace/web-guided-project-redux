import React from 'react';
import { toggleEditing } from '../actions/dragonListActions';

const TitleDisplay = (props)=> {

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={() => toggleEditing()}
      />
  </h2>);
}

const mapStateToProps = state => {
  return {
    title: state.title.title
  }
}
export default connect(mapStateToProps, {toggleEditing})(TitleDisplay);