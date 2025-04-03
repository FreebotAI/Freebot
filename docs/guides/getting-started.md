# Getting Started with Freebot

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- PostgreSQL (v14 or higher)
- Redis (v6 or higher)
- Solana CLI tools

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FreebotAI/Freebot.git
cd freebot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# App Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=freebot
DB_USER=your_username
DB_PASSWORD=your_password

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
```

4. Start development servers:
```bash
npm run dev
```

## Project Structure

```
freebot/
├── apps/
│   ├── frontend/          # React frontend
│   └── backend/           # Node.js backend
├── shared/                # Shared code
└── contracts/             # Smart contracts
```

## Development Workflow

1. Create a new branch:
```bash
git checkout -b feature/your-feature
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: add new feature"
```

3. Push changes and create PR:
```bash
git push origin feature/your-feature
```

## Testing

Run tests:
```bash
npm test
```

Run linting:
```bash
npm run lint
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Common Issues

### Database Connection
If you can't connect to the database:
1. Check PostgreSQL service is running
2. Verify database credentials in `.env`
3. Ensure database exists

### Redis Connection
If Redis connection fails:
1. Check Redis service is running
2. Verify Redis port is correct
3. Check Redis password if set

## Need Help?

- Check our [API Documentation](../api/README.md)
- Visit our [website](https://www.freebot.website)
- Create an issue on [GitHub](https://github.com/FreebotAI/Freebot/issues) 