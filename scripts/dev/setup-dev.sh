#!/bin/bash

# Exit on error
set -e

echo "Setting up development environment..."

# Check prerequisites
command -v node >/dev/null 2>&1 || { echo "Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "Docker is required but not installed. Aborting." >&2; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Copy environment file if not exists
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
fi

# Start development databases
echo "Starting development databases..."
docker-compose up -d postgres redis

# Wait for databases to be ready
echo "Waiting for databases to be ready..."
sleep 5

# Initialize database
echo "Initializing database..."
cd apps/backend
npm run typeorm migration:run
cd ../..

# Build shared packages
echo "Building shared packages..."
cd shared
npm run build
cd ..

echo "Development environment setup completed!"
echo "You can now run 'npm run dev' to start the development servers." 