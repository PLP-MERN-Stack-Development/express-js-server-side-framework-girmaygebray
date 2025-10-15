🚂 Week 2: Express.js – RESTful API Project
📘 Overview

This project is part of Week 2: Express.js – Server-Side Framework.
The goal is to build a fully functional RESTful API using Express.js, implementing standard CRUD operations, middleware, error handling, and advanced features like filtering, pagination, and search.

🚀 Features
🧱 Core CRUD

GET /api/products → List all products (with pagination & filtering)

GET /api/products/:id → Retrieve a specific product by ID

POST /api/products → Create a new product

PUT /api/products/:id → Update a product

DELETE /api/products/:id → Remove a product

🧩 Middleware

Logger: Logs method, URL, and timestamp for each request

Authentication: Checks for a valid x-api-key header

Validation: Ensures product data integrity before creation or update

Global Error Handler: Catches and formats all server errors

⚙️ Advanced Features

Filtering: Filter products by category using query parameters

Pagination: Paginate results with page and limit

Search: Find products by name

Statistics: Get product counts by category

🏗️ Project Structure
express-api/
│
├── server.js                 # Entry point
│
├── routes/
│   └── products.js           # Product routes (CRUD & advanced features)
│
├── controllers/
│   └── productsController.js # Business logic for each endpoint
│
├── middleware/
│   ├── logger.js             # Logs requests
│   ├── auth.js               # API key authentication
│   └── validateProduct.js    # Request validation
│
└── utils/
    └── errors.js             # Custom error classes

🧩 API Endpoints
Method	Endpoint	Description
GET	/api/products	List all products (supports filtering & pagination)
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search/:name	Search products by name
GET	/api/products/stats	View product statistics (count by category)