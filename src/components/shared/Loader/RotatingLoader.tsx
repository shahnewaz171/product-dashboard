import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { loaderStyle } from '../CustomStyles/CustomStyles';

const RotatingLoader: React.FC = () => {

    return (
        <div style={loaderStyle}>
            <RotatingLines width={'75'} strokeColor="#0095A0" strokeWidth="2" />
        </div>
    );
};

export default RotatingLoader;