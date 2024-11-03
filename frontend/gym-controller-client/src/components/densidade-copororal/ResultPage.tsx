// src/components/ResultPage.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ResultPage: React.FC = () => {
    const location = useLocation();
    const result = location.state?.result;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                padding: 4,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: '600px',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <Typography variant="h4" gutterBottom>
                Densidade Corporal
                </Typography>
                {result && result.success ? (
                    <Box sx={{ mt: 2, textAlign: 'left' }}>
                        <Typography variant="body1">
                            {`Densidade: ${result.bodyDensity.bodyDensity.toFixed(4)}`}
                        </Typography>
                        <Typography variant="body1">
                            {`Percentual de Gordura Corporal: ${result.bodyDensity.bodyFatPercentage.toFixed(2)}%`}
                        </Typography>
                        <Typography variant="body1">
                            {`Categoria: ${result.bodyDensity.category}`}
                        </Typography>
                    </Box>
                ) : (
                    <Typography variant="body1">
                        Nenhum resultado disponível.
                    </Typography>
                )}
            </Paper>
        </Box>
    );
};

export default ResultPage;
