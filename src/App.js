import { Fragment, useEffect } from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Layout from './components/Layout';

function App() {
    return (
        <Fragment>
            <div className="wrapper d-flex justify-content-center align-items-center">
                <Layout />
            </div>
        </Fragment>
    );
}

export default App;
