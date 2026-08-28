package com.nexatech.controller;

import com.nexatech.dto.EnquiryRequest;
import com.nexatech.dto.StatusUpdateRequest;
import com.nexatech.model.Enquiry;
import com.nexatech.service.EnquiryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EnquiryController {

    private final EnquiryService enquiryService;

    @Autowired
    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        response.put("service", "NexaTech API");
        response.put("version", "1.0.0");
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    /**
     * Create a new Enquiry
     * POST /api/enquiries
     */
    @PostMapping("/enquiries")
    public ResponseEntity<?> createEnquiry(@Valid @RequestBody EnquiryRequest request) {
        try {
            Enquiry created = enquiryService.createEnquiry(request);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "You're all set. We'll be in touch soon.");
            response.put("data", created);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Failed to submit enquiry: " + e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Get all Enquiries, optionally filtered by status
     * GET /api/enquiries or /api/enquiries?status=NEW
     */
    @GetMapping("/enquiries")
    public ResponseEntity<List<Enquiry>> getAllEnquiries(@RequestParam(required = false) String status) {
        List<Enquiry> enquiries = enquiryService.getAllEnquiries(status);
        return ResponseEntity.ok(enquiries);
    }

    /**
     * Get enquiry statistics (Total, New, Contacted, Closed)
     * GET /api/enquiries/stats
     */
    @GetMapping("/enquiries/stats")
    public ResponseEntity<Map<String, Object>> getEnquiryStats() {
        return ResponseEntity.ok(enquiryService.getEnquiryStats());
    }

    /**
     * Get Enquiry by ID
     * GET /api/enquiries/{id}
     */
    @GetMapping("/enquiries/{id}")
    public ResponseEntity<?> getEnquiryById(@PathVariable Long id) {
        return enquiryService.getEnquiryById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Update Enquiry Status
     * PUT /api/enquiries/{id}/status
     */
    @PutMapping("/enquiries/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @Valid @RequestBody StatusUpdateRequest request) {
        return enquiryService.updateEnquiryStatus(id, request.getStatus())
                .map(updated -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("success", true);
                    res.put("message", "Status updated successfully to " + updated.getStatus());
                    res.put("data", updated);
                    return ResponseEntity.ok(res);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Delete Enquiry
     * DELETE /api/enquiries/{id}
     */
    @DeleteMapping("/enquiries/{id}")
    public ResponseEntity<?> deleteEnquiry(@PathVariable Long id) {
        boolean deleted = enquiryService.deleteEnquiry(id);
        if (deleted) {
            Map<String, Object> res = new HashMap<>();
            res.put("success", true);
            res.put("message", "Enquiry deleted successfully");
            return ResponseEntity.ok(res);
        }
        return ResponseEntity.notFound().build();
    }
}
