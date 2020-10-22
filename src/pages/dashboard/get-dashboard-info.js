import { gql } from 'apollo-boost';

export const GET_BANNER_INFO = gql`
    query GetBannerInfo {
        page(id: "cG9zdDoxOQ==") {
            paginahome {
                pequenaDescricao
                textoDoBotao
                tituloDoBanner
                imagemDoBanner {
                    sourceUrl
                }
                imagemDeBackgroundDaOnda {
                    sourceUrl
                }
                informacao {
                    textoDeInformacao
                }
            }
        }
    }
`;

export const GET_THEME_INFO = gql`
    query ThemeInfo {
        themeOptions {
            themeoptions {
                facebook
                instagram
                whatsapp
                logo {
                    sourceUrl
                }
            }
        }   
    }
`;
