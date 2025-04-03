# API Documentation

## Authentication

### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### Register
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

## Service Management

### Create Service Request
```http
POST /api/service/create
```

**Request Body:**
```json
{
  "type": "PHONE_SUPPORT",
  "description": "Issue description",
  "priority": "HIGH"
}
```

### Get Service Status
```http
GET /api/service/status/:id
```

**Response:**
```json
{
  "id": "service_id",
  "status": "IN_PROGRESS",
  "currentStep": "WAITING_QUEUE",
  "estimatedTime": 300
}
```

## Error Responses

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## Rate Limiting

- Rate limit: 100 requests per minute
- Headers: X-RateLimit-Limit, X-RateLimit-Remaining 