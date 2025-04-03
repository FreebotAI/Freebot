#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# Load environment variables
if [ -f .env ]; then
    source .env
else
    echo "Error: .env file not found"
    exit 1
fi

# Build applications
echo "Building applications..."
npm run build

# Database migrations
echo "Running database migrations..."
cd apps/backend
npm run typeorm migration:run

# Deploy frontend
echo "Deploying frontend..."
cd ../frontend
docker build -t freebot-frontend .
docker push freebot-frontend

# Deploy backend
echo "Deploying backend..."
cd ../backend
docker build -t freebot-backend .
docker push freebot-backend

# Update Kubernetes deployments
echo "Updating Kubernetes deployments..."
kubectl apply -f k8s/

echo "Deployment completed successfully!" 