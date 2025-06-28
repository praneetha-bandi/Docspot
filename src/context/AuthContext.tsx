import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType, RegisterData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    password: 'password123',
    role: 'patient'
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 234-5678',
    password: 'doctor123',
    role: 'doctor',
    specialization: 'Cardiologist',
    experience: '12 years',
    description: 'Specialist in heart conditions and cardiovascular diseases with extensive experience in cardiac surgery.',
    price: 150,
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@hospital.com',
    phone: '+1 (555) 345-6789',
    password: 'doctor123',
    role: 'doctor',
    specialization: 'Neurologist',
    experience: '15 years',
    description: 'Expert in treating disorders of the nervous system, including brain and spinal cord conditions.',
    price: 180,
    availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if user already exists
    if (mockUsers.find(u => u.email === userData.email)) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      password: userData.password,
      image: userData.role === 'doctor' ? 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' : undefined,
      rating: userData.role === 'doctor' ? 5.0 : undefined
    };

    mockUsers.push(newUser);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};