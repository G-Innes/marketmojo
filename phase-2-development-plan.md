# MarketMojo - Phase 2 Development Plan

## Overview

Phase 2 focuses on building the backend infrastructure using Express, Prisma, and Neon PostgreSQL. This phase will establish the database connection, create API endpoints, and implement basic authentication.

## 1. Backend Setup (Week 1)

### 1.1 Initial Express Backend Setup (Days 1-2)

#### Tasks:
1. Create backend directory structure
   ```bash
   mkdir -p backend/{src/{controllers,services,middleware,utils,routes,config},prisma}
   ```

2. Initialize npm and install dependencies
   ```bash
   cd backend
   npm init -y
   npm install express cors helmet dotenv express-rate-limit winston morgan
   npm install -D typescript @types/express @types/node @types/cors ts-node-dev
   npx tsc --init
   ```

3. Configure TypeScript (tsconfig.json)
   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```

4. Create basic server setup (src/index.ts)
   - Express app initialization
   - Middleware configuration
   - Basic error handling
   - Health check endpoint

#### Deliverables:
- Functioning Express server with proper TypeScript setup
- Health check endpoint (`/api/health`)
- Logger configuration
- Basic error handling middleware

### 1.2 Prisma ORM & Database Connection (Days 3-4)

#### Tasks:
1. Install Prisma
   ```bash
   npm install @prisma/client
   npm install -D prisma
   npx prisma init
   ```

2. Configure Neon PostgreSQL connection in .env
   ```
   DATABASE_URL="postgresql://username:password@your-neon-host:5432/marketmojo?schema=public"
   ```

3. Create Prisma schema based on development plan
   - Implement User model
   - Implement Trade model
   - Implement Journal model
   - Implement Checklist and settings models
   - Define relationships

4. Generate Prisma client and initial migration
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Create database connection utility

#### Deliverables:
- Complete Prisma schema
- Database connection to Neon PostgreSQL
- Initial migration
- Database connection utility

### 1.3 Authentication Setup (Days 5-7)

#### Tasks:
1. Install authentication packages
   ```bash
   npm install jsonwebtoken bcryptjs cookie-parser
   npm install -D @types/jsonwebtoken @types/bcryptjs @types/cookie-parser
   ```

2. Implement User service
   - Create user
   - Find user by email/username
   - Validate password

3. Create authentication controller
   - Register endpoint
   - Login endpoint
   - Logout endpoint
   - Get current user endpoint

4. Implement JWT middleware
   - Token generation
   - Token validation
   - Refresh token logic

5. Create authentication routes

#### Deliverables:
- Complete authentication system
- JWT implementation with HTTP-only cookies
- User registration and login functionality
- Authentication middleware for protected routes

## 2. API Development (Week 2)

### 2.1 Base API Structure (Days 1-2)

#### Tasks:
1. Create API route structure
   - Set up route files for each resource
   - Implement base controller class
   - Create middleware for request validation

2. Implement error handling utilities
   - Custom error classes
   - Error middleware
   - Response formatting

3. Set up request validation with Zod
   ```bash
   npm install zod
   ```

#### Deliverables:
- Complete API route structure
- Error handling system
- Request validation middleware
- Response formatting utilities

### 2.2 Trade API Endpoints (Days 3-4)

#### Tasks:
1. Create Trade service
   - CRUD operations for trades
   - Trade filtering and pagination
   - Trade statistics

2. Implement Trade controller
   - GET /api/trades - List trades with filtering
   - GET /api/trades/:id - Get single trade
   - POST /api/trades - Create trade
   - PUT /api/trades/:id - Update trade
   - DELETE /api/trades/:id - Delete trade

3. Create Trade validation schemas
   - Create trade schema
   - Update trade schema
   - Filter trades schema

#### Deliverables:
- Complete Trade API endpoints
- Trade service with CRUD operations
- Validation schemas for trade operations

### 2.3 Journal & Checklist API (Days 5-7)

#### Tasks:
1. Create Journal service
   - CRUD operations for journal entries
   - Journal filtering and pagination

2. Implement Journal controller
   - GET /api/journal - List journal entries
   - GET /api/journal/:id - Get single journal entry
   - POST /api/journal - Create journal entry
   - PUT /api/journal/:id - Update journal entry
   - DELETE /api/journal/:id - Delete journal entry

3. Create Checklist service
   - CRUD operations for checklists
   - Template management
   - Completion tracking

4. Implement Checklist controller
   - GET /api/checklists - List checklists
   - GET /api/checklists/:id - Get single checklist
   - GET /api/checklists/templates - Get checklist templates
   - POST /api/checklists - Create checklist
   - PUT /api/checklists/:id - Update checklist
   - DELETE /api/checklists/:id - Delete checklist

#### Deliverables:
- Complete Journal API endpoints
- Complete Checklist API endpoints
- Validation schemas for both resources
- Services with CRUD operations

## 3. Frontend Integration (Week 3)

### 3.1 API Client Setup (Days 1-2)

#### Tasks:
1. Set up Axios client in frontend
   ```bash
   cd ../frontend
   npm install axios
   ```

2. Create API service classes
   - Base API service with interceptors
   - Authentication service
   - Trade service
   - Journal service
   - Checklist service

3. Implement request/response interceptors
   - Error handling
   - Authentication token management
   - Loading state management

#### Deliverables:
- Axios client configuration
- API service classes for each resource
- Interceptors for error handling and auth

### 3.2 Authentication Integration (Days 3-4)

#### Tasks:
1. Create authentication store with Redux Toolkit
   ```bash
   npm install @reduxjs/toolkit react-redux redux-persist
   ```

2. Implement authentication slice
   - Login/register actions
   - Logout action
   - User state management
   - Persistence configuration

3. Create login and registration forms
   - Form validation with Zod
   - Error handling
   - Success handling

4. Implement protected routes
   - Route guards for authenticated routes
   - Redirect logic for unauthenticated users

#### Deliverables:
- Authentication Redux store
- Login/registration forms
- Protected route implementation
- Persistent authentication

### 3.3 Data Fetching & Forms (Days 5-7)

#### Tasks:
1. Create data fetching hooks
   - useTrades hook
   - useJournal hook
   - useChecklists hook

2. Implement form creation
   - Trade entry form
   - Journal entry form
   - Checklist form

3. Create form validation schemas
   - Trade schema
   - Journal schema
   - Checklist schema

4. Set up React Query for data fetching (optional)
   ```bash
   npm install @tanstack/react-query
   ```

#### Deliverables:
- Data fetching hooks for each resource
- Form components with validation
- Integration with backend API
- Cache management for data

## 4. Testing & Deployment (Week 4)

### 4.1 Backend Testing (Days 1-3)

#### Tasks:
1. Set up testing environment
   ```bash
   cd backend
   npm install -D jest supertest @types/jest ts-jest
   ```

2. Create test configuration (jest.config.js)

3. Implement unit tests
   - Service tests
   - Utility tests
   - Validation tests

4. Create integration tests
   - API endpoint tests
   - Authentication tests
   - Database interaction tests

#### Deliverables:
- Complete test suite for backend
- Unit tests for services and utilities
- Integration tests for API endpoints
- Test coverage report

### 4.2 Frontend Testing (Days 4-5)

#### Tasks:
1. Set up frontend testing environment
   ```bash
   cd frontend
   npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
   ```

2. Create component tests
   - Form component tests
   - UI component tests

3. Implement hook tests
   - Data fetching hooks
   - Custom utility hooks

4. Create integration tests
   - Page component tests
   - User flows

#### Deliverables:
- Component test suite
- Hook and utility tests
- Integration tests for key user flows
- Test coverage report

### 4.3 Deployment Setup (Days 6-7)

#### Tasks:
1. Prepare backend for Vercel deployment
   - Create Vercel configuration (vercel.json)
   - Set up serverless functions
   - Configure environment variables

2. Prepare frontend for Vercel deployment
   - Create build optimizations
   - Configure environment variables
   - Set up static asset handling

3. Configure CI/CD pipeline
   - GitHub Actions for testing
   - Automated deployments on merge

4. Test deployment process
   - Staging deployment
   - Smoke tests
   - Database connection verification

#### Deliverables:
- Vercel configuration for backend and frontend
- CI/CD pipeline setup
- Staging deployment
- Documentation for deployment process

## Timeline Summary

- Week 1: Backend Setup (Express, Prisma, Authentication)
- Week 2: API Development (Trade, Journal, Checklist)
- Week 3: Frontend Integration (API Client, Auth, Forms)
- Week 4: Testing & Deployment

## Key Considerations

### Security
- Ensure proper JWT implementation
- Implement rate limiting
- Secure cookie handling
- Input validation and sanitization

### Performance
- Optimize database queries
- Implement efficient caching
- Use connection pooling with Neon
- Lazy load data where appropriate

### Maintainability
- Follow consistent code patterns
- Document API endpoints
- Create comprehensive test coverage
- Use TypeScript for type safety

## Next Steps After Phase 2

After completing Phase 2, the project will have:
- A fully functional backend with authentication
- Database connection with Prisma ORM
- Complete API for trades, journal entries, and checklists
- Frontend integration with the backend APIs
- Deployment setup for Vercel

This provides the foundation for Phase 3, which will focus on implementing the core features and enhancing the user experience.
