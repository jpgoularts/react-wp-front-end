import styled from 'styled-components';

export const FooterDiv = styled.footer`
    background: rgb(48, 48, 48);
    padding: 50px 0;

    .align {
        display: flex;

        .footer-info {
            color: #fff;
            width: 50%;

            .logo {
                img {
                    max-width: 150px;
                    margin-bottom: 20px;
                }
            }

            p {
                font-size: 13px;
                text-align: left;

                @media (max-width: 767px) {
                    text-align: center;
                }
            }

            @media (max-width: 767px) {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
        .footer-social {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            h5 {
                font-size: 15px;
                margin-bottom: 20px;
            }
            
            a{
                color: #fff;
                font-size: 25px;
                margin: 0 25px;
                text-decoration: unset;
            }

            @media (max-width: 575px) {
                margin-top: 20px;
            }
        }

        @media (max-width: 575px) {
            flex-direction: column;
            align-items: center;
        }
    }

`;