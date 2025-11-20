
import fs from "fs";
import fetch from "node-fetch";

const EXERCISE_URL =
  "https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json";

const youtubeIDs = [
  "IODxDxX7oi4", // Push Up
  "3p8EBPVZ2Iw", // Squat
  "rjc0O8HIdKk", // Push Up - Form
  "rT7DgCr-3pg", // Bench Press
  "vlbTqSmxHfY", // Deadlift
  "op9kVnSso6Q", // Proper Deadlift
  "eozdVDA78K0", // Dumbbell Fly
  "tuwHzzPdaGc", // Incline Fly
  "SCVCLChPQFY", // Cable Crossover
  "qEwKCR5JCog", // Shoulder Press
  "lueEJGjTuPQ", // Bicep Curl
  "CAwf7n6Luuc", // Triceps Pushdown
  "IZxyjW7MPJQ", // Lunge
  "MKmrqcoCZ-M", // Crunch
  "JB2oyawG9KI", // Barbell Row
  "VHyGqsPOUHs", // Lat Pulldown
  "6TlbDQUWs0s", // Dumbbell Lateral Raise
  "XxWcirHIwVo", // Romanian Deadlift
  "z6PJMT2y8GQ", // Cable Row
  "gMaB-fG4u4g", // Jump Rope
];


const pickRandomVideos = () => {
  const shuffled = youtubeIDs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const main = async () => {
  try {
    console.log("📦 Fetching ExerciseDB data...");
    const res = await fetch(EXERCISE_URL);
    const data = await res.json();

    console.log(`✅ Found ${data.length} exercises — generating video links...`);

    const mapped = data.map((ex) => ({
      name: ex.name,
      videos: pickRandomVideos(),
    }));

    fs.mkdirSync("./src/data", { recursive: true });

    fs.writeFileSync(
      "./src/data/exerciseVideos.json",
      JSON.stringify(mapped, null, 2)
    );

    console.log(`🎥 Generated ${mapped.length} video mappings.`);
    console.log("💾 File saved: src/data/exerciseVideos.json");
  } catch (err) {
    console.error("❌ Error generating videos:", err);
  }
};

main();
