import React from 'react';

class Setting extends React.Component {
  render() {
    const {name, value} = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    );
  }
};

export default Setting;
