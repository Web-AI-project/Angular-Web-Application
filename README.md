# Angular SQL Table Application

An attractive Angular frontend application that displays data from Microsoft SQL Server in a beautiful, responsive table.

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
- Microsoft SQL Server
- Angular CLI (will be installed with dependencies)

## Setup Instructions

### 1. Install Dependencies

```powershell
npm install
```

### 2. Configure SQL Server Connection

Create a `.env` file in the root directory (copy from `.env.example`):

```powershell
copy .env.example .env
```

Then edit `.env` with your actual SQL Server credentials:

```env
SQL_USER=your_username
SQL_PASSWORD=your_password
SQL_SERVER=localhost
SQL_DATABASE=your_database
SQL_ENCRYPT=true
SQL_TRUST_CERTIFICATE=true
API_PORT=3000
```

Also update the SQL query in `server/server.js` to match your table:

```javascript
const result = await sql.query`SELECT TOP 100 * FROM YourTableName`;
```

**Important:** Never commit the `.env` file to version control! It's already in `.gitignore`.

### 3. Run the Application

You'll need two terminals:

**Terminal 1 - Start the Backend Server:**
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
│   ├── index.html                    # Main HTML file
│   ├── main.ts                       # Application entry point
│   └── styles.css                    # Global styles
├── server/
│   └── server.js                     # Express API server
├── .env                              # Environment variables (DO NOT COMMIT)
├── .env.example                      # Example environment file
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies and scripts
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
- **Backend:** Node.js, Express
- **Database:** Microsoft SQL Server (mssql package)
- **Styling:** CSS3, Material Design

## License

MIT License - Feel free to use and modify for your projects!
