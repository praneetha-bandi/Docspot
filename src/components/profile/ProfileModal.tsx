import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, User, Mail, Phone, Stethoscope, Calendar, DollarSign, Star } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              {user.role === 'doctor' ? (
                <Stethoscope className="h-12 w-12 text-white" />
              ) : (
                <User className="h-12 w-12 text-white" />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
            <p className="text-blue-600 font-medium capitalize">{user.role}</p>
            {user.role === 'doctor' && user.specialization && (
              <p className="text-gray-600 text-sm">{user.specialization}</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">{user.phone}</p>
              </div>
            </div>

            {user.role === 'doctor' && (
              <>
                {user.experience && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Stethoscope className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-medium text-gray-900">{user.experience}</p>
                    </div>
                  </div>
                )}

                {user.price && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Consultation Fee</p>
                      <p className="font-medium text-gray-900">${user.price}</p>
                    </div>
                  </div>
                )}

                {user.rating && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Star className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-medium text-gray-900">{user.rating}/5.0</p>
                    </div>
                  </div>
                )}

                {user.availability && user.availability.length > 0 && (
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Available Days</p>
                      <p className="font-medium text-gray-900">{user.availability.join(', ')}</p>
                    </div>
                  </div>
                )}

                {user.description && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">About</p>
                    <p className="text-gray-900">{user.description}</p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;