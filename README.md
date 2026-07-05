# Valley College

Valley College is a full-stack web application built using **Laravel** for the backend and **React.js** for the frontend. The project is designed to manage and showcase college-related information such as courses, departments, students, staff, and announcements through a modern, responsive interface.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Build for Production](#build-for-production)

---

## Project Overview

Valley College is a web-based platform developed to streamline academic and administrative processes for a college.  
The backend is powered by Laravel REST APIs, while the frontend is built using React.js to deliver a fast and interactive user experience.

---

## Tech Stack

### Backend
- **Laravel** (PHP Framework)
- **MySQL** (Database)
- **Laravel Sanctum / Passport** (Authentication)
- **Composer** (Dependency Management)

### Frontend
- **React.js**
- **Tailwind CSS / Bootstrap** (Styling)

---

## System Requirements

- PHP >= 8.1
- Composer
- Node.js >= 18
- npm or yarn
- MySQL >= 8.0
- Git

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/valley-college.git
cd valley-college
```
### 2. Project Setup
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```
## Environment Configuration
```bash Backend .env Example
env
APP_NAME=ValleyCollege
APP_ENV=local
APP_KEY=base64:xxxxxxxxxxxx
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=valley_college
DB_USERNAME=root
DB_PASSWORD=root
```

## Running the Application
### Run Laravel Backend
```bash
cd backend
php artisan migrate --seed
composer run dev
```
Project will be available at:
```bash
http://localhost:8000
```

## Build for Production
### Frontend Build
```bash
npm run build
```
## Laravel Optimization
```bash
php artisan optimize:clear
php artisan optimize
```

Valley College © 2025
Built with ❤️ using Laravel and React.js
