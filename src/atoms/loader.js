import React, {PureComponent} from 'react';

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="spinner">
        <div>Caricamento in corso...</div>
      </div>
    );
  }
}

Loader.displayName = 'Loader';
