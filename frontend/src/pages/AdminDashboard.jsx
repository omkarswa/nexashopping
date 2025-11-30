import React, { useState } from 'react';
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, CircularProgress
} from '@mui/material';
import { useGetPendingSellersQuery, useUpdateSellerStatusMutation } from '../services/api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const AdminDashboard = () => {
    const { data: pendingSellers, isLoading } = useGetPendingSellersQuery();
    const [updateStatus] = useUpdateSellerStatusMutation();

    const [openRejectDialog, setOpenRejectDialog] = useState(false);
    const [selectedSellerId, setSelectedSellerId] = useState(null);
    const [rejectionReason, setRejectionReason] = useState('');

    const handleApprove = async (sellerId) => {
        try {
            await updateStatus({ sellerId, newStatus: 'APPROVED' }).unwrap();
        } catch (err) {
            console.error('Failed to approve:', err);
        }
    };

    const handleRejectClick = (sellerId) => {
        setSelectedSellerId(sellerId);
        setOpenRejectDialog(true);
    };

    const handleRejectConfirm = async () => {
        try {
            await updateStatus({
                sellerId: selectedSellerId,
                newStatus: 'DENIED',
                rejectionReason
            }).unwrap();
            setOpenRejectDialog(false);
            setRejectionReason('');
            setSelectedSellerId(null);
        } catch (err) {
            console.error('Failed to reject:', err);
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Admin Dashboard
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Pending Seller Approvals
            </Typography>

            {isLoading ? (
                <Box display="flex" justifyContent="center" p={4}>
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 4 }}>
                    <Table>
                        <TableHead sx={{ bgcolor: 'grey.100' }}>
                            <TableRow>
                                <TableCell><strong>Seller Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Store Name</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                                <TableCell align="right"><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pendingSellers?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                                        No pending approvals found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                pendingSellers?.map((seller) => (
                                    <TableRow key={seller.id} hover>
                                        <TableCell>{seller.name}</TableCell>
                                        <TableCell>{seller.email}</TableCell>
                                        <TableCell>{seller.storeName}</TableCell>
                                        <TableCell>
                                            <Chip label={seller.status} color="warning" size="small" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                startIcon={<CheckCircleIcon />}
                                                color="success"
                                                onClick={() => handleApprove(seller.id)}
                                                sx={{ mr: 1 }}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                startIcon={<CancelIcon />}
                                                color="error"
                                                onClick={() => handleRejectClick(seller.id)}
                                            >
                                                Reject
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Rejection Dialog */}
            <Dialog open={openRejectDialog} onClose={() => setOpenRejectDialog(false)}>
                <DialogTitle>Reject Seller Application</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Please provide a reason for rejection. This will be emailed to the seller.
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Rejection Reason"
                        fullWidth
                        multiline
                        rows={3}
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenRejectDialog(false)}>Cancel</Button>
                    <Button onClick={handleRejectConfirm} color="error" variant="contained">
                        Confirm Rejection
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
