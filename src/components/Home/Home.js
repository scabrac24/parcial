// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserData, getWorkouts } from '../../services/mockData';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import WorkoutModal from '../WorkoutModal/WorkoutModal';
import './Home.css';

function Home() {
  const { t, i18n } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Cargar datos del usuario
    const user = getUserData();
    setUserData(user);
    
    // Cargar entrenamientos
    const allWorkouts = getWorkouts();
    setWorkouts(allWorkouts);
  }, []);

  const handleCardClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseModal = () => {
    setSelectedWorkout(null);
  };

  const changeLanguage = () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  // Agrupar entrenamientos por tipo
  const runningWorkouts = workouts.filter(w => w.type === 'running');
  const swimmingWorkouts = workouts.filter(w => w.type === 'swimming');
  const cyclingWorkouts = workouts.filter(w => w.type === 'cycling');

  return (
    <div className="home-container">
      <div className="language-switcher">
        <button onClick={changeLanguage}>
          {currentLanguage === 'es' ? 'English' : 'Español'}
        </button>
      </div>
      
      <div className="user-profile">
        <div className="profile-image-container">
          <img src={userData.profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <h2>{t('home.welcome')}, {userData.name}</h2>
          <div className="best-times">
            <h3>{t('home.bestTimes')}</h3>
            <div className="time-item">
              <span>{t('home.running')}:</span>
              <span>{userData.bestTimes.running}</span>
            </div>
            <div className="time-item">
              <span>{t('home.swimming')}:</span>
              <span>{userData.bestTimes.swimming}</span>
            </div>
            <div className="time-item">
              <span>{t('home.cycling')}:</span>
              <span>{userData.bestTimes.cycling}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="workouts-container">
        <div className="sport-section">
          <h2>{t('home.running')}</h2>
          <div className="cards-container">
            {runningWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                workout={workout}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
        
        <div className="sport-section">
          <h2>{t('home.swimming')}</h2>
          <div className="cards-container">
            {swimmingWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                workout={workout}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
        
        <div className="sport-section">
          <h2>{t('home.cycling')}</h2>
          <div className="cards-container">
            {cyclingWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                workout={workout}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedWorkout && (
        <WorkoutModal 
          workout={selectedWorkout}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Home;