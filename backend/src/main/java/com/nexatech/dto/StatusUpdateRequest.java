package com.nexatech.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class StatusUpdateRequest {

    @NotBlank(message = "Status is required")
    @Pattern(regexp = "^(?i)(NEW|CONTACTED|CLOSED)$", message = "Status must be NEW, CONTACTED, or CLOSED")
    private String status;

    public StatusUpdateRequest() {
    }

    public StatusUpdateRequest(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
