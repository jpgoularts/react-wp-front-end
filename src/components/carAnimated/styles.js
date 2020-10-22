import styled from 'styled-components';

export const Cars = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .car{
        transition: all 1s ease;

        @media (max-width: 1200px) {
            max-width: 450px;
        }

        @media (max-width: 991px) {
            max-width: 350px;
        }

        @media (max-width: 767px) {
            max-width: 250px;
        }

        @media (max-width: 575px) {
            max-width: 150px;
        }

        &.from-left {
            transform: translate(-500px, 0px);
        }

        &.from-right {
            transform: translate(500px, 0px);
        }
    }

    &.animate {
        .car {
            &.from-left {
                transform: translate(100px, 0px);

                @media (max-width: 1200px) {
                    transform: translate(0px, 0px);
                }

                @media (max-width: 767px) {
                    transform: translate(30px, 0px);
                }

                @media (max-width: 575px) {
                    transform: translate(0px, 0px);
                }
            }

            &.from-right {
                transform: translate(-100px, 0px);

                @media (max-width: 1200px) {
                    transform: translate(0px, 0px);
                }

                @media (max-width: 767px) {
                    transform: translate(-30px, 0px);
                }

                @media (max-width: 575px) {
                    transform: translate(0px, 0px);
                }
            }
        }
    }
`;