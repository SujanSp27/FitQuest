// Utility functions for handling exercise images

// Generate multiple possible image URLs for an exercise
export const generateImageUrls = (exercise) => {
  const exerciseId = exercise.exerciseId || exercise.id;
  const exerciseName = exercise.name?.toLowerCase().replace(/\s+/g, '-') || '';
  
  const urls = [
    // Primary: Use provided gifUrl if available
    exercise.gifUrl,
    
    // ExerciseDB API variations
    `https://v2.exercisedb.io/image/${exerciseId}`,
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
    
    // Alternative fitness image sources
    `https://www.inspireusafoundation.org/wp-content/uploads/2022/09/${exerciseName}.gif`,
    `https://fitnessvolt.com/wp-content/uploads/2019/03/${exerciseName}.gif`,
    
    // Generic exercise images based on body part
    getBodyPartImage(exercise.bodyParts?.[0] || exercise.bodyPart),
    
    // Fallback to a default exercise icon
    'https://via.placeholder.com/300x200/1a1a1a/00C2FF?text=Exercise'
  ].filter(Boolean); // Remove null/undefined values
  
  return urls;
};

// Get a generic image based on body part
const getBodyPartImage = (bodyPart) => {
  const bodyPartImages = {
    'chest': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/push-up.gif',
    'back': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/pull-up.gif',
    'upper legs': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/bodyweight-squat.gif',
    'lower legs': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/calf-raise.gif',
    'upper arms': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/push-up.gif',
    'lower arms': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/wrist-curl.gif',
    'shoulders': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/shoulder-press.gif',
    'waist': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/plank.gif',
    'cardio': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/jumping-jacks.gif',
    'neck': 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/neck-stretch.gif'
  };
  
  return bodyPartImages[bodyPart?.toLowerCase()] || null;
};

// Test if an image URL is accessible
export const testImageUrl = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
    
    // Timeout after 5 seconds
    setTimeout(() => resolve(false), 5000);
  });
};

// Find the first working image URL from a list
export const findWorkingImageUrl = async (urls) => {
  for (const url of urls) {
    if (url && await testImageUrl(url)) {
      return url;
    }
  }
  return null;
};

// Get exercise emoji based on body part or exercise type
export const getExerciseEmoji = (exercise) => {
  try {
    const bodyPart = exercise?.bodyParts?.[0] || exercise?.bodyPart || '';
    const name = exercise?.name?.toLowerCase() || '';
    const equipment = exercise?.equipments?.[0] || exercise?.equipment || '';
    
    // Specific exercise name matching (most specific)
    if (name.includes('push-up') || name.includes('pushup')) return '💪';
    if (name.includes('squat')) return '🦵';
    if (name.includes('deadlift')) return '🏋️';
    if (name.includes('bench press')) return '🏋️';
    if (name.includes('pull-up') || name.includes('pullup')) return '🤸';
    if (name.includes('plank')) return '🧘';
    if (name.includes('burpee')) return '🔥';
    if (name.includes('jumping jack')) return '🤾';
    if (name.includes('mountain climber')) return '⛰️';
    if (name.includes('lunge')) return '🦵';
    if (name.includes('dip')) return '💪';
    if (name.includes('curl')) return '💪';
    if (name.includes('press')) return '🏋️';
    if (name.includes('row')) return '🚣';
    if (name.includes('crunch') || name.includes('sit-up')) return '🧘';
    if (name.includes('tricep')) return '💪';
    if (name.includes('bicep')) return '💪';
    if (name.includes('shoulder')) return '💪';
    
    // Exercise type matching
    if (name.includes('cardio') || name.includes('running') || name.includes('jogging')) return '🏃';
    if (name.includes('yoga') || name.includes('stretch')) return '🧘';
    if (name.includes('jump') || name.includes('hop')) return '🤾';
    if (name.includes('climb')) return '⛰️';
    if (name.includes('swim')) return '🏊';
    
    // Equipment-based matching
    if (equipment.includes('barbell')) return '🏋️';
    if (equipment.includes('dumbbell')) return '💪';
    if (equipment.includes('cable')) return '🔗';
    if (equipment.includes('machine')) return '⚙️';
    
    // Body part matching (fallback)
    const bodyPartEmojis = {
      'chest': '💪',
      'back': '🤸',
      'upper legs': '🦵',
      'lower legs': '🦵',
      'upper arms': '💪',
      'lower arms': '💪',
      'shoulders': '💪',
      'waist': '🧘',
      'cardio': '🏃',
      'neck': '🧘',
      'abs': '🧘',
      'core': '🧘'
    };
    
    return bodyPartEmojis[bodyPart.toLowerCase()] || '🏋️';
  } catch (error) {
    console.warn('Error getting exercise emoji:', error);
    return '🏋️';
  }
};