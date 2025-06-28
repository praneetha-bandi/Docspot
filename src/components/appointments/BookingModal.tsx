import React, { useState } from 'react';
import { Doctor } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useAppointments } from '../../context/AppointmentContext';
import { X, Calendar, Clock, User, CreditCard } from 'lucide-react';
import { timeSlots } from '../../data/doctors';

interface BookingModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ doctor, isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { bookAppointment } = useAppointments();

  if (!isOpen || !doctor) return null;

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !user) return;

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    bookAppointment({
      doctorId: doctor.id,
      doctorName: doctor.name,
      patientId: user.id,
      patientName: user.name,
      patientEmail: user.email,
      patientPhone: user.phone,
      date: selectedDate,
      time: selectedTime,
      status: 'scheduled',
      specialization: doctor.specialization
    });

    setLoading(false);
    onClose();
    
    // Show success message
    alert(`Appointment booked successfully with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-blue-600 text-sm">{doctor.specialization}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <CreditCard className="h-4 w-4 mr-1" />
                  <span>${doctor.price} consultation fee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Calendar className="inline h-4 w-4 mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Clock className="inline h-4 w-4 mr-2" />
                Select Time
              </label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm font-medium rounded-lg border transition-all ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <User className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Patient Information</p>
                  <p className="text-sm text-blue-700">{user?.name}</p>
                  <p className="text-sm text-blue-700">{user?.email}</p>
                  <p className="text-sm text-blue-700">{user?.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime || loading}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;