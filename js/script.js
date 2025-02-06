document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");

  // Translations emphasizing chip design, NOT fabrication.
  const translations = [
    // Spanish (4 copies)
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Roboto', sans-serif", weight: "bold"  },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Montserrat', sans-serif", weight: "bold" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Lobster', cursive", weight: "bold" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Roboto', sans-serif", weight: "bold" },

    // English (4 copies)
    { language: 'English', text: 'In Chile, we design chips!', font: "'Roboto', sans-serif", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Montserrat', sans-serif", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Lobster', cursive", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Roboto', sans-serif", weight: "bold" },

    // French
    { language: 'French', text: 'Au Chili, nous concevons des puces!', font: "'Roboto', sans-serif", weight: "bold" },

    // Italian
    { language: 'Italian', text: 'In Cile, progettiamo chip!', font: "'Roboto', sans-serif", weight: "bold" },

    // Other languages (one each)
    { language: 'Portuguese', text: 'No Chile, nós projetamos chips!', font: "'Roboto', sans-serif", weight: "bold" },
    { language: 'German', text: 'In Chile entwerfen wir Chips!', font: "'Roboto', sans-serif", weight: "bold" },
    { language: 'Chinese', text: '在智利，我们设计芯片!', font: "'Noto Sans SC', sans-serif", weight: "bold" },
    { language: 'Korean', text: '칠레에서 우리는 칩을 설계합니다!', font: "'Noto Sans KR', sans-serif", weight: "bold" },
    { language: 'Japanese', text: 'チリでは、私たちはチップを設計します!', font: "'Noto Sans JP', sans-serif", weight: "bold" },
    { language: 'Tamil', text: 'சில்லியில், நாங்கள் சிப்களை வடிவமைக்கிறோம்!', font: "'Noto Sans Tamil', sans-serif", weight: "bold" },
    { language: 'Farsi', text: 'در شیلی، ما تراشه‌ها را طراحی می‌کنیم!', font: "'Vazirmatn', sans-serif", weight: "bold" },
    { language: 'Russian', text: 'В Чили мы проектируем чипы!', font: "'Roboto', sans-serif", weight: "bold" }
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
