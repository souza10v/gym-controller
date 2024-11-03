// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleCalculateClick = () => {
        navigate('/calculo-gordura-corporal');
    };

    return (
        <Container
            sx={{
                width: '90%',
                maxWidth: '1000px',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '0 auto',
            }}
        >
            <Box
                sx={{
                    width: '90%',
                    maxWidth: '1000px',
                    textAlign: 'center',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    marginTop: 2, 
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to the Body Density Calculator
                </Typography>
                <Typography variant="body1" paragraph>
                    Use this tool to calculate your body density and get personalized insights.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCalculateClick}
                    sx={{ mt: 2 }}
                >
                    Calculate Body Density
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
