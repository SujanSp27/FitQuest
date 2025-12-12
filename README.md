# 🏋️‍♂️ FitQuest – Exercise Discovery & Recommendation App (React)

FitQuest is a fitness-focused **React application** that lets users search for exercises, view detailed information, watch YouTube tutorial videos, and get recommendations for **similar exercises** and **equipment-based variations**. It provides an intuitive UI for users to explore workouts based on body parts, equipment, and muscle groups.

## ✨ Recent Updates & Fixes

🔧 **Data Fetching Issues Fixed**:
- Enhanced API error handling with multiple fallback endpoints
- Added robust retry mechanism with timeout handling
- Implemented fallback exercise data for offline functionality
- Improved loading states and user feedback

🛡️ **Error Handling Improvements**:
- Added comprehensive error boundary for React errors
- Better user-friendly error messages
- Graceful degradation when APIs are unavailable

🎨 **UI/UX Enhancements**:
- Improved loading animations and states
- Added "No Results" component for empty searches
- Enhanced responsive design for all screen sizes
- Better visual feedback for user interactions

---

## 🌟 Key Highlights

✔ **Robust Data Fetching** - Multiple API endpoints with fallback data  
✔ **Search & Filter** - Find exercises by name, muscle group, or equipment  
✔ **Exercise Details** - Complete information with images & instructions  
✔ **YouTube Integration** - Embedded video tutorials for each exercise  
✔ **Smart Recommendations** - Similar exercises based on target muscle & equipment  
✔ **Responsive Design** - Optimized for mobile, tablet & desktop  
✔ **Error Resilience** - Works even when external APIs are down  
✔ **Modern React** - Built with React 19 and latest best practices  

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (version 14 or higher)
- npm 

### **1️ Clone & Install**
```bash
git clone <repository-url>
cd fitquest
npm install
```

### **2 Start Development Server**
```bash
npm start
```

App runs at: **http://localhost:3000**

---

## 🧠 Core Features

### 🔍 **1. Smart Exercise Search**
- Search by exercise name, body part, target muscle, or equipment
- Real-time filtering with instant results
- Fallback to local data if APIs are unavailable

### 📘 **2. Comprehensive Exercise Details**
Each exercise displays:
- Exercise name & animated GIF
- Target body parts & muscles
- Required equipment
- Step-by-step instructions
- Related video tutorials

### 🎥 **3. YouTube Tutorial Integration**
- Curated exercise video tutorials
- Embedded video player
- Multiple video options per exercise

### 🤝 **4. Intelligent Recommendations**
- Similar exercises based on target muscles
- Equipment-based exercise suggestions
- Related workout variations

### 🛡️ **5. Robust Error Handling**
- Multiple API endpoints for reliability
- Automatic fallback to cached data
- User-friendly error messages
- Graceful degradation

---

## 🏗️ Project Structure

```
fitquest/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── ExerciseCard.js      # Exercise display cards
│   │   ├── SearchExercises.js   # Search & filter functionality
│   │   ├── Exercises.js         # Exercise grid & pagination
│   │   ├── ErrorBoundary.js     # Error handling
│   │   ├── Loader.js            # Loading animations
│   │   ├── NoResults.js         # Empty state component
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js              # Main homepage
│   │   └── ExerciseDetail.js    # Exercise detail page
│   ├── utils/
│   │   └── fetchData.js         # Enhanced API utilities
│   ├── data/
│   │   └── exerciseVideos.json  # Video mappings
│   └── App.js
├── package.json
└── README.md
```

---

## 🌐 Data Sources & APIs

### **Primary Sources**
- **ExerciseDB GitHub** → Free exercise database (no key required)
- **RapidAPI ExerciseDB** → Enhanced exercise data (optional API key)
- **Local Fallback Data** → Built-in exercise database for offline use

### **API Configuration**
The app automatically tries multiple endpoints:
1. GitHub raw JSON files (free, reliable)
2. RapidAPI ExerciseDB (enhanced data, requires key)
3. Built-in fallback data (always available)

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend framework | 19.x |
| **Material-UI** | Component library | 7.x |
| **React Router** | Navigation | 7.x |
| **Emotion** | CSS-in-JS styling | 11.x |
| **React Loader Spinner** | Loading animations | 8.x |

---

## 🐛 Troubleshooting

### **Common Issues & Solutions**

**❌ "Unable to fetch data" error**
- ✅ App automatically uses fallback data
- ✅ Check internet connection
- ✅ Refresh the page if needed

**❌ Blank exercise cards**
- ✅ App tries multiple data sources automatically
- ✅ Fallback data ensures content always loads

**❌ Search not working**
- ✅ Make sure to click "Search" button
- ✅ Try common exercises like "push-up", "squat"

**❌ Development server issues**
```bash
# Kill port 3000 and restart
npx kill-port 3000
npm start

# Clear cache if needed
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Usage Guide

1. **Browse Exercises**: Homepage shows all available exercises
2. **Search**: Use the search bar to find specific exercises
3. **Filter**: Click body part buttons to filter exercises
4. **View Details**: Click exercise cards for detailed information
5. **Watch Videos**: Exercise pages include tutorial videos
6. **Explore Similar**: Discover related exercises and variations

---

## 🔧 Configuration Options

### **Environment Variables**
```bash
# Optional RapidAPI key for enhanced data
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
```

### **API Endpoints**
The app is configured to use multiple reliable endpoints:
- Primary: GitHub raw files (always free)
- Secondary: RapidAPI (enhanced features)
- Fallback: Local data (offline support)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact & Support

**Developer**: Sujan Poojary  
**GitHub**: https://github.com/SujanSp27  

For issues or questions:
- Open a GitHub issue
- Check the troubleshooting section above
- Review the console for error messages

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

⭐ **If you find this project helpful, please consider giving it a star!**

*Built with ❤️ for the fitness community*
