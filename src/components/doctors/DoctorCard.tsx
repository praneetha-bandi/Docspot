import React from 'react';
import { Doctor } from '../../types';
import { Star, Calendar, DollarSign, Clock } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 group">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {doctor.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm mb-1">
              {doctor.specialization}
            </p>
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{doctor.rating}</span>
              <span className="text-xs text-gray-400">• {doctor.experience} experience</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {doctor.description}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>Available: {doctor.availability.join(', ')}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
            <span>Consultation Fee: ${doctor.price}</span>
          </div>
        </div>

        <button
          onClick={() => onBookAppointment(doctor)}
          className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-medium group-hover:bg-blue-700"
        >
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Book Appointment</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;