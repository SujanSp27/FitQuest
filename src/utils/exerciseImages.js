// Reliable exercise image URLs from various sources

// Create inline SVG images that will definitely work
const createExerciseImage = (exerciseName, bgColor = '#0A1929', textColor = '#00C2FF') => {
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <circle cx="150" cy="70" r="30" fill="${textColor}" opacity="0.3"/>
    <text x="150" y="130" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="${textColor}">${exerciseName}</text>
    <text x="150" y="150" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="${textColor}" opacity="0.8">Exercise Demo</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const exerciseImageUrls = {
  // Inline SVG images that will definitely display
  pushup: createExerciseImage('Push-up', '#0A1929', '#00C2FF'),
  squat: createExerciseImage('Squat', '#1a2332', '#14F1C5'),
  plank: createExerciseImage('Plank', '#2d3748', '#00A3B8'),
  burpee: createExerciseImage('Burpee', '#4a5568', '#E2E8F0'),
  jumpingJacks: createExerciseImage('Jumping Jacks', '#5a67d8', '#ffffff'),
  lunges: createExerciseImage('Lunges', '#667eea', '#ffffff'),
  mountainClimbers: createExerciseImage('Mountain Climbers', '#7c3aed', '#ffffff'),
  pullup: createExerciseImage('Pull-up', '#8b5cf6', '#ffffff'),
  dips: createExerciseImage('Dips', '#a855f7', '#ffffff'),
  deadlift: createExerciseImage('Deadlift', '#c084fc', '#000000'),
  
  // Additional exercises
  situps: createExerciseImage('Sit-ups', '#d946ef', '#ffffff'),
  bicepCurls: createExerciseImage('Bicep Curls', '#ec4899', '#ffffff'),
  tricepExtension: createExerciseImage('Tricep Extension', '#f472b6', '#000000'),
  shoulderPress: createExerciseImage('Shoulder Press', '#fb7185', '#ffffff'),
  benchPress: createExerciseImage('Bench Press', '#fda4af', '#000000'),
  rows: createExerciseImage('Rows', '#fecaca', '#000000'),
  crunches: createExerciseImage('Crunches', '#fed7d7', '#000000'),
  
  // Alternative sources
  pushupAlt: createExerciseImage('Push-up Alt', '#0A1929', '#00C2FF'),
  squatAlt: createExerciseImage('Squat Alt', '#1a2332', '#14F1C5'),
  plankAlt: createExerciseImage('Plank Alt', '#2d3748', '#00A3B8'),
  
  // Multiple guaranteed working placeholders
  placeholder1: createExerciseImage('Exercise 1', '#0A1929', '#00C2FF'),
  placeholder2: createExerciseImage('Exercise 2', '#1a2332', '#14F1C5'),
  placeholder3: createExerciseImage('Exercise 3', '#2d3748', '#00A3B8'),
  placeholder4: createExerciseImage('Exercise 4', '#4a5568', '#E2E8F0'),
  placeholder5: createExerciseImage('Exercise 5', '#5a67d8', '#ffffff'),
  
  // Default fallback
  default: createExerciseImage('Exercise Demo', '#0A1929', '#00C2FF')
};

// Get image URL based on exercise name - comprehensive matching
export const getExerciseImageUrl = (exerciseName) => {
  const name = exerciseName?.toLowerCase() || '';
  
  // Comprehensive exercise matching
  if (name.includes('push')) return exerciseImageUrls.pushup;
  if (name.includes('squat')) return exerciseImageUrls.squat;
  if (name.includes('plank')) return exerciseImageUrls.plank;
  if (name.includes('burpee')) return exerciseImageUrls.burpee;
  if (name.includes('jump')) return exerciseImageUrls.jumpingJacks;
  if (name.includes('lunge')) return exerciseImageUrls.lunges;
  if (name.includes('mountain')) return exerciseImageUrls.mountainClimbers;
  if (name.includes('pull')) return exerciseImageUrls.pullup;
  if (name.includes('dip')) return exerciseImageUrls.dips;
  if (name.includes('deadlift')) return exerciseImageUrls.deadlift;
  
  // Additional exercise types
  if (name.includes('sit') && name.includes('up')) return exerciseImageUrls.situps;
  if (name.includes('crunch')) return exerciseImageUrls.crunches;
  if (name.includes('bicep') || name.includes('curl')) return exerciseImageUrls.bicepCurls;
  if (name.includes('tricep')) return exerciseImageUrls.tricepExtension;
  if (name.includes('shoulder') && name.includes('press')) return exerciseImageUrls.shoulderPress;
  if (name.includes('bench') && name.includes('press')) return exerciseImageUrls.benchPress;
  if (name.includes('row')) return exerciseImageUrls.rows;
  
  // Body part based matching
  if (name.includes('chest')) return exerciseImageUrls.pushup;
  if (name.includes('back')) return exerciseImageUrls.pullup;
  if (name.includes('leg') || name.includes('thigh')) return exerciseImageUrls.squat;
  if (name.includes('arm')) return exerciseImageUrls.bicepCurls;
  if (name.includes('shoulder')) return exerciseImageUrls.shoulderPress;
  if (name.includes('abs') || name.includes('core')) return exerciseImageUrls.plank;
  if (name.includes('cardio')) return exerciseImageUrls.jumpingJacks;
  
  // Equipment based matching
  if (name.includes('barbell')) return exerciseImageUrls.deadlift;
  if (name.includes('dumbbell')) return exerciseImageUrls.bicepCurls;
  if (name.includes('cable')) return exerciseImageUrls.rows;
  if (name.includes('bodyweight') || name.includes('body weight')) return exerciseImageUrls.pushup;
  
  // Return a rotating placeholder for unknown exercises
  const placeholders = [
    exerciseImageUrls.placeholder1,
    exerciseImageUrls.placeholder2,
    exerciseImageUrls.placeholder3,
    exerciseImageUrls.placeholder4,
    exerciseImageUrls.placeholder5
  ];
  
  // Use exercise name hash to consistently assign same placeholder to same exercise
  const hash = name.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return placeholders[Math.abs(hash) % placeholders.length];
};

// Get multiple fallback URLs for an exercise - comprehensive fallback system
export const getExerciseFallbackUrls = (exercise) => {
  const exerciseName = exercise?.name || '';
  const bodyPart = exercise?.bodyParts?.[0] || exercise?.bodyPart || '';
  
  // Create comprehensive fallback list
  const fallbacks = [
    exercise?.gifUrl, // Try original URL first
    getExerciseImageUrl(exerciseName), // Get specific exercise image
    
    // Try alternative sources based on exercise type
    exerciseImageUrls.pushupAlt,
    exerciseImageUrls.squatAlt,
    exerciseImageUrls.plankAlt,
    
    // Generic exercise images as fallbacks
    exerciseImageUrls.pushup,
    exerciseImageUrls.squat,
    exerciseImageUrls.plank,
    exerciseImageUrls.jumpingJacks,
    
    // Multiple placeholder options
    exerciseImageUrls.placeholder1,
    exerciseImageUrls.placeholder2,
    exerciseImageUrls.placeholder3,
    exerciseImageUrls.placeholder4,
    exerciseImageUrls.placeholder5,
    
    // Custom placeholders with exercise info
    `https://via.placeholder.com/300x200/0A1929/00C2FF?text=${encodeURIComponent(exerciseName || 'Exercise')}`,
    `https://via.placeholder.com/300x200/1a2332/14F1C5?text=${encodeURIComponent(bodyPart || 'Workout')}`,
    `https://dummyimage.com/300x200/2d3748/00A3B8&text=${encodeURIComponent(exerciseName || 'Fitness')}`,
    
    // Final guaranteed fallback
    exerciseImageUrls.default
  ].filter(Boolean);
  
  // Remove duplicates while preserving order
  return [...new Set(fallbacks)];
};