import React from 'react';
import List from '../organisms/List';

const Main = props => {
  return (
    <main className="main">
      <List props={props}/>
    </main>
  )
};

export default Main;