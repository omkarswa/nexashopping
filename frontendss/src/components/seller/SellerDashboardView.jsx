import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';

const SellerDashboardView = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="600" sx={{ mb: 4 }}>
                Seller Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 5 }}>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'success.main' }}>
                        <CardContent sx={{ p: 3 }}>
                            <Box display="flex" alignItems="center" gap={2.5}>
                                <Box sx={{ p: 1.5, bgcolor: 'success.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircleIcon sx={{ color: 'success.dark' }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                        Store Status
                                    </Typography>
                                    <Typography variant="h5" fontWeight="600" color="success.dark">
                                        Active
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
                        <CardContent sx={{ p: 3 }}>
                            <Box display="flex" alignItems="center" gap={2.5}>
                                <Box sx={{ p: 1.5, bgcolor: 'primary.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <InventoryIcon sx={{ color: 'primary.dark' }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                        Total Products
                                    </Typography>
                                    <Typography variant="h5" fontWeight="600" color="text.primary">
                                        0
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper
                elevation={0}
                sx={{
                    p: 8,
                    textAlign: 'center',
                    minHeight: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Box sx={{ p: 3, mb: 3, bgcolor: 'action.hover', display: 'inline-flex' }}>
                    <InventoryIcon sx={{ fontSize: 64, color: 'text.secondary', opacity: 0.6 }} />
                </Box>
                <Typography variant="h5" color="text.primary" gutterBottom fontWeight="600" sx={{ mb: 1 }}>
                    Product Management Coming Soon
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
                    We are building a powerful suite of tools for you to add, manage, and track your products. Stay tuned for updates!
                </Typography>
            </Paper>
        </Box>
    );
};

export default SellerDashboardView;
