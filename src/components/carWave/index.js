import React from 'react';

import { Wave } from './styles';

function CarWave({waveImg}) {
  return <Wave style={{background: `url('${waveImg}') no-repeat scroll center center/cover`}}/>;
}

export default CarWave;