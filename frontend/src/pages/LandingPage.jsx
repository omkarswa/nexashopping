import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const LandingPage = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 800,
                        background: 'linear-gradient(45deg, #2979ff 30%, #f50057 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    Welcome to NexaShop
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
                    Experience the future of e-commerce. Join our premium marketplace as a seller or manage your empire.
                </Typography>
            </motion.div>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={5}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer',
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <StorefrontIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h4" gutterBottom>
                                Become a Seller
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Start your journey with us. Register your store and reach millions of customers.
                            </Typography>
                            <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
                                <Button variant="contained" size="large" component={Link} to="/seller/register">
                                    Register
                                </Button>
                                <Button variant="outlined" size="large" component={Link} to="/seller/login">
                                    Login
                                </Button>
                            </Box>
                        </Paper>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={5}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer',
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <AdminPanelSettingsIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                            <Typography variant="h4" gutterBottom>
                                Admin Portal
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Manage sellers, approve requests, and oversee the platform operations.
                            </Typography>
                            <Button variant="contained" color="secondary" size="large" component={Link} to="/admin/login" sx={{ mt: 'auto' }}>
                                Admin Login
                            </Button>
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingPage;
