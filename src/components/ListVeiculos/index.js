import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CardVeiculo from '../cardVeiculo';
import GET_VEICULOS_CARD from './get-card-info';

import { List } from './styles';

function ListVeiculos({limit}) {
  const { loading, error, data } = useQuery(GET_VEICULOS_CARD);
  
  if(loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;

  if(limit) {
    return (
      <List>
        {data.veiculos.edges.slice(0,limit).map(veiculo => (
          <CardVeiculo 
          key={veiculo.node.veiculo.nomeDoVeiculo}
          name={veiculo.node.veiculo.nomeDoVeiculo}
          model={veiculo.node.veiculo.modeloDoVeiculo}
          price={veiculo.node.veiculo.precoDoVeiculo}
          fuel={veiculo.node.veiculo.tipoDeCombustivel}
          km={veiculo.node.veiculo.quilometragem}
          year={veiculo.node.veiculo.anoDoVeiculo}
          image={veiculo.node.veiculo.fotoPrincipalDoVeiculo}
          marca={veiculo.node.veiculo.marcaDoVeiculo}
          color={veiculo.node.veiculo.corDoVeiculo}
          />
        ))}
      </List>
    );
  }

  return (
    <List>
      {data.veiculos.edges.map(veiculo => (
        <CardVeiculo 
        key={veiculo.node.veiculo.nomeDoVeiculo}
        name={veiculo.node.veiculo.nomeDoVeiculo}
        model={veiculo.node.veiculo.modeloDoVeiculo}
        price={veiculo.node.veiculo.precoDoVeiculo}
        fuel={veiculo.node.veiculo.tipoDeCombustivel}
        km={veiculo.node.veiculo.quilometragem}
        year={veiculo.node.veiculo.anoDoVeiculo}
        image={veiculo.node.veiculo.fotoPrincipalDoVeiculo}
        marca={veiculo.node.veiculo.marcaDoVeiculo}
        color={veiculo.node.veiculo.corDoVeiculo}
        />
      ))}
    </List>
  );

}

export default ListVeiculos;
