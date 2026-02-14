#!/bin/bash

echo "Building Django app for Vercel..."

# Install dependencies
pip install -r requirements.txt

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput --clear

echo "Build complete!"
