import styled from 'styled-components';

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #3a3737;

    .spinner{
        width: 50px;
        height: 50px;
        position: relative;
        margin: 0 auto;

        &:before,
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px dotted #fff;
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            animation: sk-bounce 2.0s linear infinite;
        }

        &:after {
            animation-delay: -1.0s
        }
    }

    @keyframes sk-bounce {
        0% {
            transform: scale(0.0);
        }
        20% {
            transform: scale(1.0);
        }
        40% {
            transform: scale(1.5);
        }
        60% {
            transform: scale(2.0);
            opacity: .5;
        }
        80% {
            transform: scale(2.5);
            opacity: .25;
        }
        100% {
            transform: scale(3.0);
            opacity: 0;
        }

    }
`;