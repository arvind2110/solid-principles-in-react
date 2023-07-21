import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
    return(
        <Container>
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        </Container>
    );
};

export default App;