import React from 'react';

class Destiny extends React.Component {
  render() {
    return (
      <div className='face'>
        <select name="destinity" id="destinity" onChange={onChangeDestinity}>
            <option>'Buenos Aires'</option>
            <option>'Sydney'</option>
            <option>'Praga'</option>
            <option>'Boston'</option>
            <option>'Tokio'</option>
        </select>
      </div>
      );
  }
}

const onChangeDestinity = (event) => {
  alert('Tu destino es viajar a ' + event.currentTarget.value);
};

export default Destiny;
