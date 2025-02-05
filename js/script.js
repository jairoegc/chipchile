document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");

  // Array of translations – Spanish and English are weighted to appear more often.
  const translations = [
    // Spanish entries (4 copies)
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Roboto', sans-serif" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Montserrat', sans-serif" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Lobster', cursive" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Roboto', sans-serif" },

    // English entries (4 copies)
    { language: 'English', text: 'Chips are designed in Chile!', font: "'Roboto', sans-serif" },
    { language: 'English', text: 'Chips are designed in Chile!', font: "'Montserrat', sans-serif" },
    { language: 'English', text: 'Chips are designed in Chile!', font: "'Lobster', cursive" },
    { language: 'English', text: 'Chips are designed in Chile!', font: "'Roboto', sans-serif" },

    // Other languages (one each)
    { language: 'Portuguese', text: 'No Chile, chips são projetados!', font: "'Roboto', sans-serif" },
    { language: 'German', text: 'In Chile werden Chips entworfen!', font: "'Roboto', sans-serif" },
    { language: 'Chinese', text: '智利设计芯片!', font: "'Noto Sans SC', sans-serif" },
    { language: 'Korean', text: '칠레에서 칩이 디자인됩니다!', font: "'Noto Sans KR', sans-serif" },
    { language: 'Japanese', text: 'チリでチップがデザインされる!', font: "'Noto Sans JP', sans-serif" },
    { language: 'Tamil', text: 'சில்லியில் சிப்ஸ் வடிவமைக்கப்படுகின்றன!', font: "'Noto Sans Tamil', sans-serif" },
    { language: 'Farsi', text: 'در شیلی تراشه‌ها طراحی می‌شوند!', font: "'Vazirmatn', sans-serif" },
    { language: 'Russian', text: 'В Чили разрабатывают чипы!', font: "'Roboto', sans-serif" }
  ];

  let currentIndex = 0;
  const total = translations.length;

  // Set the initial translation.
  textElement.innerText = translations[currentIndex].text;
  textElement.style.fontFamily = translations[currentIndex].font;

  setInterval(function() {
    // Pick a random index different from the current one.
    let randomIndex = Math.floor(Math.random() * total);
    while(randomIndex === currentIndex && total > 1) {
      randomIndex = Math.floor(Math.random() * total);
    }
    currentIndex = randomIndex;

    // Update the text and its font.
    textElement.innerText = translations[currentIndex].text;
    textElement.style.fontFamily = translations[currentIndex].font;
  }, 2000);
});
