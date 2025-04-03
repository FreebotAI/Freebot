# Freebot - AI Customer Service Automation Platform

<div align="center">
  <img src="assets/images/freebot-logo.png" alt="Freebot Logo" width="200" />

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Website](https://img.shields.io/badge/Website-freebot.website-blue)](https://www.freebot.website)
  [![Twitter](https://img.shields.io/badge/Twitter-Freebot-blue)](https://www.freebot.website)
  [![GitHub](https://img.shields.io/badge/GitHub-FreebotAI-blue)](https://github.com/FreebotAI/Freebot)
</div>

## Overview

Freebot is an innovative AI-powered platform that revolutionizes customer service interactions. By leveraging advanced AI technologies, it automates phone menu navigation, reduces wait times, and streamlines customer service processes.

## Key Features

- 🤖 **Smart Navigation**: Automated handling of IVR systems and complex phone menus
- ⏰ **Wait Time Elimination**: AI-powered queuing system
- 🔒 **Secure & Private**: End-to-end encryption with blockchain integration
- 💬 **Multi-Channel Support**: Phone, chat, and email automation

## Technical Architecture

```mermaid
graph TD
    A[Frontend - React] --> B[API Gateway]
    B --> C[Backend Services]
    C --> D[Database]
    C --> E[Redis Cache]
    C --> F[Blockchain]
    C --> G[AI Services]
    
    subgraph Frontend
        A --> H[React Components]
        H --> I[State Management]
        I --> J[API Integration]
    end
    
    subgraph Backend
        C --> K[Auth Service]
        C --> L[Customer Service]
        C --> M[AI Processing]
        C --> N[Blockchain Service]
    end
```

## Project Structure

```
freebot/
├── apps/
│   ├── frontend/          # React frontend application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── store/
│   │   └── package.json
│   └── backend/          # Node.js backend application
│       ├── src/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── models/
│       │   └── routes/
│       └── package.json
├── shared/              # Shared utilities and types
├── docs/               # Documentation
└── contracts/          # Smart contracts
```

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Routing**: React Router 6

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express
- **Database**: PostgreSQL with TypeORM
- **Caching**: Redis
- **Real-time**: Socket.IO
- **Authentication**: JWT
- **Logging**: Winston

### DevOps & Tools
- **Build System**: Turborepo
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest, Vitest
- **CI/CD**: GitHub Actions

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant AI
    participant Blockchain

    User->>Frontend: Initiate Service Request
    Frontend->>Backend: API Call
    Backend->>AI: Process Request
    AI->>Backend: AI Response
    Backend->>Blockchain: Record Transaction
    Backend->>Frontend: Response
    Frontend->>User: Update UI
```

## Getting Started

### Prerequisites
- Node.js >= 16.0.0
- PostgreSQL >= 14
- Redis >= 6
- Solana CLI tools

### Installation

```bash
# Clone repository
git clone https://github.com/FreebotAI/Freebot.git
cd freebot

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start development
npm run dev
```

## API Documentation

Our API follows RESTful principles with the following main endpoints:

```typescript
// Authentication
POST   /api/auth/login
POST   /api/auth/register

// Service Management
POST   /api/service/create
GET    /api/service/status/:id
PUT    /api/service/update/:id

// User Management
GET    /api/user/profile
PUT    /api/user/update
```

## Security

- End-to-end encryption for all communications
- JWT-based authentication
- Rate limiting and DDOS protection
- Regular security audits
- GDPR and CCPA compliant

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [freebot.website](https://www.freebot.website)
- Twitter: [@FreebotAI](https://www.freebot.website)
- GitHub: [FreebotAI/Freebot](https://github.com/FreebotAI/Freebot)

---

Built with ❤️ by the Freebot Team 