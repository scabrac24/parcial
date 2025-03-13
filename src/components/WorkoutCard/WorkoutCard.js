// src/components/WorkoutCard/WorkoutCard.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkoutCard.css';

function WorkoutCard({ workout, onClick }) {
  const { t } = useTranslation();
  
  const getTypeTitle = (type) => {
    switch(type) {
      case 'running':
        return t('home.running');
      case 'swimming':
        return t('home.swimming');
      case 'cycling':
        return t('home.cycling');
      default:
        return type;
    }
  };

  return (
    <div className="workout-card" onClick={() => onClick(workout)}>
      <div className="workout-image-container">
        <img src={workout.image} alt={workout.type} className="workout-image" />
      </div>
      <div className="workout-info">
        <h3>{getTypeTitle(workout.type)}</h3>
        <div className="workout-details">
          <div className="workout-detail">
            <span className="detail-label">{t('home.distance')}:</span>
            <span className="detail-value">{workout.distance}</span>
          </div>
          <div className="workout-detail">
            <span className="detail-label">{t('home.duration')}:</span>
            <span className="detail-value">{workout.duration}</span>
          </div>
          <div className="workout-detail">
            <span className="detail-label">{t('home.location')}:</span>
            <span className="detail-value">{workout.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;