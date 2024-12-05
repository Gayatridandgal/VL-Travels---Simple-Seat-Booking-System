# **VL Travels - Simple Travel Booking System**

## **Introduction**
VL Travels is a basic web-based seat booking system designed for a travel agency. This project demonstrates a functional implementation of a seat booking service using **Node.js**, **Express**, and a **MySQL** database. It allows users to book seats and calculates the total price dynamically. The project focuses on simplicity, functionality, and clarity.



## **Features**
- Simple and intuitive user interface.
- Customer booking form to input details like name, contact, and number of seats.
- Dynamic pricing calculation for the total booking amount.
- Data persistence with MySQL for storing booking details.
- Responsive design for easy access on various devices.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS
- **Middleware**: body-parser
- **File Structure**: Organized with separate files for HTML, CSS, and server logic.



## **Project Structure**
```
VL-Travels/
│
├── public/
│   ├── index.html        # Home Page
│   ├── book.html         # Booking Form Page
│   ├── style.css         # Stylesheet
│   └── download.jpg      # Placeholder image
│
├── index.js              # Main server file
├── package.json          # Project dependencies and metadata
├── README.md             # Project documentation
```

---

## **Getting Started**

Follow these steps to set up and run the project on your local machine.

### **1. Prerequisites**
- Install **Node.js** (version 16+ recommended).
- Install **MySQL** and set up the database server.

### **2. Clone the Repository**
```bash
git clone https://github.com/Gayatridandgal/vl-travels.git
cd vl-travels
```

### **3. Install Dependencies**
Run the following command to install the required packages:
```bash
npm install
```

### **4. Set Up the Database**
- Open your MySQL client and run the following SQL commands to create the database and table:
```sql
CREATE DATABASE travel;

USE travel;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    custname VARCHAR(255),
    contact VARCHAR(15),
    seats INT,
    totalPrice DECIMAL(10, 2)
);
```

### **5. Update Database Configuration**
Ensure the database credentials in `index.js` match your MySQL configuration:
```javascript
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "your-username",
    password: "your-password",
    database: "travel"
});
```

### **6. Run the Application**
Start the server by running:
```bash
node index.js
```
The server will start on `http://localhost:9000`.

---

## **How to Use**
1. Open the browser and navigate to [http://localhost:9000/home](http://localhost:9000/home).
2. Explore the homepage to learn about VL Travels.
3. Click on "Book Now" to open the booking form.
4. Enter your details (name, contact, number of seats) and submit the form.
5. On successful submission, the total price is displayed, and the booking details are saved to the database.

---


## **Contact**
For queries or support, reach out to:
- Email: gayatridandgal30@gmail.com


Happy coding! 🚀

---
