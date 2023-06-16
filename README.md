# 🌲🦉 Wanky Wombat: A Wildlife Encounter Reporting Platform 

Welcome to Wanky Wombat! This project is a simple web application for reporting wildlife encounters written in React.

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/username/wanky-wombat.git
   ```

2. **Environment Variables Setup**

   You need to create a `.env` file in the root of your project and fill it with your firebase and email configurations. Here's a template of what it should look like:

   ``` plaintext
   REACT_APP_API_KEY=your_firebase_api_key
   REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_PROJECT_ID=your_firebase_project_id
   REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_APP_ID=your_firebase_app_id
   REACT_APP_MEASUREMENT_ID=your_firebase_measurement_id
   REACT_APP_EMAIL=your_email
   REACT_APP_EMAILJS_USER_ID=your_emailjs_user_id
   ```

   Replace each `your_variable` with your actual information.

3. **Install Dependencies**
   
   ```bash
   npm install
   ```

4. **Start the Application**
   
   ```bash
   npm start
   ```

The server should now be running at [http://localhost:3000](http://localhost:3000).

## 🔥 Features and Status

The application allows the user to report wildlife encounters with the following features:

- User reports of wildlife encounters, including details such as the species, location, and a description of the encounter.
- Location input through manual entry or GPS functionality.
- Upload a picture of the encountered wildlife.
- Email notifications sent to rangers with the reported information.

Enjoy exploring Wanky Wombat! 🎉🌍
