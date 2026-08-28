package com.nexatech.service;

import com.nexatech.dto.EnquiryRequest;
import com.nexatech.model.Enquiry;
import com.nexatech.repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;

    @Autowired
    public EnquiryService(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    @Transactional(readOnly = true)
    public List<Enquiry> getAllEnquiries(String status) {
        if (status != null && !status.trim().isEmpty() && !status.equalsIgnoreCase("ALL")) {
            return enquiryRepository.findByStatusOrderByCreatedAtDesc(status.toUpperCase());
        }
        return enquiryRepository.findAllByOrderByCreatedAtDesc();
    }

    @Transactional(readOnly = true)
    public Optional<Enquiry> getEnquiryById(Long id) {
        return enquiryRepository.findById(id);
    }

    @Transactional
    public Enquiry createEnquiry(EnquiryRequest request) {
        Enquiry enquiry = new Enquiry();
        enquiry.setName(request.getName().trim());
        enquiry.setEmail(request.getEmail().trim());
        enquiry.setPhone(request.getPhone().trim());
        enquiry.setCompany(request.getCompany() != null ? request.getCompany().trim() : "");
        enquiry.setService(request.getService().trim());
        enquiry.setMessage(request.getMessage().trim());
        enquiry.setStatus("NEW");
        return enquiryRepository.save(enquiry);
    }

    @Transactional
    public Optional<Enquiry> updateEnquiryStatus(Long id, String newStatus) {
        return enquiryRepository.findById(id).map(enquiry -> {
            enquiry.setStatus(newStatus.toUpperCase().trim());
            return enquiryRepository.save(enquiry);
        });
    }

    @Transactional
    public boolean deleteEnquiry(Long id) {
        if (enquiryRepository.existsById(id)) {
            enquiryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getEnquiryStats() {
        long total = enquiryRepository.count();
        long newCount = enquiryRepository.countByStatus("NEW");
        long contactedCount = enquiryRepository.countByStatus("CONTACTED");
        long closedCount = enquiryRepository.countByStatus("CLOSED");

        Map<String, Object> stats = new HashMap<>();
        stats.put("total", total);
        stats.put("new", newCount);
        stats.put("contacted", contactedCount);
        stats.put("closed", closedCount);
        return stats;
    }
}
