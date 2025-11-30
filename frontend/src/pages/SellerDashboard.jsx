import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import { motion } from 'framer-motion';

const SellerDashboard = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Seller Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <Card sx={{ bgcolor: 'success.light', color: 'white' }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <CheckCircleIcon fontSize="large" />
                                    <Box>
                                        <Typography variant="h6">Store Status</Typography>
                                        <Typography variant="h5" fontWeight="bold">Active</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <InventoryIcon fontSize="large" color="primary" />
                                    <Box>
                                        <Typography variant="h6">Total Products</Typography>
                                        <Typography variant="h5" fontWeight="bold">0</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>

            <Paper sx={{ p: 4, textAlign: 'center', minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <InventoryIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
                <Typography variant="h6" color="text.secondary">
                    Product Management Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    You will be able to add and manage your products here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default SellerDashboard;
