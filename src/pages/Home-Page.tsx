import PingTest from '@components/application/ping-pong/Pingtest';
import { Container, Typography } from '@mui/material';
import React from 'react';

/**
 * @function HomePage  Displays content of homepage page.
 * @author Patrik Duch
 */
const HomePage: React.FC = () => {
    return (
        <Container>
            <Typography variant='h4' component='h1'>HomePage</Typography>
            <PingTest />
        </Container>
    );
}

export default HomePage;