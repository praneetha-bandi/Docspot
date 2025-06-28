import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppointmentProvider } from './context/AppointmentContext';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DoctorList from './components/doctors/DoctorList';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import PatientDashboard from './components/patient/PatientDashboard';
import { Calendar, Users } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [currentView, setCurrentView] = useState<'doctors' | 'appointments'>('doctors');

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  if (!user) {
    return isLoginForm ? 
      <Login onToggleForm={toggleForm} /> : 
      <Register onToggleForm={toggleForm} />;
  }

  const renderContent = () => {
    if (user.role === 'doctor') {
      return currentView === 'appointments' ? <DoctorDashboard /> : <DoctorList />;
    } else {
      return currentView === 'appointments' ? <PatientDashboard /> : <DoctorList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentView('doctors')}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentView === 'doctors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>{user.role === 'doctor' ? 'All Doctors' : 'Find Doctors'}</span>
            </button>
            <button
              onClick={() => setCurrentView('appointments')}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentView === 'appointments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>{user.role === 'doctor' ? 'My Patients' : 'My Appointments'}</span>
            </button>
          </div>
        </div>
      </div>

      <main>
        {renderContent()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <AppContent />
      </AppointmentProvider>
    </AuthProvider>
  );
}

export default App;