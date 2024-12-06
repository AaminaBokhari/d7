import React from 'react';
import { Card } from '../components/common/Card';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useActivities } from '../hooks/useActivities';
import { FaUserMd, FaPrescription, FaFlask } from 'react-icons/fa';

function Activities() {
  const { activities, loading, error } = useActivities();

  if (loading) return <LoadingSpinner size="lg" />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Activity History</h1>
      <Card>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`${activity.bgColor} p-3 rounded-lg`}>
                <activity.icon className={`h-5 w-5 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">{activity.patient}</p>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{activity.action}</p>
                <p className="text-gray-500 text-sm mt-2">Type: {activity.type}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Activities;