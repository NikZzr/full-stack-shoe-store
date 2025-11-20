export default function Docs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">SneakerStore Documentation</h1>
          <p className="text-gray-400 mt-2">Complete setup and deployment guide</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            SneakerStore is a complete full-stack e-commerce platform for selling sneakers, 
            inspired by Nike.com. It includes a modern React frontend, Express backend API, 
            PostgreSQL database, and Docker containerization for easy deployment.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React 18</li>
                <li>• Vite build tool</li>
                <li>• TailwindCSS</li>
                <li>• React Router</li>
                <li>• Axios HTTP client</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js runtime</li>
                <li>• Express.js framework</li>
                <li>• PostgreSQL database</li>
                <li>• CORS middleware</li>
                <li>• UUID for IDs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">DevOps</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Docker containers</li>
                <li>• Docker Compose</li>
                <li>• Nginx reverse proxy</li>
                <li>• pgAdmin UI</li>
                <li>• Environment configs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
          
          <h3 className="text-2xl font-bold mb-3">Option 1: Docker Compose (Recommended)</h3>
          <p className="text-gray-700 mb-4">
            The easiest way to run the entire application with all services.
          </p>
          <pre className="bg-gray-100 p-6 rounded mb-6 overflow-x-auto text-sm">
            <code>{`# Clone repository
git clone https://github.com/yourusername/sneaker-store.git
cd sneaker-store

# Build and run all services
docker-compose up --build

# Services will be available at:
# Frontend: http://localhost
# Backend API: http://localhost/api
# pgAdmin: http://localhost:5050 (admin@sneaker.com / admin123)

# To stop services
docker-compose down`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-3">Option 2: Local Development</h3>
          <p className="text-gray-700 mb-4">
            For local development without Docker.
          </p>
          
          <h4 className="text-xl font-bold mb-2">Backend Setup</h4>
          <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-sm">
            <code>{`cd backend
npm install

# Create .env file
DATABASE_URL=postgresql://sneaker:sneaker123@localhost:5432/sneaker_store
NODE_ENV=development
PORT=3000

# Start backend
npm run dev`}</code>
          </pre>

          <h4 className="text-xl font-bold mb-2">Frontend Setup</h4>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`cd frontend
npm install

# Start frontend
npm run dev

# Access at http://localhost:5173`}</code>
          </pre>
        </section>

        {/* Database Schema */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Database Schema</h2>
          
          <h3 className="text-xl font-bold mb-3">Products Table</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  stock INTEGER DEFAULT 0,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
          </pre>

          <h3 className="text-xl font-bold mb-3">Cart Items Table</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
          </pre>

          <h3 className="text-xl font-bold mb-3">Orders Table</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  total_amount DECIMAL(10, 2),
  status VARCHAR(50) DEFAULT 'pending',
  items_json TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</code>
          </pre>
        </section>

        {/* API Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">API Endpoints</h2>
          
          <h3 className="text-xl font-bold mb-3">Products</h3>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/products</p>
              <p className="text-gray-700 mt-1">Get all products with optional filters (category, minPrice, maxPrice, sort)</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/products/:id</p>
              <p className="text-gray-700 mt-1">Get single product details</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/products/search?q=query</p>
              <p className="text-gray-700 mt-1">Search products by name, description, or brand</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">Cart</h3>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/cart/:sessionId</p>
              <p className="text-gray-700 mt-1">Get cart items for a session</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">POST /api/cart</p>
              <p className="text-gray-700 mt-1">Add item to cart (body: sessionId, productId, quantity)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">PUT /api/cart/:itemId</p>
              <p className="text-gray-700 mt-1">Update cart item quantity</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">DELETE /api/cart/:itemId</p>
              <p className="text-gray-700 mt-1">Remove item from cart</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">Orders</h3>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">POST /api/orders</p>
              <p className="text-gray-700 mt-1">Create new order</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/orders/:orderId</p>
              <p className="text-gray-700 mt-1">Get order details</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-mono bg-gray-100 p-2 rounded inline-block">GET /api/orders/search/email?email=...</p>
              <p className="text-gray-700 mt-1">Search orders by customer email</p>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Deployment to Render</h2>
          
          <h3 className="text-xl font-bold mb-3">Step 1: Push to GitHub</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`git add .
git commit -m "Initial SneakerStore project"
git push origin main`}</code>
          </pre>

          <h3 className="text-xl font-bold mb-3">Step 2: Deploy Backend</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            <li>Go to render.com and create new Web Service</li>
            <li>Connect your GitHub repository</li>
            <li>Set Start Command: <code className="bg-gray-100 px-2">npm start</code></li>
            <li>Add environment variables:
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>DATABASE_URL: your_postgresql_url</li>
                <li>NODE_ENV: production</li>
              </ul>
            </li>
            <li>Deploy</li>
          </ol>

          <h3 className="text-xl font-bold mb-3">Step 3: Deploy Frontend</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            <li>Create new Static Site on Render</li>
            <li>Connect GitHub repository</li>
            <li>Set Build Command: <code className="bg-gray-100 px-2">npm run build</code></li>
            <li>Set Publish Directory: <code className="bg-gray-100 px-2">dist</code></li>
            <li>Deploy</li>
          </ol>

          <h3 className="text-xl font-bold mb-3">Step 4: Setup Database</h3>
          <p className="text-gray-700 mb-4">
            Use Render PostgreSQL or any managed PostgreSQL provider. 
            Update the DATABASE_URL environment variable with your connection string.
          </p>
        </section>

        {/* Project Structure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Structure</h2>
          <pre className="bg-gray-100 p-6 rounded overflow-x-auto text-sm">
            <code>{`sneaker-store/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── products.js
│   │   │   ├── cart.js
│   │   │   └── orders.js
│   │   ├── controllers/
│   │   │   ├── productsController.js
│   │   │   ├── cartController.js
│   │   │   └── ordersController.js
│   │   ├── db/
│   │   │   └── database.js
│   │   └── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── db/
│   └── init.sql
├── docker-compose.yml
└── README.md`}</code>
          </pre>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Features Implemented</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Product catalog with 10 Nike-style sneaker samples</li>
            <li>✓ Advanced filtering by category and price range</li>
            <li>✓ Product search functionality</li>
            <li>✓ Shopping cart with session-based tracking</li>
            <li>✓ Product detail pages with quantity selection</li>
            <li>✓ Complete checkout flow</li>
            <li>✓ Order management and tracking</li>
            <li>✓ Responsive mobile-first design</li>
            <li>✓ RESTful API with proper error handling</li>
            <li>✓ Database seeding with 10 sample products</li>
            <li>✓ Docker containerization</li>
            <li>✓ Nginx reverse proxy configuration</li>
            <li>✓ pgAdmin database management UI</li>
            <li>✓ Production-ready code with comments</li>
            <li>✓ Comprehensive documentation</li>
          </ul>
        </section>

        {/* Environment Variables */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Environment Variables</h2>
          
          <h3 className="text-xl font-bold mb-3">Backend .env</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`DATABASE_URL=postgresql://sneaker:sneaker123@postgres:5432/sneaker_store
NODE_ENV=production
PORT=3000`}</code>
          </pre>

          <h3 className="text-xl font-bold mb-3">Docker Compose Defaults</h3>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-sm">
            <code>{`Postgres User: sneaker
Postgres Password: sneaker123
Postgres DB: sneaker_store
pgAdmin Email: admin@sneaker.com
pgAdmin Password: admin123`}</code>
          </pre>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Support & Questions</h2>
          <p className="text-gray-700 mb-4">
            This project is fully documented and ready to use. 
            All files are included, and the setup is straightforward.
          </p>
          <p className="text-gray-700">
            For issues or questions, refer to the project README.md or 
            open an issue on your GitHub repository.
          </p>
        </section>
      </div>
    </main>
  )
}
