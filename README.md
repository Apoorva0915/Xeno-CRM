# Xeno CRM Platform

Xeno CRM is a comprehensive Customer Relationship Management platform designed to streamline customer interactions, manage sales pipelines, and enhance business analytics. Built using the MERN stack with Vite and TailwindCSS, this CRM platform offers modular components, real-time updates.

## Features
- **User Management:** Create, update, and manage user profiles securely.
- **Contact Management:** Efficiently manage contacts and business relations.
- **Sales Pipeline:** Track sales progress and analyze key performance metrics.
- **AI-powered Suggestions:** Utilize AI models for personalized recommendations and data-driven insights.

## Tech Stack
- **Frontend:** React (Vite), TailwindCSS, TypeScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Message Queue (Optional):** Kafka, RabbitMQ, Redis Streams
- **AI Models:** Integrated with Google Gemini for powerful suggestions and insights

---

## Local Setup Instructions

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Apoorva0915/Xeno-CRM.git
   cd xeno-crm
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the root of the `server` folder and add:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_uri>
   GOOGLE_CLIENT_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   SESSION_SECRET=<your_session_secret>
   GOOGLE_GEN_AI_API_KEY=<your_google_gen_ai_api_key>
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER=<your_email_user>
   EMAIL_PASS=<your_email_password>
   ```

4. **Run the application:**  
   In the server folder:
   ```bash
   npm run dev
   ```
   In the client folder:
   ```bash
   npm run dev
   ```
   Access the application at `http://localhost:5173`

---

## Architecture Diagram

Below is the architecture diagram illustrating the flow of data between the client, server, database, and optional message queue:

```
[Client (React)] <--> [Server (Express)] <--> [Database (MongoDB)]

```

---

## Summary of AI Tools and Other Tech Used

- **Google Gemini:** Integrated for enhanced AI-driven suggestions and real-time analysis.
- **Kafka/RabbitMQ/Redis Streams:** Used for real-time updates and event-driven data synchronization.
- **Vite:** Lightning-fast development server for React.
- **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- **MongoDB:** NoSQL database for scalable data storage.

---

## Known Limitations or Assumptions

1. **No Advanced Analytics:** Current version lacks deep analytics and forecasting.
2. **Single Database Instance:** Scaling might be required for high-traffic scenarios.
3. **Limited AI Model Customization:** Uses predefined models with minimal customization options.
4. **Optional Message Queue:** Kafka/RabbitMQ/Redis Streams are optional and need separate configuration.

---

Feel free to contribute, raise issues, or suggest improvements!
