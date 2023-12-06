# React Firebase Chat App

Welcome to the React Firebase Chat App! This application allows users to engage in real-time chat using React and Firebase.

## Features

- **Real-time Messaging**: Experience seamless real-time messaging with other users.
- **Authentication**: Securely authenticate users with Firebase Authentication.
- **Firestore Database**: Utilize Firebase Firestore to store and retrieve chat messages.
- **Responsive Design**: The app is designed to work well on various screen sizes and devices.

## Getting Started

Follow these steps to get the app up and running on your local machine:

1. Clone the repository: `git clone https://github.com/shaanjijoe2/react-firebase-chat-app.git`
2. Install dependencies: `npm install`
3. Set up Firebase:
   - Create a new project on the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your project and obtain the configuration.
   - Replace the Firebase config in `src/firebase/firebase.js` with your own configuration.
4. Run the app: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Firebase Configuration

In order to use Firebase services, you need to set up a Firebase project and update the configuration in `src/firebase/firebase.js`. Follow the [Firebase documentation](https://firebase.google.com/docs/web/setup) for detailed instructions.

Edit firebase.js file with your own api keys
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
