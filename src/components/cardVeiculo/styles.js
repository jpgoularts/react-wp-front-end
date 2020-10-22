import styled from 'styled-components';

export const Card = styled.div`
    max-width: 360px;
    width: 100%;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.16);
    overflow: hidden;

    .image {
        position: relative;
        overflow: hidden;
        display: block;

        img {
            transition: all 1s ease;
            width: 100%;
            height: 246px;
            display: block;
            object-fit: cover;
        }
    }

    .description {
        .info-primaria {
            padding: 10px 10px 5px;
            border-bottom: 1px solid #f1f1f1;
            position: relative;

            .marca {
                margin: 0;
                font-size: 14px;
            }

            .nome {
                font-size: 18px;
                margin: 0;
            }

            .price {
                position: absolute;
                top: 0;
                right: 0;
                padding: 4px 20px;
                font-weight: 500;
                border-bottom-left-radius: 5px;
                background-color: #f42c2c;
                color: #fff;

                span {
                    font-size: 10px;
                }
            }
        }

        .especificacoes {
            display: flex;
            flex-wrap: wrap;
            padding: 10px 10px;
    
            span {
                margin-bottom: 3px;
                margin-right: 15px;

                svg {
                    margin-right: 10px;
                }
            }
        }
    
        .info {
            border-top: 1px solid #f1f1f1;
            display: flex;
            justify-content: flex-end;
            height: 37px; 
    
            a {
                color: #000;
                line-height: 37px;
                padding: 0 10px;
                border-left: 1px solid #e5e5e5;
    
                svg {
                    color: #f42c2c;
                }
            }
        }
    }

    &:hover {
        .image {
            img {
                transform: scale(1.3);
            }
        }

        .description {
            .info {
                a {
                    .like {
                        fill: red;
                    }
                }
            }
        }
    }

    @media (max-width: 1199px) {
        margin-bottom: 40px;
    }

    @media (max-width: 992px) {
        max-width: 330px;
    }

`;