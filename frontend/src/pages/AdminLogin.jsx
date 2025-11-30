import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert, CircularProgress } from '@mui/material';
import { useLoginAdminMutation } from '../services/api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginAdmin, { isLoading, isError, error }] = useLoginAdminMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginAdmin({ email, password }).unwrap();
            dispatch(setCredentials({ user: email, token: userData.token, role: 'admin' }));
            navigate('/admin/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, borderTop: '4px solid #f50057' }}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="secondary">
                        Admin Portal
                    </Typography>

                    {isError && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error?.data?.message || error?.data || 'Access Denied.'}
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
                            color="secondary"
                            size="large"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                        </Button>
                    </form>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default AdminLogin;
