import { useState, useEffect } from 'react';
import { getPrescriptions } from '../services/prescriptionService';

export const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const data = await getPrescriptions();
        setPrescriptions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  const addPrescription = (newPrescription) => {
    setPrescriptions(prev => [...prev, newPrescription]);
  };

  return {
    prescriptions,
    loading,
    error,
    addPrescription
  };
};