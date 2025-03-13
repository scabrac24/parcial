// src/components/WorkoutModal/WorkoutModal.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkoutModal.css';

function WorkoutModal({ workout, onClose }) {
  const { t } = useTranslation();
  
  if (!workout) return null;

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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t('modal.details')}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={workout.image} alt={workout.type} className="modal-image" />
          </div>
          <div className="modal-info">
            <h3>{getTypeTitle(workout.type)}</h3>
            <div className="modal-details">
              <div className="modal-detail">
                <span className="detail-label">{t('home.distance')}:</span>
                <span className="detail-value">{workout.distance}</span>
              </div>
              <div className="modal-detail">
                <span className="detail-label">{t('home.duration')}:</span>
                <span className="detail-value">{workout.duration}</span>
              </div>
              <div className="modal-detail">
                <span className="detail-label">{t('home.location')}:</span>
                <span className="detail-value">{workout.city}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>{t('modal.close')}</button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutModal;