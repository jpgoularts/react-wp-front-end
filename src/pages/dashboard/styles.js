import styled from 'styled-components';
import layer from '../../assets/img/section-style-1.png';

export const Title = styled.h2 `
    text-align: center;
    text-transform: capitalize;
    position: relative;
    font-size: 2rem;
    font-weight: 500;

    span {
        color: #f42c2c;
    }

    &::before {
        background-color: #242424;
        bottom: -25px;
        content: "";
        height: 1px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 99px;
    }

    &:after {
        background-color: #242424;
        bottom: -18px;
        content: "";
        height: 1px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 59px;
    }

    @media (max-width: 575px) {     
        font-size: 25px;
    }
`;

export const DashboardPage = styled.div`

    #banner {
        height: 890px;
        position: relative;

        &::before {
            background: rgba(0, 0, 0, 0.5) url(${layer});
            background-position: bottom left;
            background-repeat: no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 0;
        }

        .banner-text {
            padding: 200px 0;
            z-index: 1;
            position: relative;

            h1 {
                position: relative;
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;

                &:after {
                    background-color: #FFF;
                    content: "";
                    height: 2px;
                    left: 0;
                    margin: 0 auto;
                    position: absolute;
                    width: 100px;
                    bottom: -10px;
                }

                @media (max-width: 767px) {
                font-size: 30px;
                }
            }

            .description {
                color: #fff;
                margin: 25px 0 0;

                h4 {
                    font-size: 20px;
                    margin-bottom: 15px;

                    @media (max-width: 767px) {
                        font-size: 17px;
                    }

                    @media (max-width: 575px) {
                        display: none;
                    }
                }

                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;

                    i {
                        margin-right: 10px;
                    }

                    @media (max-width: 575px) {
                        font-size: 13px;
                    }
                }

                .vermais {
                    color: #fff;
                    display: inline-block !important;
                    line-height: 34px;
                    text-transform: uppercase;
                    font-weight: 500;
                    height: 40px !important;
                    padding: 0 30px !important;
                    border: 2px solid #ffffff !important;
                    border-radius: 0 !important;
                    transform: skew(-10deg);
                    text-decoration: none !important;

                    &:hover {
                        background-color: #fff;
                        color: #000;
                    }
                }

                @media (max-width: 575px) { 
                    margin: 115px 0 0;
                }
            }

            @media (max-width: 575px) {
                padding: 100px 0;
            }
        }

        @media (max-width: 1199px) {
            height: 820px;
        }

        @media (max-width: 992px) {  
            height: 720px;
        }

        @media (max-width: 575px) {
            height: 560px;
        }

    }

    #veiculos {
        padding: 65px 0;

        .veiculos-title {
            max-width: 700px;
            margin: 0 auto;
        
            p {
                margin: 45px 0;
                text-align: center;

                @media (max-width: 575px) {
                    font-size: 15px;
                }
            }
        }
    }

    #aboutus {
        overflow: hidden;

        .about-box {
        margin: 100px auto;
        
            h2 {
                text-align: center;
                position: relative;

                @media (max-width: 575px) {
                    font-size: 25px;
                }

                span {
                    color: #f42c2c;
                }

                &::before {
                    background-color: #242424;
                    bottom: -25px;
                    content: "";
                    height: 1px;
                    left: 0;
                    margin: 0 auto;
                    position: absolute;
                    right: 0;
                    width: 99px;
                }
        
                &:after {
                    background-color: #242424;
                    bottom: -18px;
                    content: "";
                    height: 1px;
                    left: 0;
                    margin: 0 auto;
                    position: absolute;
                    right: 0;
                    width: 59px;
                }
            }
        
            .about-text {
                display: flex;
                align-items: center;
                margin-top: 50px;

                @media (max-width: 991px) {
                    flex-direction: column;
                }
        
                img {
                    margin-right: 50px;

                    @media (max-width: 991px) {
                        margin-right: unset;
                        margin-bottom: 20px;
                    }

                    @media (max-width: 575px) {
                        max-width: 150px;
                    }
                }
            }

            @media (max-width: 767px) {
                margin: 100px auto 50px;
            }

            @media (max-width: 575px) {
                margin: 70px auto 50px;
            }
        }
    }
`;