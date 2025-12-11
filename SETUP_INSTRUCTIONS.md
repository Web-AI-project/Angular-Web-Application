# Quick Setup Guide

## Error Fixed! ✅

The "untrusted domain" error occurred because Windows Authentication wasn't properly configured.

## Configuration Options:

You have 2 options to connect to SQL Server:

### Option 1: SQL Server Authentication (Recommended - Easier)
Edit `.env` file:
```
SQL_USER=sa
SQL_PASSWORD=YourActualPassword
```

### Option 2: Enable Windows Authentication on SQL Server
1. Open SQL Server Management Studio
2. Right-click server > Properties > Security
3. Set "SQL Server and Windows Authentication mode"
4. Restart SQL Server service
5. Then in `.env`, remove SQL_USER and SQL_PASSWORD

## Table Already Set ✅
The query now uses: `Test_Station_1`

## Next Steps:

1. **Edit `.env` file** - Add your SQL Server password
2. **Restart the backend server:**
   ```powershell
   # Stop current server (Ctrl+C in that terminal)
   npm run server
   ```
3. The Angular app is already running at http://localhost:4200

Once the backend connects successfully, refresh the browser to see your data!
