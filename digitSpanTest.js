// Save a user's test score
function saveTestScore(score) {
    const testScores = JSON.parse(localStorage.getItem('testScores')) || [];
    testScores.push(score);
    localStorage.setItem('testScores', JSON.stringify(testScores));
  }
  
  // Get all saved test scores
  function getTestScores() {
    return JSON.parse(localStorage.getItem('testScores')) || [];
  }
  
  // Example usage:
  const userScore = 7; // Replace with the actual test score
  saveTestScore(userScore);
  
  const allTestScores = getTestScores();
  console.log('All Test Scores:', allTestScores);
  