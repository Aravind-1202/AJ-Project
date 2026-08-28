package com.nexatech.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "enquiries")
public class Enquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Full name is required")
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "Email address is required")
    @Email(message = "Please provide a valid email address")
    @Column(nullable = false)
    private String email;

    @NotBlank(message = "Phone number is required")
    @Column(nullable = false)
    private String phone;

    @Column(nullable = true)
    private String company;

    @NotBlank(message = "Service selection is required")
    @Column(nullable = false)
    private String service;

    @NotBlank(message = "Message details are required")
    @Column(columnDefinition = "TEXT", nullable = false)
    private String message;

    @Column(nullable = false)
    private String status = "NEW";

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Enquiry() {
        this.createdAt = LocalDateTime.now();
        this.status = "NEW";
    }

    public Enquiry(String name, String email, String phone, String company, String service, String message) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.service = service;
        this.message = message;
        this.status = "NEW";
        this.createdAt = LocalDateTime.now();
    }

    @PrePersist
    protected void onCreate() {
        if (this.createdAt == null) {
            this.createdAt = LocalDateTime.now();
        }
        if (this.status == null || this.status.trim().isEmpty()) {
            this.status = "NEW";
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
