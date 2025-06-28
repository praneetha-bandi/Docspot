export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'doctor';
  specialization?: string;
  experience?: string;
  description?: string;
  price?: number;
  availability?: string[];
  rating?: number;
  image?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: string;
  availability: string[];
  price: number;
  description: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  specialization: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'patient' | 'doctor';
  specialization?: string;
  experience?: string;
  description?: string;
  price?: number;
  availability?: string[];
}

export interface AppointmentContextType {
  appointments: Appointment[];
  bookAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  updateAppointmentStatus: (appointmentId: string, status: 'scheduled' | 'completed' | 'cancelled') => void;
  getAppointmentsByDoctor: (doctorId: string) => Appointment[];
  getAppointmentsByPatient: (patientId: string) => Appointment[];
}