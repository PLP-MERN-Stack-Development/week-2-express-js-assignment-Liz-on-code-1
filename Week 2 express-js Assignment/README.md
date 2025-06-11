[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19705432&assignment_repo_type=AssignmentRepo)


---

## 🧪 How to Run the Server

### Prerequisites

- Node.js v18 or higher
- npm (Node Package Manager)

### Install Dependencies

```bash
npm install

node server.js
## The server runs on http://localhost:3000 by default.

📌 Endpoints
🔹 GET /api/products
Description: Retrieve a list of all products.


category – filter products by category (e.g. ?category=electronics)

page – pagination page number (default: 1)

limit – items per page (default: 10)

Example Request:


GET /api/products
GET /api/products?category=electronics&page=1&limit=2

Response:
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]

🔹 GET /api/products/:id
Description: Get a single product by ID.

Example Request:
GET /api/products/1
Response:
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}


🔹 POST /api/products
Description: Create a new product.
Headers:

Content-Type: application/json

x-api-key: your_api_key

Request Body:
{
  "name": "Headphones",
  "description": "Noise-cancelling headphones",
  "price": 150,
  "category": "electronics",
  "inStock": true
}
Response:
{
  "id": "generated-uuid",
  "name": "Headphones",
  "description": "Noise-cancelling headphones",
  "price": 150,
  "category": "electronics",
  "inStock": true
}

🔹 PUT /api/products/:id
Description: Update a product by ID.
Headers:

Content-Type: application/json

x-api-key: your_api_key

Request Body:
{
  "name": "Updated Name",
  "description": "Updated description",
  "price": 999,
  "category": "updated-category",
  "inStock": false
}
Response:
{
  "id": "1",
  "name": "Updated Name",
  "description": "Updated description",
  "price": 999,
  "category": "updated-category",
  "inStock": false
}

🔹 DELETE /api/products/:id
Description: Delete a product by ID.
Headers:

x-api-key: your_api_key

Example Request:
DELETE /api/products/1
Response:
204 No Content


🔹 GET /api/products/stats
Description: Get statistics on products grouped by category.

Example Request:
GET /api/products/stats
Response:
{
  "count": 3,
  "categoryStats": {
    "electronics": 2,
    "kitchen": 1
  }
}
🔐 Authentication
All routes (except the base /) are protected by an API key middleware.

Header Required:
x-api-key: your_api_key


