# 🖼️ Random Image API - Node.js + Express

This project is a simple RESTful API built using Node.js and Express.js. It redirects users to a randomly generated image using the [Picsum Photos](https://picsum.photos) service.

## 📌 Objective

To build a backend API that handles HTTP requests and returns a random image on each call, helping you learn:
- Basic Node.js & Express server setup
- Defining GET routes
- Handling HTTP redirects
- Testing with Postman
- Deployment using Render

---

## 🛠️ How to Set It Up Locally

1. **Clone the repo**
```bash
git clone https://github.com/your-username/random-image-api.git
cd random-image-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the server**
```bash
node index.js
```

Server will run on `http://localhost:6060`.

---

## 📂 API Endpoints

### `GET /`

Returns a welcome message.

**Example:**
```bash
http://localhost:6060/
```

Response:
```
Welcome to the Random Image API!
```

---

### `GET /api/image/random`

Redirects the client to a random image of size `400x400`.

**Example:**
```bash
http://localhost:6060/api/image/random
```

💡 **Note:** It does not return a JSON response. It performs an HTTP 302 redirect to a real image URL. That’s why in Postman or browser, you see the image directly.

---

## 🔗 Live Demo

You can try the deployed version here:

👉 [https://randomimage-api-7bym.onrender.com/api/image/random](https://randomimage-api-7bym.onrender.com/api/image/random)

Every time you refresh the link, you’ll get a different image!

---

## 🧪 How to Test

### Using Postman

- Method: **GET**
- URL: `https://randomimage-api-7bym.onrender.com/api/image/random`
- You will be **redirected** to a new image every time.

No API key or body is required.

---

## 📁 Project Structure

```
random-image-api/
│
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

---

## 💡 Future Improvements (Optional Ideas)

- Add support for image dimensions via query params (e.g. `/api/image/random?width=300&height=300`)
- Return JSON containing the image URL instead of redirecting (useful for frontend integration)
- Rate limiting to prevent API abuse

---

## ✅ Requirements Checklist

- [x] Node.js & Express setup
- [x] Route for `/api/image/random`
- [x] Postman tested
- [x] Deployed using Render
- [x] Documented in `README.md`

---

## 📄 License (ISC)

This project is for learning purposes only.
```
