import React from 'react';
import '../src/addcollapsible.css';
import Collapsible from '../src/Collapsible'

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
      <div>
        <Collapsible trigger={this.props.title}>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      <br/>
      <br></br>
      </div>
    );
  }
}
