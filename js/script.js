document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");

  // Array of translation objects – Spanish and English are weighted to appear more often.
  const translations = [
    // Spanish entries (4 copies)
    { language: 'Spanish', text: 'En Chile se hacen Chips!', font: "'Roboto', sans-serif" },
    { language: 'Spanish', text: 'En Chile se hacen Chips!', font: "'Montserrat', sans-serif" },
    { language: 'Spanish', text: 'En Chile se hacen Chips!', font: "'Lobster', cursive" },
    { language: 'Spanish', text: 'En Chile se hacen Chips!', font: "'Roboto', sans-serif" },

    // English entries (4 copies)
    { language: 'English', text: 'In Chile, we make chips!', font: "'Roboto', sans-serif" },
    { language: 'English', text: 'In Chile, we make chips!', font: "'Montserrat', sans-serif" },
    { language: 'English', text: 'In Chile, we make chips!', font: "'Lobster', cursive" },
    { language: 'English', text: 'In Chile, we make chips!', font: "'Roboto', sans-serif" },

    // French entry
    { language: 'French', text: 'Au Chili, nous fabriquons des chips!', font: "'Roboto', sans-serif" },

    // Italian entry
    { language: 'Italian', text: 'In Cile, facciamo chip!', font: "'Roboto', sans-serif" },

    // Other languages (one each)
    { language: 'Portuguese', text: 'No Chile, nós fazemos chips!', font: "'Roboto', sans-serif" },
    { language: 'German', text: 'In Chile machen wir Chips!', font: "'Roboto', sans-serif" },
    { language: 'Chinese', text: '在智利，我们制造芯片！', font: "'Noto Sans SC', sans-serif" },
    { language: 'Korean', text: '칠레에서 우리가 칩을 만듭니다!', font: "'Noto Sans KR', sans-serif" },
    { language: 'Japanese', text: 'チリでは、私たちがチップを作っています！', font: "'Noto Sans JP', sans-serif" },
    { language: 'Tamil', text: 'சில்லியில் நாங்கள் சிப்ஸ் வடிவமைக்கிறோம்!', font: "'Noto Sans Tamil', sans-serif" },
    { language: 'Farsi', text: 'در شیلی، ما تراشه‌ها را خودمان می‌سازیم!', font: "'Vazirmatn', sans-serif" },
    { language: 'Russian', text: 'В Чили мы сами делаем чипы!', font: "'Roboto', sans-serif" }
  ];

  let currentIndex = 0;
  const total = translations.length;

  // Set the initial translation.
  textElement.innerText = translations[currentIndex].text;
  textElement.style.fontFamily = translations[currentIndex].font;

  setInterval(function() {
    // Choose a random index different from the current one.
    let randomIndex = Math.floor(Math.random() * total);
    while (randomIndex === currentIndex && total > 1) {
      randomIndex = Math.floor(Math.random() * total);
    }
    currentIndex = randomIndex;

    // Update text and its font.
    textElement.innerText = translations[currentIndex].text;
    textElement.style.fontFamily = translations[currentIndex].font;
  }, 1000); // Update every 1 second (1000 milliseconds)
});
