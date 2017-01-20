import React from 'react';

class RaceAgain extends React.Component {
  componentWillMount() {
    this.props.router.push('/race');
  }

  render() {
    return (
      <div>Seeking adventure...</div>
    );
  }
}

export default RaceAgain;
