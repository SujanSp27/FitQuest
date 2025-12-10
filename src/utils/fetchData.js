// Enhanced fetch function with better error handling and fallback data
export const fetchData = async (url, options = {}) => {
  const { timeout = 10000, retries = 2 } = options;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        ...options
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`✅ Successfully fetched data from: ${url}`);
      return data;
      
    } catch (error) {
      console.warn(`⚠️ Attempt ${attempt + 1} failed for ${url}:`, error.message);
      
      if (attempt === retries) {
        console.error(`❌ All attempts failed for ${url}:`, error);
        
        // Return fallback data based on URL type
        if (url.includes('bodyparts')) {
          return getFallbackBodyParts();
        } else if (url.includes('exercises')) {
          return getFallbackExercises();
        }
        return [];
      }
      
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
};

// Fallback data for body parts
const getFallbackBodyParts = () => {
  return [
    'back', 'cardio', 'chest', 'lower arms', 'lower legs', 
    'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'
  ];
};

// Fallback exercise data with working exercise demonstration URLs
const getFallbackExercises = () => {
  return [
    {
      exerciseId: "0001",
      name: "Push-up",
      bodyParts: ["chest", "upper arms"],
      targetMuscles: ["pectorals", "triceps"],
      equipments: ["body weight"],
      instructions: [
        "Start in a plank position with your hands slightly wider than shoulder-width apart.",
        "Lower your body until your chest nearly touches the floor.",
        "Push yourself back up to the starting position.",
        "Keep your core engaged throughout the movement."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE5MjkiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzAwQzJGRiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAwQzJGRiI+UHVzaC11cDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEMyRkYiIG9wYWNpdHk9IjAuOCI+RXhlcmNpc2UgRGVtbzwvdGV4dD4KICA8L3N2Zz4="
    },
    {
      exerciseId: "0002", 
      name: "Squat",
      bodyParts: ["upper legs", "lower legs"],
      targetMuscles: ["quadriceps", "glutes"],
      equipments: ["body weight"],
      instructions: [
        "Stand with feet shoulder-width apart.",
        "Lower your body as if sitting back into a chair.",
        "Keep your chest up and knees behind your toes.",
        "Return to standing position."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTIzMzIiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzE0RjFDNSIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzE0RjFDNSI+U3F1YXQ8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMTRGMUM1IiBvcGFjaXR5PSIwLjgiPkV4ZXJjaXNlIERlbW88L3RleHQ+CiAgPC9zdmc+"
    },
    {
      exerciseId: "0003",
      name: "Plank",
      bodyParts: ["waist", "upper arms"],
      targetMuscles: ["abs", "core"],
      equipments: ["body weight"],
      instructions: [
        "Start in a push-up position.",
        "Lower onto your forearms.",
        "Keep your body in a straight line.",
        "Hold the position while breathing normally."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyZDM3NDgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzAwQTNCOCIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAwQTNCOCI+UGxhbms8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBBM0I4IiBvcGFjaXR5PSIwLjgiPkV4ZXJjaXNlIERlbW88L3RleHQ+CiAgPC9zdmc+"
    },
    {
      exerciseId: "0004",
      name: "Jumping Jacks",
      bodyParts: ["cardio", "upper legs"],
      targetMuscles: ["cardiovascular", "calves"],
      equipments: ["body weight"],
      instructions: [
        "Stand with feet together and arms at your sides.",
        "Jump while spreading your legs shoulder-width apart.",
        "Simultaneously raise your arms overhead.",
        "Jump back to starting position."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM1YTY3ZDgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiI+SnVtcGluZyBKYWNrczwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCI+RXhlcmNpc2UgRGVtbzwvdGV4dD4KICA8L3N2Zz4="
    },
    {
      exerciseId: "0005",
      name: "Burpee",
      bodyParts: ["cardio", "chest", "upper legs"],
      targetMuscles: ["full body", "cardiovascular"],
      equipments: ["body weight"],
      instructions: [
        "Start in a standing position.",
        "Drop into a squat and place hands on the floor.",
        "Jump feet back into plank position.",
        "Do a push-up, jump feet back to squat, then jump up."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YTU1NjgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI0UyRThGMCIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0UyRThGMCI+QnVycGVlPC90ZXh0PgogICAgPHRleHQgeD0iMTUwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0UyRThGMCIgb3BhY2l0eT0iMC44Ij5FeGVyY2lzZSBEZW1vPC90ZXh0PgogIDwvc3ZnPg=="
    },
    {
      exerciseId: "0006",
      name: "Mountain Climbers",
      bodyParts: ["cardio", "waist", "upper arms"],
      targetMuscles: ["abs", "cardiovascular"],
      equipments: ["body weight"],
      instructions: [
        "Start in a plank position.",
        "Bring one knee toward your chest.",
        "Quickly switch legs in a running motion.",
        "Keep your core engaged throughout."
      ],
      gifUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NjdlZWEiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiI+TW91bnRhaW4gQ2xpbWJlcnM8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjgiPkV4ZXJjaXNlIERlbW88L3RleHQ+CiAgPC9zdmc+"
    },
    {
      exerciseId: "0007",
      name: "Lunges",
      bodyParts: ["upper legs", "lower legs"],
      targetMuscles: ["quadriceps", "glutes"],
      equipments: ["body weight"],
      instructions: [
        "Stand with feet hip-width apart.",
        "Step forward with one leg and lower your hips.",
        "Both knees should be bent at 90 degrees.",
        "Push back to starting position and repeat."
      ],
      gifUrl: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Lunges"
    },
    {
      exerciseId: "0008",
      name: "Pull-ups",
      bodyParts: ["back", "upper arms"],
      targetMuscles: ["lats", "biceps"],
      equipments: ["pull-up bar"],
      instructions: [
        "Hang from a pull-up bar with palms facing away.",
        "Pull your body up until your chin clears the bar.",
        "Lower yourself back down with control.",
        "Keep your core engaged throughout."
      ],
      gifUrl: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Pull-ups"
    },
    {
      exerciseId: "0009",
      name: "Dips",
      bodyParts: ["chest", "upper arms"],
      targetMuscles: ["triceps", "pectorals"],
      equipments: ["parallel bars"],
      instructions: [
        "Support yourself on parallel bars.",
        "Lower your body by bending your arms.",
        "Push back up to starting position.",
        "Keep your body upright throughout."
      ],
      gifUrl: "https://via.placeholder.com/300x200/a855f7/ffffff?text=Dips"
    },
    {
      exerciseId: "0010",
      name: "Deadlift",
      bodyParts: ["back", "upper legs"],
      targetMuscles: ["hamstrings", "glutes", "erector spinae"],
      equipments: ["barbell"],
      instructions: [
        "Stand with feet hip-width apart, barbell over mid-foot.",
        "Bend at hips and knees to grip the bar.",
        "Keep your back straight and chest up.",
        "Drive through heels to lift the bar up."
      ],
      gifUrl: "https://via.placeholder.com/300x200/c084fc/000000?text=Deadlift"
    },
    {
      exerciseId: "0011",
      name: "Sit-ups",
      bodyParts: ["waist"],
      targetMuscles: ["abs"],
      equipments: ["body weight"],
      instructions: [
        "Lie on your back with knees bent.",
        "Place hands behind your head.",
        "Lift your torso up towards your knees.",
        "Lower back down with control."
      ],
      gifUrl: "https://via.placeholder.com/300x200/0A1929/00C2FF?text=Sit-ups"
    },
    {
      exerciseId: "0012",
      name: "Bicep Curls",
      bodyParts: ["upper arms"],
      targetMuscles: ["biceps"],
      equipments: ["dumbbell"],
      instructions: [
        "Stand with dumbbells at your sides.",
        "Keep elbows close to your body.",
        "Curl weights up to shoulder level.",
        "Lower with control."
      ],
      gifUrl: "https://via.placeholder.com/300x200/1a2332/14F1C5?text=Bicep+Curls"
    },
    {
      exerciseId: "0013",
      name: "Shoulder Press",
      bodyParts: ["shoulders", "upper arms"],
      targetMuscles: ["deltoids", "triceps"],
      equipments: ["dumbbell"],
      instructions: [
        "Stand with dumbbells at shoulder height.",
        "Press weights straight up overhead.",
        "Lower back to starting position.",
        "Keep core engaged throughout."
      ],
      gifUrl: "https://via.placeholder.com/300x200/2d3748/00A3B8?text=Shoulder+Press"
    },
    {
      exerciseId: "0014",
      name: "Bench Press",
      bodyParts: ["chest", "upper arms"],
      targetMuscles: ["pectorals", "triceps"],
      equipments: ["barbell"],
      instructions: [
        "Lie on bench with barbell above chest.",
        "Lower bar to chest level.",
        "Press bar back up to starting position.",
        "Keep feet flat on floor."
      ],
      gifUrl: "https://dummyimage.com/300x200/0A1929/00C2FF&text=Bench+Press"
    },
    {
      exerciseId: "0015",
      name: "Rows",
      bodyParts: ["back", "upper arms"],
      targetMuscles: ["lats", "rhomboids", "biceps"],
      equipments: ["dumbbell"],
      instructions: [
        "Bend forward with dumbbell in hand.",
        "Pull weight up to your side.",
        "Squeeze shoulder blades together.",
        "Lower with control."
      ],
      gifUrl: "https://dummyimage.com/300x200/1a2332/14F1C5&text=Rows"
    },
    {
      exerciseId: "0016",
      name: "Tricep Extensions",
      bodyParts: ["upper arms"],
      targetMuscles: ["triceps"],
      equipments: ["dumbbell"],
      instructions: [
        "Hold dumbbell overhead with both hands.",
        "Lower weight behind your head.",
        "Extend arms back to starting position.",
        "Keep elbows stationary."
      ],
      gifUrl: "https://dummyimage.com/300x200/2d3748/00A3B8&text=Tricep+Extensions"
    },
    {
      exerciseId: "0017",
      name: "Crunches",
      bodyParts: ["waist"],
      targetMuscles: ["abs"],
      equipments: ["body weight"],
      instructions: [
        "Lie on your back with knees bent.",
        "Place hands behind head lightly.",
        "Lift shoulders off the ground.",
        "Focus on contracting abs."
      ],
      gifUrl: "https://via.placeholder.com/300x200/4a5568/E2E8F0?text=Crunches"
    },
    {
      exerciseId: "0018",
      name: "Leg Raises",
      bodyParts: ["waist", "upper legs"],
      targetMuscles: ["abs", "hip flexors"],
      equipments: ["body weight"],
      instructions: [
        "Lie on your back with legs straight.",
        "Keep hands at your sides.",
        "Raise legs up to 90 degrees.",
        "Lower legs slowly without touching ground."
      ],
      gifUrl: "https://via.placeholder.com/300x200/5a67d8/ffffff?text=Leg+Raises"
    },
    {
      exerciseId: "0019",
      name: "Wall Sits",
      bodyParts: ["upper legs"],
      targetMuscles: ["quadriceps", "glutes"],
      equipments: ["body weight"],
      instructions: [
        "Stand with back against wall.",
        "Slide down until thighs are parallel to floor.",
        "Hold position with knees at 90 degrees.",
        "Keep back flat against wall."
      ],
      gifUrl: "https://via.placeholder.com/300x200/667eea/ffffff?text=Wall+Sits"
    },
    {
      exerciseId: "0020",
      name: "High Knees",
      bodyParts: ["cardio", "upper legs"],
      targetMuscles: ["hip flexors", "calves"],
      equipments: ["body weight"],
      instructions: [
        "Stand in place with feet hip-width apart.",
        "Lift one knee up to waist level.",
        "Quickly alternate between legs.",
        "Pump arms as you lift knees."
      ],
      gifUrl: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=High+Knees"
    }
  ];
};
