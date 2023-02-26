import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
    return (
        <div>
            <Spinner className="m-5" color="primary">
                Loading...
            </Spinner>
        </div>
    );
};

export default Loading;
