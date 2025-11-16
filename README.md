# Task Management API

A RESTful API for managing tasks, built with Node.js and Express. This project demonstrates fundamental backend development concepts including routing, error handling, and API design.

## 📋 Project Overview

This API allows you to:
- Retrieve all tasks
- Get a specific task by ID
- Check server health status

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Postman (for API testing)

### Installation

1. **Clone or download this repository**
```bash
   git clone <your-repository-url>
```

2. **Navigate to the project directory**
```bash
   cd task-management
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start the server**
```bash
   npm start
```

5. **Verify the server is running**
   - Open your browser and go to: `http://localhost:3000`
   - You should see: "Task Management API is running!"

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

---

### **1. GET /**
Returns a welcome message to confirm the API is running.

**Response:**
```
Task Management API is running!
```

**Status Code:** 200 OK

---

### **2. GET /tasks**
Retrieves all tasks.

**Response:**
```json
[
    {
        "id": 1,
        "title": "Learn Node.js",
        "completed": false,
        "priority": "high",
        "createdAt": "2025-10-15T00:00:00.000Z"
    },
    {
        "id": 2,
        "title": "Build REST API",
        "completed": false,
        "priority": "medium",
        "createdAt": "2025-10-20T00:00:00.000Z"
    },
    {
        "id": 3,
        "title": "Test with Postman",
        "completed": true,
        "priority": "low",
        "createdAt": "2025-10-22T00:00:00.000Z"
    },
    {
        "id": 4,
        "title": "Deploy to production",
        "completed": false,
        "priority": "high",
        "createdAt": "2025-10-25T00:00:00.000Z"
    },
    {
        "id": 5,
        "title": "Write documentation",
        "completed": false,
        "priority": "medium",
        "createdAt": "2025-10-28T00:00:00.000Z"
    }
]
```

**Status Code:** 200 OK

---

### **3. GET /task/:id**
Retrieves a specific task by its ID.

**Parameters:**
- `id` (number, required) - The task ID

**Success Response (200 OK):**
```json
{
    "id": 1,
    "title": "Learn Node.js",
    "completed": false,
    "priority": "high",
    "createdAt": "2025-10-15T00:00:00.000Z"
}
```

**Error Responses:**

**400 Bad Request** - Invalid ID format
```json
{
    "error": "Invalid ID format"
}
```

**404 Not Found** - Task doesn't exist
```json
{
    "error": "Task not found"
}
```

**Example Requests:**
- ✅ Valid: `GET /task/1`
- ❌ Not found: `GET /task/999`
- ⚠️ Invalid: `GET /task/abc`

---

### **4. GET /health**
Returns the server health status and uptime.

**Response:**
```json
{
    "status": "healthy",
    "uptime": 123.456
}
```

**Status Code:** 200 OK

*Note: `uptime` is the number of seconds the server has been running.*

---

## 🧪 Testing with Postman

### How to Test:

1. **Open Postman**
2. **Create a new request**
3. **Set the method** to GET
4. **Enter the endpoint URL** (e.g., `http://localhost:3000/tasks`)
5. **Click Send**
6. **View the response** in the response panel below

### Test Cases:

| Endpoint | Expected Status | Description |
|----------|----------------|-------------|
| `GET /` | 200 | Welcome message |
| `GET /tasks` | 200 | All tasks |
| `GET /task/1` | 200 | Task with ID 1 |
| `GET /task/999` | 404 | Task not found |
| `GET /task/abc` | 400 | Invalid ID format |
| `GET /health` | 200 | Server health |

---

## 📁 Project Structure
```
task-management/
├── node_modules/          # Dependencies (auto-generated, ignored by Git)
├── src/
│   ├── routes/
│   │   └── tasks.js       # Task-related routes and logic
│   └── index.js           # Main server file
├── .gitignore             # Files to ignore in Git
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Locked versions of dependencies
├── README.md              # Project documentation (this file)
├── api-responses.txt      # API response examples and test results
└── tasks-response.json    # Sample tasks response
```

---

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework for Node.js
- **Git** - Version control system

---

## 💻 Available Scripts
```bash
npm start          # Start the server on port 3000
npm install        # Install all dependencies
```

---

## 🔧 Development

### Adding New Routes:

1. Open `src/routes/tasks.js`
2. Add your new route using Express Router
3. Export the router
4. Import and use it in `src/index.js`

### Example:
```javascript
router.get('/new-route', (req, res) => {
    res.json({ message: 'New route works!' });
});
```

---

## 📝 API Response Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET request |
| 400 | Bad Request | Invalid input/parameters |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server-side error |

---
---

### **5. CREATE a new task**
**Endpoint:** `POST /tasks`

Creates a new task in the system.

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "title": "Task title here",
    "priority": "high",
    "completed": false
}
```

**Parameters:**
- `title` (string, **required**) - The task title (cannot be empty)
- `priority` (string, optional) - Task priority: `"low"`, `"medium"`, or `"high"` (default: `"medium"`)
- `completed` (boolean, optional) - Task completion status (default: `false`)

**Success Response (201 Created):**
```json
{
    "success": true,
    "message": "Task created successfully",
    "data": {
        "id": 1731772800000,
        "title": "Task title here",
        "completed": false,
        "priority": "high",
        "createdAt": "2025-11-16T18:00:00.000Z"
    }
}
```

**Error Responses:**

**400 Bad Request** - Missing or empty title
```json
{
    "success": false,
    "error": "Title is required and must be a non-empty string"
}
```

**400 Bad Request** - Invalid priority value
```json
{
    "success": false,
    "error": "Priority must be low, medium, or high"
}
```

**How to test in Postman:**
1. Set method to **POST**
2. URL: `http://localhost:3000/tasks`
3. Go to **Headers** tab
   - Add: `Content-Type: application/json`
4. Go to **Body** tab
   - Select **raw**
   - Select **JSON** from dropdown
   - Enter your task data
5. Click **Send**

**Example:**
```json
{
    "title": "Complete LAB 02",
    "priority": "high",
    "completed": false
}
```

## 🤝 Contributing

This is a lab project for CSE 362 - Web Programming II.

**To contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes as part of the CSE 362 course at Jahangirnagar University.

---

## 👤 Author

**[Joyoshree Saha]**  
Student ID: 388  
Department of Computer Science and Engineering  
Jahangirnagar University  
CSE 362 - Web Programming II Lab

---

## 📞 Support

If you encounter any issues:
1. Ensure Node.js and npm are properly installed
2. Check that all dependencies are installed (`npm install`)
3. Verify the server is running on port 3000
4. Make sure no other application is using port 3000

For more help, refer to the course materials or contact your instructor.

---

**Last Updated:** November 2025