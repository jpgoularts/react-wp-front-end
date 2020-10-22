import styled from 'styled-components';

export const MenuItem = styled.header`
    position: sticky;
    width: 100%;
    z-index: 9;
    top: 0;
    padding: 0;
    background-color: #fff;
    height: 82px;
    display: flex;
    align-items: center;

    nav {
        width: 100%;
        display: flex;
        align-items: center;

        .logo {
            img {
                max-width: 100px;
            }
        }

        button {
            z-index: 999;
            position: relative;
            display: none;
            border: 0;
            background-color: unset;

            .line {
                width: 30px;
                height: 3px;
                background-color: #f42c2c;
                display: block;
                margin: 5px auto;
                -webkit-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
            }

            @media (max-width: 767px) {
                display: block;
            }
        }

        .menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            ul {
                list-style-type: none;
                display: flex;
                align-items: center;

                li {
                    padding: 0 20px;
                    
                    a {
                        color: #000;
                        font-weight: 500;
                        font-size: 15px;
                        text-transform: uppercase;
                        text-decoration: none;

                        @media(max-width: 767px) {
                            color: #fff;
                        }
                    }

                    &:last-child {
                        height: 40px;
                        padding: 0 30px !important;
                        margin-left: 20px;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        border: 2px solid #f42c2c !important;
                        border-radius: 0 !important;
                        transform: skew(-10deg);

                        &:hover {
                            background-color: #f42c2c;

                            a {
                                color: #fff;
                            }
                        }
                    }
                }

                @media (max-width: 767px) {
                    flex-direction: column;
                }
            }

            @media (max-width: 767px) {
                width: 100%;
                position: absolute;
                left: 0;
                top: -100%;
                height: 0;
                transition: all 1s ease;
                flex-basis: 100%;
                flex-grow: 1;
                justify-content: center;
                align-items: center;
                opacity: 0;
            }
        }

        @media (max-width: 767px) {
            flex-wrap: wrap;
            justify-content: space-between;
        }
        
        &[data-menu=true] {
            button {
                transition: all 0.3s ease-in-out;
                transition-delay: 0.6s;
                transform: rotate(45deg);

                .line {
                    &:nth-child(2) {
                        width: 0px;
                    }

                    &:nth-child(1),
                    &:nth-child(3) {
                        -webkit-transition-delay: 0.3s;
                        -o-transition-delay: 0.3s;
                        transition-delay: 0.3s;
                    }

                    &:nth-child(1) {
                        -webkit-transform: translateY(4px);
                        -ms-transform: translateY(4px);
                        -o-transform: translateY(4px);
                        transform: translateY(4px);
                    }

                    &:nth-child(3) {
                        -webkit-transform: translateY(-13px) rotate(90deg);
                        -ms-transform: translateY(-13px) rotate(90deg);
                        -o-transform: translateY(-13px) rotate(90deg);
                        transform: translateY(-13px) rotate(90deg);
                    }
                }
            }

            .menu {
                @media (max-width: 767px) {
                    height: 100vh;
                    top: 0;
                    opacity: 1;
                    background-color: #000000c9;
        
                    ul {
                        display: flex;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        height: 80px;
    }
    

`;