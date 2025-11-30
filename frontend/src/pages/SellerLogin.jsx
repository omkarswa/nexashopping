import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert, CircularProgress } from '@mui/material';
import { useLoginSellerMutation } from '../services/api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SellerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSeller, { isLoading, isError, error }] = useLoginSellerMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginSeller({ email, password }).unwrap();
            // Assuming the backend returns { token: "..." }
            dispatch(setCredentials({ user: email, token: userData.token, role: 'seller' }));
            navigate('/seller/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
                        Seller Login
                    </Typography>

                    {isError && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error?.data?.message || error?.data || 'Login failed. Please check your credentials.'}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Login'}
                        </Button>

                        <Box textAlign="center">
                            <Link to="/seller/register" style={{ textDecoration: 'none', color: '#2979ff' }}>
                                Don't have an account? Register
                            </Link>
                        </Box>
                    </form>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default SellerLogin;
