# 🖼️ Random Image API

This is a simple RESTful API built with Node.js and Express.js that redirects users to a random image every time they hit the endpoint. Perfect for testing frontends or practicing API development!

## 🚀 Features

- Simple Express.js API
- Redirects to a random image
- Easily testable with Postman or browser
- Deployed and accessible via public link

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/random-image-api.git
   cd random-image-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

   The server will run on: `http://localhost:6060`  

---

## 🔗 API Usage

### 📷 `GET /api/image/random`

Redirects to a random image using [Picsum Photos](https://picsum.photos/).

**What happens:**  
- You visit `/api/image/random`
- You are automatically redirected to a random image like:
  ```
  https://picsum.photos/200/300?random=12345
  ```

### 👉 Try it Live:

[(https://randomimage-api-7bym.onrender.com/api/image/random)]([https://randomimage-api-7bym.onrender.com/api/image/random])

Each time you refresh, you'll see a different image!

---

## 🧪 Testing the API

You can test the endpoint using:

- **Browser** – just visit the endpoint.
- **Postman** – make a `GET` request to:
  ```
  http://localhost:6060/api/image/random
  ```
  and it will show the image in Postman preview tab.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Picsum Photos API](https://picsum.photos/) for random images

---

## 🌍 Deployment

This project is deployed on [Render](https://render.com/).  
Every push to the `main` branch auto-deploys the latest version.

---

## 📝 License

ISC License.  
Feel free to fork, remix, and build upon it!

---

## ✨ Author

Made with ❤️ by [Priya Maity](https://github.com/PriyaMaity)
