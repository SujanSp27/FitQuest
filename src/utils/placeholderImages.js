// Reliable placeholder images using external services

export const createPlaceholderImage = (exerciseName) => {
  // Use a reliable placeholder service that always works
  const cleanName = encodeURIComponent(exerciseName || 'Exercise');
  
  // Multiple fallback placeholder services
  const placeholderUrls = [
    `https://via.placeholder.com/300x200/0A1929/00C2FF?text=${cleanName}`,
    `https://dummyimage.com/300x200/0A1929/00C2FF&text=${cleanName}`,
    `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
    // Ultimate fallback - a simple data URL
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMEExOTI5Ii8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSIzMCIgZmlsbD0iIzAwQzJGRiIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+'
  ];
  
  return placeholderUrls[0]; // Return the first one, others are fallbacks
};

// Create inline SVG for body part placeholders
const createBodyPartImage = (exerciseType, bgColor = '#0A1929', textColor = '#00C2FF') => {
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <circle cx="150" cy="70" r="30" fill="${textColor}" opacity="0.3"/>
    <text x="150" y="130" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${textColor}">${exerciseType}</text>
    <text x="150" y="150" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" opacity="0.8">Exercise</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Predefined placeholder images for common body parts using inline SVG
export const bodyPartPlaceholders = {
  'chest': createBodyPartImage('Chest Exercise', '#0A1929', '#00C2FF'),
  'back': createBodyPartImage('Back Exercise', '#1a2332', '#14F1C5'),
  'upper legs': createBodyPartImage('Leg Exercise', '#2d3748', '#00A3B8'),
  'lower legs': createBodyPartImage('Calf Exercise', '#4a5568', '#E2E8F0'),
  'upper arms': createBodyPartImage('Arm Exercise', '#5a67d8', '#ffffff'),
  'lower arms': createBodyPartImage('Forearm Exercise', '#667eea', '#ffffff'),
  'shoulders': createBodyPartImage('Shoulder Exercise', '#7c3aed', '#ffffff'),
  'waist': createBodyPartImage('Core Exercise', '#8b5cf6', '#ffffff'),
  'cardio': createBodyPartImage('Cardio Exercise', '#a855f7', '#ffffff'),
  'neck': createBodyPartImage('Neck Exercise', '#c084fc', '#000000'),
  'general': createBodyPartImage('Exercise', '#0A1929', '#00C2FF')
};