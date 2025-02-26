# DoctorAppointment

# DoctorAppointment-Application
Doctor Appointment booking application
# 🏥 Narayana Hospital - Doctor Appointment Booking Web App

Narayana Hospital is a doctor appointment booking web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables patients to browse doctors by specialization, book appointments online, make payments using UPI QR Code, and download appointment confirmation slips.

## 🚀 Features

### ✅ User Authentication
- Secure login and registration for patients. I have used firebase for authenticationand  data will be stored at firebase database.
  
### ✅ Doctor Listing & Details
- Browse doctors by specialization or domain of specialist.This is done by using filter method of Reactjs.

### ✅ Appointment Booking
- Select a doctor, date, and time for  booking appointments then on clicking on click here link it will redirect user to payment page.

### ✅ Payment Integration
- Users can pay fees using UPI via QR code.

### ✅ Downloadable Appointment Slip
- Get a confirmation slip after payment.


## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Firebase 

### Payment Handling
- UPI QR Code

### State Management
- React Context API
- 
Install Dependencies (Frontend & Backend)
# Navigate to frontend  
cd Frontened
npm install  

# Navigate to backend  
cd ../Backened  
npm install  

#Set Up Environment Variables

Create a .env file in the backend directory and add the following configuration:
PORT=8000

MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/db1

FIREBASE_API_KEY=your-firebase-api-key

FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain

FIREBASE_PROJECT_ID=your-firebase-project-id

FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket

FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id

FIREBASE_APP_ID=your-firebase-app-id

# Start backend  
cd Backened  
nodemon server.js 

# Start frontend  
cd Frontened 
npm run dev 


###🔗 Live Demo 

Visit the Live Website   https://appappointment-75586.web.app

##💡 Future Enhancements

🔹 Admin Dashboard: Manage doctors and patient records.

🔹 SMS/Email Reminders: Notify users about upcoming appointments.

🔹 AI-Based Doctor Recommendations: Suggest specialists based on symptoms.

🔹 Online Prescription Upload: Allow patients to upload prescriptions.


## contact -  nikhilverma97988@gmail.com
