## <a name="introduction">Introduction</a>

An e-commerce website that delivers a seamless shopping experience with secure user authentication and integrated payment options. The responsive design and admin panel make it ideal for efficient online management and smooth, scalable operations.

## <a name="tech-stack">Tech Stack</a>

- React.js
- Tailwindcss
- Node.js
- Express
- MongoDB

## <a name="features">Features</a>

**User Authentication**: Secure login and registration with JWT authentication, ensuring only authorized access to user accounts.

**Product Catalog**: Browse through a wide variety of products with detailed descriptions, images, and pricing.

**Search and Filters**: Easily find products using the advanced search feature and filter options based on categories, price, and more

**Shopping Cart**: Add, remove, or update items in the cart, with real-time updates and total price calculation.

**Secure Payment Integration**: Process transactions securely with integrated payment gateways, ensuring smooth and safe payments.

**Admin Panel**: Manage products, users, and orders efficiently with a user-friendly admin dashboard.

## <a name="quick-start">Quick Start</a>

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/mairfarooq21/ecommerce.git
```

**Installation**

```bash
npm install
```

**Set Up Environment Variables**
**frontend and admin**
```env
VITE_BACKEND_URL = 'http://localhost:4000'
```
**backend**
```env
MONGODB_URI =
CLOUDINARY_API_KEY =
CLOUDINARY_SECRET_KEY =
CLOUDINARY_NAME =
JWT_SECRET =
ADMIN_EMAIL =
ADMIN_PASSWORD =
STRIPE_SECRET_KEY =
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
