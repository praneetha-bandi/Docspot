# Book-a-Doctor 🏥

A modern, responsive web application for booking medical appointments with healthcare professionals. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### For Patients
- **Easy Registration & Login** - Quick account setup with secure authentication
- **Doctor Discovery** - Browse and search qualified medical professionals
- **Smart Filtering** - Filter doctors by specialization, availability, and ratings
- **Appointment Booking** - Schedule appointments with preferred time slots
- **Dashboard** - View and manage all your appointments in one place
- **Profile Management** - Update personal information and preferences

### For Doctors
- **Professional Profiles** - Showcase specialization, experience, and credentials
- **Appointment Management** - View, accept, and manage patient appointments
- **Patient Information** - Access patient details and contact information
- **Schedule Control** - Set availability and manage working hours
- **Status Updates** - Mark appointments as completed or cancelled

## 🚀 Live Demo

[View Live Application](https://your-app-url.netlify.app) *(Update with your actual deployment URL)*

## 📱 Screenshots

### Patient Dashboard
![Patient Dashboard](./screenshots/patient-dashboard.png)

### Doctor Profile
![Doctor Profile](./screenshots/doctor-profile.png)

### Appointment Booking
![Appointment Booking](./screenshots/booking-modal.png)

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Code Quality:** ESLint with TypeScript support
- **Deployment:** Netlify (recommended)

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-a-doctor.git
   cd book-a-doctor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Accessibility** - Built with accessibility best practices
- **Dark Mode Ready** - Easy to extend with dark mode support

## 🔐 Demo Accounts

For testing purposes, you can use these demo accounts:

**Patient Account:**
- Email: `john@example.com`
- Password: `password123`

**Doctor Account:**
- Email: `sarah.johnson@hospital.com`
- Password: `doctor123`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── appointments/   # Appointment-related components
│   ├── doctors/        # Doctor listing and cards
│   ├── layout/         # Layout components (Header, etc.)
│   ├── patient/        # Patient dashboard
│   ├── doctor/         # Doctor dashboard
│   └── profile/        # Profile management
├── context/            # React Context providers
├── data/              # Mock data and constants
├── types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🚀 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on every push

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 🔮 Future Enhancements

- [ ] **Real-time Notifications** - Push notifications for appointment updates
- [ ] **Video Consultations** - Integrate video calling for remote consultations
- [ ] **Payment Integration** - Secure payment processing for consultations
- [ ] **Medical Records** - Patient medical history and document management
- [ ] **Multi-language Support** - Internationalization for global users
- [ ] **Advanced Search** - AI-powered doctor recommendations
- [ ] **Mobile App** - React Native mobile application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lucide React](https://lucide.dev/) - For beautiful icons
- [Vite](https://vitejs.dev/) - For fast development and building
- [Pexels](https://pexels.com/) - For stock photos used in the demo

---

⭐ Star this repository if you found it helpful!