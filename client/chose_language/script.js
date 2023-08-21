
// Card data
const cardData = [
    { language: 'Spanish', imageUrl: 'flag_icons/spain.png', content: '37.1M learners', link: "#"},
    { language: 'French', imageUrl: 'flag_icons/france.png', content: '22.1M learners', link: '#'},
    { language: 'Japanese', imageUrl: 'flag_icons/japan.png', content: '16.2M learners', link: '#'},
    { language: 'Korean', imageUrl: 'flag_icons/south-korea.png', content: '14.4M learners', link: '#'},
    { language: 'German', imageUrl: 'flag_icons/germany.png', content: '13.7M learners', link: '#'},
    { language: 'Hindi', imageUrl: 'flag_icons/india.png', content: '10.0M learners', link: '#'},
    { language: 'Italian', imageUrl: 'flag_icons/italy.png', content: '9.43M learners', link: '#'},
    { language: 'English', imageUrl: 'flag_icons/united-states.png', content: '99.8M learners', link: 'quiz/index.html'}
    // Add more card data as needed
  ];

  // Function to create a card element
  function createCard(title, language, imageUrl, content, link) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <strong>${language}</strong>
      <p>${content}</p>
    `;

    // Add click event listener to redirect to the specified link
    if(link){
        card.addEventListener('click', () => {
            return window.location.href = link;
          });
    }
    return card;
  }

  // Get the card container element
  const cardContainer = document.getElementById('cardContainer');

  // Create and append card components
  cardData.forEach((card)  => {
    const cardElement = createCard(card.title, card.language, card.imageUrl, card.content, card.link);
    cardContainer.appendChild(cardElement);
  });

