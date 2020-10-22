import { gql } from 'apollo-boost';

const GET_VEICULO_CARD = gql`
  query GetVeiculos {
    veiculos {
      edges {
        node {
          veiculo {
            veiculoAVenda
            darDestaque
            anoDoVeiculo
            corDoVeiculo
            marcaDoVeiculo
            modeloDoVeiculo
            nomeDoVeiculo
            precoDoVeiculo
            tipoDeCombustivel
            quilometragem
            marcaDoVeiculo
            fotoPrincipalDoVeiculo {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default GET_VEICULO_CARD;
