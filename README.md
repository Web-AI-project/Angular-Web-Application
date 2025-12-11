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

This application follows a modern three-tier architecture:

1. **Presentation Layer (Angular)**: Material Design UI with real-time search
2. **Application Layer (NestJS)**: RESTful API with dependency injection
3. **Data Layer (MS SQL Server)**: Relational database with Windows Authentication

**Flow:**
```
Angular Component → HTTP Service → NestJS Controller → Service → Database Service → PostgreSQL
```

## License

MIT License - Feel free to use and modify for your projects!
