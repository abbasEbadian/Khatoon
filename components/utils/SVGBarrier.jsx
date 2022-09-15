import * as React from 'react';

const Barrier = ({ Component, ...rest }) => {
    return <Component {...rest} />
}


export default Barrier;