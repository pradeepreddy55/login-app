# Spring Boot Login Application

A modern, responsive web application built with Spring Boot that provides user authentication functionality including user registration, login, and session management.

## 🚀 Features

- **User Registration**: New users can create accounts with username, email, and password
- **User Login**: Secure authentication system with email and password
- **Password Visibility Toggle**: Eye icon to show/hide password input
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **Session Management**: Welcome page for authenticated users
- **MySQL Database Integration**: Persistent user data storage
- **Modern UI/UX**: Clean, gradient-based design with smooth animations

## 🛠️ Technology Stack

- **Backend**: Spring Boot 4.0.1
- **Frontend**: Thymeleaf, HTML5, CSS3, JavaScript
- **Database**: MySQL 8.0
- **ORM**: Hibernate JPA
- **Build Tool**: Maven
- **Java Version**: 21

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 21** or higher
- **Maven 3.6+**
- **MySQL 8.0+**
- **Git** (for cloning the repository)

## 🗄️ Database Setup

1. **Install MySQL** and start the MySQL service

2. **Create Database**:
   ```sql
   CREATE DATABASE login_app;
   ```

3. **Update Database Configuration** (if needed):
   Edit `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/login_app
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

## 🚀 Installation & Running

### 1. Clone the Repository
```bash
git clone <repository-url>
cd login-app
```

### 2. Run the Application

#### Using Maven Wrapper (Recommended)
```bash
# On Windows
./mvnw spring-boot:run

# On Linux/Mac
./mvnw spring-boot:run
```

#### Using Maven (if installed globally)
```bash
mvn spring-boot:run
```

### 3. Access the Application
Open your web browser and navigate to:
```
http://localhost:8080
```

## 📁 Project Structure

```
login-app/
├── src/
│   ├── main/
│   │   ├── java/com/example/loginapp/
│   │   │   ├── controller/
│   │   │   │   └── UserController.java      # Handles web requests
│   │   │   ├── model/
│   │   │   │   └── User.java                # User entity
│   │   │   ├── repository/
│   │   │   │   └── UserRepository.java      # Data access layer
│   │   │   └── LoginAppApplication.java     # Main application class
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/
│   │       │   │   └── style.css            # Application styles
│   │       │   └── js/
│   │       │       └── password-toggle.js   # Password visibility toggle
│   │       ├── templates/
│   │       │   ├── login.html               # Login page
│   │       │   ├── register.html            # Registration page
│   │       │   └── welcome.html             # Welcome/dashboard page
│   │       └── application.properties       # Configuration file
│   └── test/
│       └── java/com/example/loginapp/
│           └── LoginAppApplicationTests.java
├── pom.xml                                  # Maven dependencies
└── README.md                                # This file
```

## 🎯 Application Flow

1. **Landing Page**: Users arrive at the login page (`/`)
2. **Registration**: New users can register via `/register`
3. **Authentication**: Users login with email and password
4. **Welcome Page**: Successful login redirects to welcome page with personalized greeting
5. **Logout**: Users can logout and return to login page

## 🔧 Configuration

### Database Configuration
The application uses the following default database settings:
- **Host**: localhost:3306
- **Database**: login_app
- **Username**: root
- **Password**: Pradeep@123

### Server Configuration
- **Port**: 8080
- **Context Path**: /

## 🎨 UI Features

### Modern Design Elements
- **Gradient Background**: Purple to blue gradient
- **Card-based Layout**: Clean, centered forms with shadows
- **Responsive Design**: Mobile-friendly interface
- **Interactive Elements**: Hover effects and smooth transitions
- **Password Toggle**: Eye icon to show/hide password

### Accessibility Features
- **Proper Labels**: All form inputs have associated labels
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Clear visual focus indicators

## 🔒 Security Features

- **Password Hashing**: Secure password storage (implement bcrypt for production)
- **Input Validation**: Required field validation
- **SQL Injection Protection**: JPA/Hibernate parameterized queries
- **Session Management**: Server-side session handling

## 🧪 Testing

Run the tests using:
```bash
./mvnw test
```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Login page |
| POST | `/login` | Process login |
| GET | `/register` | Registration page |
| POST | `/register` | Process registration |
| GET | `/welcome` | Welcome page (authenticated users) |

## 🚀 Deployment

### Local Development
The application runs on `http://localhost:8080` by default.

### Production Deployment
1. **Build the JAR**:
   ```bash
   ./mvnw clean package
   ```

2. **Run the JAR**:
   ```bash
   java -jar target/login-app-0.0.1-SNAPSHOT.jar
   ```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Ensure MySQL is running
   - Check database credentials in `application.properties`
   - Verify database `login_app` exists

2. **Port Already in Use**:
   - Change port in `application.properties`: `server.port=8081`
   - Or kill the process using port 8080

3. **Maven Build Issues**:
   - Ensure Java 21 is installed and configured
   - Run `./mvnw clean install` to refresh dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Pradeep Reddy**
- GitHub: [@pradeepreddy55](https://github.com/pradeepreddy55)

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- Thymeleaf for the templating engine
- MySQL for the database solution
- Bootstrap inspiration for responsive design patterns

---

**Happy Coding! 🎉**