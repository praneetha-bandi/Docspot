import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    experience: '12 years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    price: 150,
    description: 'Specialist in heart conditions and cardiovascular diseases with extensive experience in cardiac surgery.'
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    specialization: 'Neurologist',
    experience: '15 years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    price: 180,
    description: 'Expert in treating disorders of the nervous system, including brain and spinal cord conditions.'
  },
  {
    id: '4',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Dermatologist',
    experience: '8 years',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    price: 120,
    description: 'Specializes in skin, hair, and nail conditions with a focus on both medical and cosmetic dermatology.'
  },
  {
    id: '5',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedic Surgeon',
    experience: '18 years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6627613/pexels-photo-6627613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    price: 200,
    description: 'Leading orthopedic surgeon specializing in joint replacement and sports medicine.'
  },
  {
    id: '6',
    name: 'Dr. Lisa Thompson',
    specialization: 'Pediatrician',
    experience: '10 years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    price: 100,
    description: 'Dedicated pediatrician providing comprehensive healthcare for children from infancy to adolescence.'
  },
  {
    id: '7',
    name: 'Dr. Robert Kim',
    specialization: 'Gastroenterologist',
    experience: '14 years',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/6749818/pexels-photo-6749818.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
    price: 160,
    description: 'Expert in digestive system disorders and gastrointestinal health with advanced endoscopic procedures.'
  },
  {
    id: '8',
    name: 'Dr. Amanda Davis',
    specialization: 'Gynecologist',
    experience: '11 years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    price: 140,
    description: 'Women\'s health specialist providing comprehensive gynecological care and family planning services.'
  },
  {
    id: '9',
    name: 'Dr. David Martinez',
    specialization: 'Psychiatrist',
    experience: '16 years',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    price: 170,
    description: 'Mental health specialist with expertise in treating anxiety, depression, and other psychiatric conditions.'
  }
];

export const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];