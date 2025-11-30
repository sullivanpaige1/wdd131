const verses = [
    "I can do all things through Christ who strengthens me. – Philippians 4:13",
    "The Lord is my shepherd; I shall not want. – Psalm 23:1",
    "Be strong and courageous. – Joshua 1:9",
    "Let all that you do be done in love. – 1 Corinthians 16:14",
    "For we walk by faith, not by sight. – 2 Corinthians 5:7"
  ];
  
  document.getElementById("dailyVerse").textContent =
    verses[Math.floor(Math.random() * verses.length)];
  