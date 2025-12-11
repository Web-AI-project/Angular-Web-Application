# Angular + NestJS + PostgreSQL Application

An attractive Angular frontend application with NestJS backend that displays data from PostgreSQL in a beautiful, responsive table.

## Features

✨ **Modern UI** with Angular Material Design
🔍 **Real-time search** functionality
📊 **Dynamic table** that adapts to your SQL data
🎨 **Gradient theme** with smooth animations
📱 **Responsive design** for all devices
🔄 **Refresh button** to reload data

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL (v12 or higher)
- Angular CLI (will be installed with dependencies)

## Setup Instructions

### 1. Install Dependencies

```powershell
npm install
```

### 2. Configure PostgreSQL Connection

Edit `.env` file with your PostgreSQL details:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DATABASE=TestStandDB
API_PORT=3000
```

**Note:** Make sure PostgreSQL is running and the database exists. You can create it with:
```sql
CREATE DATABASE "TestStandDB";
```

### 3. Run the Application

You'll need two terminals:

**Terminal 1 - Start the NestJS Backend:**
```powershell
npm run server
```
The API will run on http://localhost:3000

**Terminal 2 - Start the Angular App:**
```powershell
npm start
```
The app will open at http://localhost:4200

## Project Structure

```
Angular_VSC/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── data.service.ts       # HTTP service for API calls
│   │   ├── app.component.ts          # Main component logic
│   │   ├── app.component.html        # Main component template
│   │   └── app.component.css         # Component styles
│   ├── backend/                      # NestJS Backend
│   │   ├── data/
│   │   │   ├── data.controller.ts    # REST API controller
│   │   │   ├── data.service.ts       # Business logic
│   │   │   ├── database.service.ts   # SQL Server connection
│   │   │   └── data.module.ts        # Data module
│   │   ├── app.module.ts             # Root module
│   │   └── main.ts                   # NestJS entry point
│   ├── index.html                    # Main HTML file
│   ├── main.ts                       # Angular entry point
│   └── styles.css                    # Global styles
├── .env                              # Environment variables (DO NOT COMMIT)
├── .env.example                      # Example environment file
├── .gitignore                        # Git ignore rules
├── nest-cli.json                     # NestJS configuration
├── package.json                      # Dependencies and scripts
├── tsconfig.server.json              # TypeScript config for backend
└── angular.json                      # Angular configuration
```

## API Endpoints

- `GET /api/data` - Retrieves data from SQL Server
- `GET /api/health` - Health check endpoint

## Customization

### Change the Theme
Edit `src/styles.css` to modify the gradient background:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Table Styling
Edit `src/app/app.component.css` to customize table appearance.

### Add More Features
The application is built with Angular standalone components, making it easy to extend with additional features.

## Troubleshooting

**Connection Issues:**
- Verify SQL Server is running
- Check firewall settings
- Ensure SQL Server authentication is enabled
- Verify connection string details

**CORS Errors:**
- The backend already has CORS enabled
- Check that both servers are running

**No Data Displayed:**
- Check browser console for errors
- Verify the SQL query returns data
- Test the API endpoint directly: http://localhost:3000/api/data

## Technologies Used

- **Frontend:** Angular 17, Angular Material, RxJS
- **Backend:** NestJS 10, TypeScript
- **Database:** PostgreSQL (pg package, TypeORM)
- **Styling:** CSS3, Material Design

## Architecture

This application follows a modern three-tier architecture with clear separation of concerns:

### Layer Overview

1. **Presentation Layer (Angular)**: Material Design UI with real-time search and responsive design
2. **Application Layer (NestJS)**: RESTful API with dependency injection and modular architecture
3. **Data Layer (PostgreSQL)**: Relational database for persistent data storage

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                            │
│                     (http://localhost:4200)                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTP Request
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ANGULAR FRONTEND (Port 4200)                  │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐         ┌─────────────────────────────┐  │
│  │  app.component   │────────▶│  Material UI Components     │  │
│  │  - Template      │         │  - mat-table                │  │
│  │  - Logic         │         │  - mat-card                 │  │
│  │  - Styling       │         │  - mat-form-field           │  │
│  └────────┬─────────┘         └─────────────────────────────┘  │
│           │                                                      │
│           │ Inject                                               │
│           ▼                                                      │
│  ┌──────────────────┐                                           │
│  │  data.service.ts │                                           │
│  │  - HTTP Client   │                                           │
│  │  - API Calls     │                                           │
│  └────────┬─────────┘                                           │
└───────────┼──────────────────────────────────────────────────────┘
            │
            │ HTTP GET /api/data
            │ (CORS Enabled)
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    NESTJS BACKEND (Port 3000)                    │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐                                           │
│  │   main.ts        │  Bootstrap Application                    │
│  │  - Create App    │  - Enable CORS                            │
│  │  - Config Port   │  - Start Server                           │
│  └────────┬─────────┘                                           │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────┐                                           │
│  │  app.module.ts   │  Root Module                              │
│  │  - Import Config │  - Register Modules                       │
│  │  - Import Data   │                                           │
│  └────────┬─────────┘                                           │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              DATA MODULE                             │      │
│  ├──────────────────────────────────────────────────────┤      │
│  │  ┌────────────────────┐                              │      │
│  │  │ data.controller.ts │  @Controller('api')          │      │
│  │  │                    │                              │      │
│  │  │  @Get('data')      │◄─── Route: /api/data        │      │
│  │  │  @Get('health')    │◄─── Route: /api/health      │      │
│  │  └──────────┬─────────┘                              │      │
│  │             │ Inject                                  │      │
│  │             ▼                                         │      │
│  │  ┌────────────────────┐                              │      │
│  │  │  data.service.ts   │  Business Logic              │      │
│  │  │                    │                              │      │
│  │  │  getTableData()    │  - Query Execution           │      │
│  │  │                    │  - Data Transformation       │      │
│  │  └──────────┬─────────┘                              │      │
│  │             │ Inject                                  │      │
│  │             ▼                                         │      │
│  │  ┌────────────────────┐                              │      │
│  │  │database.service.ts │  Database Connection         │      │
│  │  │                    │                              │      │
│  │  │  - Pool Management │  - Connection Pooling        │      │
│  │  │  - getPool()       │  - Error Handling            │      │
│  │  │  - connect()       │  - Lifecycle Management      │      │
│  │  └──────────┬─────────┘                              │      │
│  └─────────────┼──────────────────────────────────────────     │
└────────────────┼──────────────────────────────────────────────┘
                 │
                 │ SQL Query
                 │ SELECT * FROM "Test_Station_1" LIMIT 100
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   POSTGRESQL DATABASE                            │
├─────────────────────────────────────────────────────────────────┤
│  Database: TestStandDB                                           │
│  Table: Test_Station_1                                           │
│                                                                  │
│  ┌────────────────────────────────────────────────┐            │
│  │  Connection Pool (Max: 10 connections)         │            │
│  │  - Idle Timeout: 30s                           │            │
│  │  - Connection Timeout: 30s                     │            │
│  └────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

## Detailed Application Flow

### 1. Application Initialization

```
User Starts Application
        ↓
Terminal 1: npm run server (NestJS)
        ↓
    main.ts bootstraps
        ↓
    Creates NestFactory
        ↓
    Loads ConfigModule (.env)
        ↓
    Initializes DataModule
        ↓
    DatabaseService.onModuleInit()
        ↓
    Creates PostgreSQL Connection Pool
        ↓
    Server listens on Port 3000
        ↓
Terminal 2: npm start (Angular)
        ↓
    Angular Dev Server starts
        ↓
    Compiles application
        ↓
    Opens browser at Port 4200
```

### 2. Data Fetching Flow

```
┌─────────────────────────────────────────────────────────┐
│ Step 1: Component Initialization                        │
└─────────────────────────────────────────────────────────┘
    Angular app.component.ts
        ↓
    ngOnInit() lifecycle hook
        ↓
    Calls loadData()

┌─────────────────────────────────────────────────────────┐
│ Step 2: HTTP Request                                    │
└─────────────────────────────────────────────────────────┘
    app.component.ts
        ↓
    Injects DataService
        ↓
    dataService.getData()
        ↓
    HTTP GET http://localhost:3000/api/data
        ↓
    Request Headers:
    - Accept: application/json
    - Origin: http://localhost:4200

┌─────────────────────────────────────────────────────────┐
│ Step 3: Backend Processing                              │
└─────────────────────────────────────────────────────────┘
    NestJS receives request
        ↓
    CORS Middleware validates origin
        ↓
    Routes to DataController
        ↓
    @Get('data') decorator matches route
        ↓
    Calls dataController.getData()
        ↓
    Try-Catch error handling
        ↓
    Calls dataService.getTableData()

┌─────────────────────────────────────────────────────────┐
│ Step 4: Database Query                                  │
└─────────────────────────────────────────────────────────┘
    dataService.getTableData()
        ↓
    Gets pool from DatabaseService
        ↓
    Executes SQL:
    SELECT * FROM "Test_Station_1" LIMIT 100
        ↓
    PostgreSQL processes query
        ↓
    Returns result.rows
        ↓
    Connection released back to pool

┌─────────────────────────────────────────────────────────┐
│ Step 5: Response Journey                                │
└─────────────────────────────────────────────────────────┘
    Array of records returned
        ↓
    DataController receives data
        ↓
    NestJS serializes to JSON
        ↓
    Response Headers:
    - Content-Type: application/json
    - Access-Control-Allow-Origin: *
        ↓
    HTTP 200 OK with JSON payload
        ↓
    Data travels over network

┌─────────────────────────────────────────────────────────┐
│ Step 6: Frontend Rendering                              │
└─────────────────────────────────────────────────────────┘
    Angular HTTP Client receives response
        ↓
    Observable emits data
        ↓
    Subscribe callback executes
        ↓
    Sets dataSource property
        ↓
    Extracts displayedColumns from first row
        ↓
    Angular Change Detection triggers
        ↓
    Template re-renders
        ↓
    Material Table displays data
        ↓
    User sees populated table

┌─────────────────────────────────────────────────────────┐
│ Step 7: User Interactions                               │
└─────────────────────────────────────────────────────────┘
    User types in search box
        ↓
    [(ngModel)] two-way binding
        ↓
    searchTerm property updates
        ↓
    filteredData() getter recalculates
        ↓
    Filters rows client-side
        ↓
    Table updates in real-time
        ↓
    User clicks Refresh button
        ↓
    Calls loadData() again
        ↓
    Repeats flow from Step 2
```

### 3. Error Handling Flow

```
Error Occurs
    ↓
┌───────────────────┐
│ Database Error?   │
└───────┬───────────┘
        │ Yes
        ▼
    DatabaseService catches
        ↓
    Logs error to console
        ↓
    Throws error up
        ↓
    DataService receives
        ↓
    DataController catch block
        ↓
    Creates HttpException
        ↓
    Returns HTTP 500
        ↓
    {
      error: 'Database query failed',
      details: error.message
    }
        ↓
    Angular HTTP Error Handler
        ↓
    Sets error property
        ↓
    Displays error message in UI
        ↓
    Shows "Failed to load data" message
```

### 4. Component Communication

```
┌──────────────────────────────────────────────────────┐
│          Angular Component Architecture               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  app.component.ts (TypeScript Logic)                 │
│       ↕ Property Binding                             │
│  app.component.html (Template)                       │
│       ↕ Style Binding                                │
│  app.component.css (Styles)                          │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Template Bindings:                                  │
│  - {{ title }}                    : Interpolation    │
│  - [dataSource]="filteredData"   : Property Binding  │
│  - (click)="refresh()"           : Event Binding     │
│  - [(ngModel)]="searchTerm"      : Two-way Binding   │
│  - *ngIf="loading"               : Structural Dir.   │
│  - *ngFor="let col of columns"  : Structural Dir.   │
└──────────────────────────────────────────────────────┘
```

### 5. Dependency Injection Flow

```
NestJS Dependency Injection Container
            ↓
┌───────────────────────────────┐
│   ConfigModule (Global)       │
│   - Loads .env variables      │
│   - Available to all modules  │
└───────────────────────────────┘
            ↓
┌───────────────────────────────┐
│       DataModule              │
├───────────────────────────────┤
│  Providers:                   │
│  1. DatabaseService           │
│  2. DataService               │
│                               │
│  Controllers:                 │
│  1. DataController            │
└───────────────────────────────┘
            ↓
    Injection Chain:
            ↓
DataController constructor
    ↓ Inject
DataService (injected)
    ↓ Inject
DatabaseService (injected)
    ↓ Inject
ConfigService (injected)
```

### 6. State Management

```
┌─────────────────────────────────────────┐
│     Component State Variables           │
├─────────────────────────────────────────┤
│  title: string                          │
│  displayedColumns: string[]             │
│  dataSource: any[]                      │
│  loading: boolean                       │
│  error: string                          │
│  searchTerm: string                     │
└─────────────────────────────────────────┘
            ↓
    State Changes Trigger
            ↓
┌─────────────────────────────────────────┐
│   Angular Change Detection              │
├─────────────────────────────────────────┤
│  1. Checks component tree               │
│  2. Detects property changes            │
│  3. Updates DOM efficiently             │
│  4. Re-renders affected views           │
└─────────────────────────────────────────┘
```

## Key Technologies & Patterns

### Design Patterns Used

1. **Module Pattern** (NestJS): Encapsulation of related features
2. **Dependency Injection**: Loose coupling and testability
3. **Repository Pattern**: Database abstraction layer
4. **MVC Pattern**: Separation of concerns
5. **Observer Pattern**: RxJS Observables for async operations
6. **Singleton Pattern**: Database connection pool

### Security Measures

- **CORS Configuration**: Restricts cross-origin requests
- **Environment Variables**: Sensitive data in .env (not committed)
- **Connection Pooling**: Prevents connection exhaustion
- **Error Handling**: Doesn't leak sensitive information
- **TypeScript**: Type safety prevents runtime errors

### Performance Optimizations

- **Connection Pooling**: Reuses database connections (max: 10)
- **Lazy Loading**: Angular loads modules on demand
- **Change Detection**: Optimized with OnPush strategy potential
- **Client-side Filtering**: Fast search without server roundtrip
- **Material Design**: Hardware-accelerated animations
- **Production Build**: Minification and tree-shaking

## License

MIT License - Feel free to use and modify for your projects!
