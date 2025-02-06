document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");

  // Unique fonts per language
  const translations = [
    // Spanish (4 unique fonts)
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Roboto', sans-serif", weight: "bold" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Montserrat', sans-serif", weight: "bold" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Lora', serif", weight: "bold" },
    { language: 'Spanish', text: 'En Chile se diseñan Chips!', font: "'Raleway', sans-serif", weight: "bold" },

    // English (4 unique fonts)
    { language: 'English', text: 'In Chile, we design chips!', font: "'Merriweather', serif", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Oswald', sans-serif", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Poppins', sans-serif", weight: "bold" },
    { language: 'English', text: 'In Chile, we design chips!', font: "'Playfair Display', serif", weight: "bold" },

    // French (Unique font)
    { language: 'French', text: 'Au Chili, nous concevons des puces!', font: "'EB Garamond', serif", weight: "bold" },

    // Italian (Unique font)
    { language: 'Italian', text: 'In Cile, progettiamo chip!', font: "'Cormorant Garamond', serif", weight: "bold" },

    // Other languages (Unique fonts)
    { language: 'Portuguese', text: 'No Chile, nós projetamos chips!', font: "'Cabin', sans-serif", weight: "bold" },
    { language: 'German', text: 'In Chile entwerfen wir Chips!', font: "'IBM Plex Serif', serif", weight: "bold" },
    { language: 'Chinese', text: '在智利，我们设计芯片!', font: "'Noto Sans SC', sans-serif", weight: "bold" },
    { language: 'Korean', text: '칠레에서 우리는 칩을 설계합니다!', font: "'Noto Sans KR', sans-serif", weight: "bold" },
    { language: 'Japanese', text: 'チリでは、私たちはチップを設計します!', font: "'Noto Sans JP', sans-serif", weight: "bold" },
    { language: 'Tamil', text: 'சில்லியில், நாங்கள் சிப்களை வடிவமைக்கிறோம்!', font: "'Noto Sans Tamil', sans-serif", weight: "bold" },
    { language: 'Farsi', text: 'در شیلی، ما تراشه‌ها را طراحی می‌کنیم!', font: "'Vazirmatn', sans-serif", weight: "bold" },
    { language: 'Russian', text: 'В Чили мы проектируем чипы!', font: "'PT Serif', serif", weight: "bold" }
  ];

  let currentIndex = 0;
  const total = translations.length;

  // Set the initial translation.
  textElement.innerText = translations[currentIndex].text;
  textElement.style.fontFamily = translations[currentIndex].font;
  textElement.style.fontWeight = translations[currentIndex].weight;

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
    textElement.style.fontWeight = translations[currentIndex].weight;
  }, 1000); // Update every 1 second (1000 milliseconds)
});
