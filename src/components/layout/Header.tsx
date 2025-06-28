import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Stethoscope, User, LogOut, Calendar, Settings } from 'lucide-react';
import ProfileModal from '../profile/ProfileModal';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Book-a-Doctor</h1>
                <p className="text-xs text-gray-500">Professional Medical Care</p>
              </div>
            </div>
            
            {user && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {user.role === 'doctor' ? (
                      <Stethoscope className="h-4 w-4 text-blue-600" />
                    ) : (
                      <User className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900 font-medium">{user.name}</p>
                    <p className="text-gray-500 capitalize">{user.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Profile"
                  >
                    <Settings className="h-4 w-4" />
                  </button>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <ProfileModal 
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  );
};

export default Header;