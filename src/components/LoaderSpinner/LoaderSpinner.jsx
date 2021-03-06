import React from 'react';
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
    <Loader
        type="TailSpin"
        color="#01AC6A"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
};

export default LoaderSpinner;