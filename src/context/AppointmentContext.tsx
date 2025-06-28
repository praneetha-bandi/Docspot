import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Appointment, AppointmentContextType } from '../types';

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const bookAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const updateAppointmentStatus = (appointmentId: string, status: 'scheduled' | 'completed' | 'cancelled') => {
    setAppointments(prev => 
      prev.map(appointment => 
        appointment.id === appointmentId 
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  const getAppointmentsByDoctor = (doctorId: string) => {
    return appointments.filter(appointment => appointment.doctorId === doctorId);
  };

  const getAppointmentsByPatient = (patientId: string) => {
    return appointments.filter(appointment => appointment.patientId === patientId);
  };

  return (
    <AppointmentContext.Provider value={{ 
      appointments, 
      bookAppointment, 
      updateAppointmentStatus,
      getAppointmentsByDoctor,
      getAppointmentsByPatient
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};