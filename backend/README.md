# NexaTech Spring Boot Backend API

This is the enterprise backend service for the **NexaTech** platform.

## Features
- **Java 17+ / Spring Boot 3.2+**
- **Spring Data JPA** with MySQL database support & automatic schema updates
- **Bean Validation** on all incoming payloads
- **RESTful Endpoints** with full CORS support
- **Automated Fallback**: Configured with MySQL (`application.properties`) and standalone H2 in-memory mode (`application-h2.properties`)

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/enquiries` | Create new client enquiry (Status: `NEW`) |
| `GET` | `/api/enquiries` | Fetch all enquiries (Supports `?status=NEW`) |
| `GET` | `/api/enquiries/stats` | Summary statistics (Total, New, Contacted, Closed) |
| `GET` | `/api/enquiries/{id}` | Fetch enquiry by ID |
| `PUT` | `/api/enquiries/{id}/status` | Update enquiry status (`NEW`, `CONTACTED`, `CLOSED`) |
| `DELETE` | `/api/enquiries/{id}` | Delete enquiry |
| `GET` | `/api/health` | Service health status |

## Running Locally

### With Maven:
```bash
cd backend
mvn spring-boot:run
```

### With In-Memory H2 Profile (No database setup required):
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=h2
```

### MySQL Configuration
Update credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/nexatech_db?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=your_password
```
