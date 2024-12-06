import { useState, useEffect } from 'react';
import { getAppointments } from '../services/appointmentService';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const addAppointment = (newAppointment) => {
    setAppointments(prev => [...prev, newAppointment]);
  };

  const updateAppointment = (id, updatedAppointment) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? updatedAppointment : apt)
    );
  };

  const deleteAppointment = (id) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  return {
    appointments,
    loading,
    error,
    addAppointment,
    updateAppointment,
    deleteAppointment
  };
};