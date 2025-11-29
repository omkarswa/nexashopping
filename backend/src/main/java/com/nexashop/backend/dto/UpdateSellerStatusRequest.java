package com.nexashop.backend.dto;

import com.nexashop.backend.entity.SellerStatus;

import io.swagger.v3.oas.annotations.media.Schema;

public class UpdateSellerStatusRequest {
    private Long sellerId;
    private SellerStatus newStatus;
    @Schema(description = "Optional reason for rejection. Required only when status is DENIED.", example = "Invalid Store Name")
    private String rejectionReason;

    // Getters and Setters
    public Long getSellerId() {
        return sellerId;
    }

    public void setSellerId(Long sellerId) {
        this.sellerId = sellerId;
    }

    public SellerStatus getNewStatus() {
        return newStatus;
    }

    public void setNewStatus(SellerStatus newStatus) {
        this.newStatus = newStatus;
    }

    public String getRejectionReason() {
        return rejectionReason;
    }

    public void setRejectionReason(String rejectionReason) {
        this.rejectionReason = rejectionReason;
    }
}
