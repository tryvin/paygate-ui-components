export const linearGradient = (startColor = '#1b2329', endColor = '#11161a') => `
    background-size: 100%;
    background: ${endColor};

    background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,${startColor}),color-stop(100%,${endColor}));
    background-image: -webkit-linear-gradient(top,${startColor},${endColor});
    background-image: -moz-linear-gradient(top,${startColor},${endColor});
    background-image: -o-linear-gradient(top,${startColor},${endColor});
    background-image: linear-gradient(top,${startColor},${endColor});
`;

export const tabledBeforeAndAfter = `
    &:before, &:after {
        display: table;
        content: "";
        line-height: 0;
        clear: both;
    }
`;
