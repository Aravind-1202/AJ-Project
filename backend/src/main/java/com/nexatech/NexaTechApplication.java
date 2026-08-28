package com.nexatech;

import com.nexatech.model.Enquiry;
import com.nexatech.repository.EnquiryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class NexaTechApplication {

    public static void main(String[] args) {
        SpringApplication.run(NexaTechApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(EnquiryRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                Enquiry e1 = new Enquiry(
                        "Alexander Wright",
                        "alexander.w@hyperflow.io",
                        "+1 (415) 892-3091",
                        "HyperFlow Technologies",
                        "Custom Software",
                        "We are looking to rebuild our high-frequency distributed telemetry pipeline and require NexaTech engineering expertise for our Q3 launch."
                );
                e1.setStatus("NEW");
                e1.setCreatedAt(LocalDateTime.now().minusHours(2));

                Enquiry e2 = new Enquiry(
                        "Elena Rostova",
                        "elena@novafinance.com",
                        "+1 (212) 440-1928",
                        "Nova Capital Partners",
                        "Web Development",
                        "We require a flagship enterprise web portal with institutional-grade security and ultra-low latency analytics dashboards."
                );
                e2.setStatus("NEW");
                e2.setCreatedAt(LocalDateTime.now().minusHours(6));

                Enquiry e3 = new Enquiry(
                        "Marcus Vance",
                        "marcus.vance@vertexai.co",
                        "+44 20 7946 0912",
                        "Vertex AI Labs",
                        "UI/UX Design",
                        "Seeking design system engineering and full design overhaul for our next-gen generative agent platform before Series B."
                );
                e3.setStatus("CONTACTED");
                e3.setCreatedAt(LocalDateTime.now().minusDays(1));

                Enquiry e4 = new Enquiry(
                        "Sarah Lin",
                        "slin@orbithealth.org",
                        "+1 (650) 319-8821",
                        "Orbit Health Sciences",
                        "API Development",
                        "Need resilient FHIR-compliant API middleware integrations for hospital data networks across 14 provider systems."
                );
                e4.setStatus("CONTACTED");
                e4.setCreatedAt(LocalDateTime.now().minusDays(2));

                Enquiry e5 = new Enquiry(
                        "Julian Thorne",
                        "jthorne@arcstudios.design",
                        "+1 (310) 902-1144",
                        "Arc Interactive",
                        "Web Development",
                        "Completed our brand redesign collaboration. Production deployment successful with 99.99% uptime."
                );
                e5.setStatus("CLOSED");
                e5.setCreatedAt(LocalDateTime.now().minusDays(5));

                repository.save(e1);
                repository.save(e2);
                repository.save(e3);
                repository.save(e4);
                repository.save(e5);

                System.out.println(">>> NexaTech initial seed enquiries initialized successfully! <<<");
            }
        };
    }
}
