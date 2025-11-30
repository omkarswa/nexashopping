import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert, CircularProgress } from '@mui/material';
import { useRegisterSellerMutation } from '../services/api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SellerRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        storeName: '',
    });
    const [registerSeller, { isLoading, isSuccess, isError, error }] = useRegisterSellerMutation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerSeller(formData).unwrap();
        } catch (err) {
            console.error('Failed to register:', err);
        }
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                        Seller Registration
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
                        Join NexaShop today
                    </Typography>

                    {isSuccess && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            Registration successful! Please wait for admin approval. You can try logging in once approved.
                        </Alert>
                    )}
                    {isError && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error?.data?.message || error?.data || 'Registration failed. Please try again.'}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Store Name"
                            name="storeName"
                            value={formData.storeName}
                            onChange={handleChange}
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
                            {isLoading ? <CircularProgress size={24} /> : 'Register'}
                        </Button>

                        <Box textAlign="center">
                            <Link to="/seller/login" style={{ textDecoration: 'none', color: '#2979ff' }}>
                                Already have an account? Login here
                            </Link>
                        </Box>
                    </form>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default SellerRegister;
