// src/services/mockData.js
export const getUserData = () => {
  return {
    name: "Camilo Rodríguez",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    bestTimes: {
      running: "00:42:15",
      swimming: "00:31:08",
      cycling: "01:22:47"
    }
  };
};

const swimImages = [
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800",
  "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800"
  
];

const cyclingImages = [
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800"
  
];

const runningImages = [
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800"
  
  
];

const getImageForSport = (sport, index) => {
  switch(sport) {
    case "swimming":
      return swimImages[index];
    case "cycling":
      return cyclingImages[index];
    case "running":
      return runningImages[index];
    default:
      return `https://source.unsplash.com/300x200/?${sport}`;
  }
};

const cities = ["Bogotá", "Medellín", "Cali", "Cartagena", "Barranquilla", "Santa Marta"];

export const getWorkouts = () => {
  const workouts = [];
  const sports = ["running", "swimming", "cycling"];
  
  sports.forEach(sport => {
    for (let i = 0; i < 10; i++) {
      const distance = sport === "running" 
        ? (Math.random() * 10 + 1).toFixed(2) + " km"
        : sport === "swimming" 
          ? (Math.random() * 2 + 0.5).toFixed(2) + " km" 
          : (Math.random() * 40 + 10).toFixed(2) + " km";
      
      const minutes = Math.floor(Math.random() * 120) + 20;
      const seconds = Math.floor(Math.random() * 60);
      const duration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      const cityIndex = Math.floor(Math.random() * cities.length);
      
      workouts.push({
        id: `${sport}-${i}`,
        type: sport,
        distance: distance,
        duration: duration,
        city: cities[cityIndex],
        image: getImageForSport(sport, i)
      });
    }
  });
  
  return workouts;
};