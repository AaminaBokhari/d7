import api from './api';

export const getActivities = async () => {
  try {
    // In a real app, this would be an API call
    // For now, return mock data
    return [
      {
        id: 1,
        type: 'appointment',
        patient: 'John Doe',
        action: 'completed checkup',
        time: '2 hours ago',
        icon: 'FaUserMd',
        color: 'text-blue-500',
        bgColor: 'bg-blue-100'
      },
      // Add more mock activities here
    ];
  } catch (error) {
    throw new Error('Failed to fetch activities');
  }
};