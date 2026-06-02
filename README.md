# SignalR Record Status Update - Frontend

## Overview

This project is a React + TypeScript application that demonstrates real-time record status updates using SignalR.

The application connects to an ASP.NET Core SignalR Hub and automatically updates the UI whenever a record status changes on the server.

## Features

* React + TypeScript
* Vite
* SignalR Client Integration
* Real-Time Updates
* Automatic UI Refresh
* Record Status Dashboard
* WebSocket Communication

---

## Prerequisites

Before running the application, install the following:

### Node.js

Download and install Node.js (version 18 or later):

https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

## Clone Repository

```bash
git clone <frontend-repository-url>
```

Navigate to the project:

```bash
cd signalr-record-status-poc
```

---

## Install Dependencies

```bash
npm install
```

---

## Start the Application

```bash
npm run dev
```

The Vite development server will start and display a local URL similar to:

```text
http://localhost:5173
```

Open the URL shown in your terminal.

---

## Backend Requirement

This frontend requires the SignalR backend application to be running.

Start the backend application before testing real-time updates.

Backend repository:

```text
<backend-repository-url>
```

---

## SignalR Configuration

SignalR connection settings are located in:

```text
src/services/signalRService.ts
```

Example:

```typescript
.withUrl("http://localhost:5187/notificationHub")
```

If the backend is running on a different port, update the URL accordingly.

---

## Project Structure

```text
src
│
├── components
│   └── RecordList.tsx
│
├── services
│   └── signalRService.ts
│
├── types
│   └── Record.ts
│
├── App.tsx
└── main.tsx
```

---

## Running the Application

### Terminal 1

Start the frontend:

```bash
npm run dev
```

### Terminal 2

Start the backend:

```bash
dotnet run
```

---

## Testing Real-Time Updates

1. Start the frontend application.
2. Start the backend application.
3. Open the application in the browser.
4. Open Developer Tools → Console.
5. Verify the following message appears:

```text
SignalR Connected
```

6. Trigger a backend update using the API endpoint:

```http
POST /api/test/update
```

7. The frontend should automatically receive the update and refresh the UI without reloading the page.

---

## Expected Behavior

Initial State:

```text
Grower A - Incomplete
Grower B - Pending
Grower C - Approved
```

After receiving a SignalR event:

```text
Grower A - Approved
Grower B - Pending
Grower C - Approved
```

No page refresh is required.

---

## Technologies Used

* React
* TypeScript
* Vite
* SignalR Client (@microsoft/signalr)

---

## Future Enhancements

* Redux Toolkit Integration
* Environment-Based Configuration
* Authentication and Authorization
* Dynamic Record Updates
* Connection Status Indicators
* Error Handling and Retry Logic
* Production Deployment Configuration

```
```
