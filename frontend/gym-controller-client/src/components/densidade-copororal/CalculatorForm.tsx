import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

interface FormData {
    gender: string;
    age: number;
    weight: number;
    triceps: number;
    chest: number;
    subAxillary: number;
    subscapular: number;
    abdominal: number;
    supraIliac: number;
    thigh: number;
}

const validationSchema = Yup.object({
    gender: Yup.string().required('O gênero é obrigatório'),
    age: Yup.number().required('A idade é obrigatória').positive('A idade deve ser um número positivo').min(10, 'A idade deve ser maior que 10'),
    weight: Yup.number().required('O peso é obrigatório').positive('O peso deve ser um número positivo'),
    triceps: Yup.number().required('A medida do tríceps é obrigatória').positive('A medida deve ser maior que zero'),
    chest: Yup.number().required('A medida do peito é obrigatória').positive('A medida deve ser maior que zero'),
    subAxillary: Yup.number().required('A medida subaxilar é obrigatória').positive('A medida deve ser maior que zero'),
    subscapular: Yup.number().required('A medida subescapular é obrigatória').positive('A medida deve ser maior que zero'),
    abdominal: Yup.number().required('A medida abdominal é obrigatória').positive('A medida deve ser maior que zero'),
    supraIliac: Yup.number().required('A medida suprailiaca é obrigatória').positive('A medida deve ser maior que zero'),
    thigh: Yup.number().required('A medida da coxa é obrigatória').positive('A medida deve ser maior que zero'),
});

const CalculatorForm: React.FC = () => {
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            gender: '',
            age: 0,
            weight: 0,
            triceps: 0,
            chest: 0,
            subAxillary: 0,
            subscapular: 0,
            abdominal: 0,
            supraIliac: 0,
            thigh: 0,
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await api.post('/calcular-densidade-corporal', values);

                if (response.data.success) {
                    navigate('/calculo-gordura-corporal/resultado', { state: { result: response.data } });
                } else {
                    toast.error(response.data.error || 'Ocorreu um erro desconhecido.');
                }
            } catch (err) {
                toast.error('Erro na solicitação. Verifique sua conexão e tente novamente.');
            }
        },
    });

    return (
        <Box
            sx={{
                width: '80%',
                maxWidth: '800px',
                margin: '0 auto',
                padding: 4,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Calculadora de Gordura Corporal
            </Typography>
            <form onSubmit={formik.handleSubmit} className="calculator-form">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel>Gênero</InputLabel>
                        <Select
                            label="Gênero"
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.touched.gender && Boolean(formik.errors.gender)}
                        >
                            <MenuItem value="male">Masculino</MenuItem>
                            <MenuItem value="female">Feminino</MenuItem>
                        </Select>
                        {formik.touched.gender && formik.errors.gender && (
                            <Typography color="error" variant="caption">
                                {formik.errors.gender}
                            </Typography>
                        )}
                    </FormControl>
                    <TextField
                        label="Idade"
                        name="age"
                        type="number"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                        fullWidth
                    />
                    <TextField
                        label="Peso (kg)"
                        name="weight"
                        type="number"
                        value={formik.values.weight}
                        onChange={formik.handleChange}
                        error={formik.touched.weight && Boolean(formik.errors.weight)}
                        helperText={formik.touched.weight && formik.errors.weight}
                        fullWidth
                    />
                    <TextField
                        label="Tríceps"
                        name="triceps"
                        type="number"
                        value={formik.values.triceps}
                        onChange={formik.handleChange}
                        error={formik.touched.triceps && Boolean(formik.errors.triceps)}
                        helperText={formik.touched.triceps && formik.errors.triceps}
                        fullWidth
                    />
                    <TextField
                        label="Peito"
                        name="chest"
                        type="number"
                        value={formik.values.chest}
                        onChange={formik.handleChange}
                        error={formik.touched.chest && Boolean(formik.errors.chest)}
                        helperText={formik.touched.chest && formik.errors.chest}
                        fullWidth
                    />
                    <TextField
                        label="Subaxilar"
                        name="subAxillary"
                        type="number"
                        value={formik.values.subAxillary}
                        onChange={formik.handleChange}
                        error={formik.touched.subAxillary && Boolean(formik.errors.subAxillary)}
                        helperText={formik.touched.subAxillary && formik.errors.subAxillary}
                        fullWidth
                    />
                    <TextField
                        label="Subescapular"
                        name="subscapular"
                        type="number"
                        value={formik.values.subscapular}
                        onChange={formik.handleChange}
                        error={formik.touched.subscapular && Boolean(formik.errors.subscapular)}
                        helperText={formik.touched.subscapular && formik.errors.subscapular}
                        fullWidth
                    />
                    <TextField
                        label="Abdominal"
                        name="abdominal"
                        type="number"
                        value={formik.values.abdominal}
                        onChange={formik.handleChange}
                        error={formik.touched.abdominal && Boolean(formik.errors.abdominal)}
                        helperText={formik.touched.abdominal && formik.errors.abdominal}
                        fullWidth
                    />
                    <TextField
                        label="Suprailiaca"
                        name="supraIliac"
                        type="number"
                        value={formik.values.supraIliac}
                        onChange={formik.handleChange}
                        error={formik.touched.supraIliac && Boolean(formik.errors.supraIliac)}
                        helperText={formik.touched.supraIliac && formik.errors.supraIliac}
                        fullWidth
                    />
                    <TextField
                        label="Coxa"
                        name="thigh"
                        type="number"
                        value={formik.values.thigh}
                        onChange={formik.handleChange}
                        error={formik.touched.thigh && Boolean(formik.errors.thigh)}
                        helperText={formik.touched.thigh && formik.errors.thigh}
                        fullWidth
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, mr: 4 }}
                >
                    Calcular
                </Button>
                <Link to="/">
                    <Button className="back-button" variant="outlined" sx={{ mt: 2 }}>
                        Voltar para a Home
                    </Button>
                </Link>
            </form>
            {error && <p className="error">{error}</p>}
            {result && <ResultDisplay result={result} />}
        </Box>
    );
};

export default CalculatorForm;
