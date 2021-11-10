function myFunction04_07_01() { 
  const points = {Korean: 85, Math: 70, English: 60};
  for (const subject in points) {
    console.log(`${subject} 점수: ${points[subject]}`);
  }
}