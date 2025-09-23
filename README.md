# FSW Barber

A modern booking platform for barbershops built with Next.js, Prisma, and TypeScript.

## Overview

FSW Barber is a full-featured booking system that allows users to discover barbershops, browse services, and book appointments. The application includes user authentication, appointment management, and a clean, responsive UI built with Tailwind CSS.

## Features

- 🔐 **User Authentication**: Secure login via Google OAuth
- 🔍 **Search Functionality**: Find barbershops by name or service type
- 📅 **Appointment Management**: Book, view, and cancel appointments
- 📱 **Mobile First**: Optimized for mobile devices; desktop support will be improved in the future
- 🌙 **Dark Mode**: Modern dark theme for better user experience
- 📍 **Barbershop Profiles**: View details, services, and contact information

## Tech Stack

### Frontend:

- **Next.js 14**
- **Tailwind CSS**
- **shadcn/ui**
- **React Hook Form**
- **React Day Picker**
- **Sonner**

### Backend:

- **Next.js API Routes**
- **NextAuth.js**
- **Prisma**

### Database:

- **PostgreSQL**

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials for authentication

### Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fsw-barber.git
cd fsw-barber
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on the example:

```bash
cp .env.example .env
# Edit the .env file with your configuration values
```

4. Start PostgreSQL with Docker:

```bash
docker-compose up -d
```

5. Generate the Prisma client and seed the database:

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

- `app`: Next.js app directory with pages, components and layouts
- `prisma`: Prisma schema and seed script
- `public`: Static assets
- `_components`: Reusable UI components
- `_actions`: Server actions for database operations
- `_data`: Data fetching functions
- `_lib`: Utility functions and configuration

## Deployment

This application is designed to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://fsw-barbershop.vercel.app/)
