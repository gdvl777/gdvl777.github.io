const featuredSpeakers = [
  {
    n: 0,
    portrait: './images/Speakers/sp1.png',
    name: 'FAN Zhendong',
    position: 'Player 1.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker1',
  },
  {
    n: 1,
    portrait: './images/Speakers/sp2.png',
    name: 'MA Long',
    position: 'Player 2.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker2',
  },
  {
    n: 2,
    portrait: './images/Speakers/sp3.png',
    name: 'WANG Chuqin',
    position: 'Player 3.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker3',
  },
  {
    n: 3,
    portrait: './images/Speakers/sp4.png',
    name: 'Clint Eatswood',
    position: 'Player 4.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker4',
  },
  {
    n: 4,
    portrait: './images/Speakers/sp5.png',
    name: 'Lorena Jalek',
    position: 'Player 5.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker5',
  },
  {
    n: 5,
    portrait: './images/Speakers/sp6.png',
    name: 'Malek Nahan',
    position: 'Player 6.',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus in quod repellat harum fugit vero, ad enim repellendus delectus nesciunt provident temporibus porro aperiam molestias ut voluptates cumque? Nostrum!',
    class: 'speaker6',
  },
];

// Dinamic Section Speakers
const speakersCard = document.querySelector('.grid-container');

featuredSpeakers.forEach((postData) => {
  const card = document.createElement('div');
  if (postData.n > 1) {
    card.classList = 'card card-hidden';
  } else {
    card.classList = 'card';
  }
  // card.classList.add('card', postData.class);
  card.innerHTML = `
    <div class="featuredSpeakers">
      <img class="cardImg" src="${postData.portrait}" alt="Speaker Image">
      <div class="speakersInfo">
        <h5 class="speakerName">${postData.name}</h5>
        <h6 class="speakerPosition">${postData.position}</h6>
        <div class="speakerBar"></div>
        <p class="speakerExperience">${postData.resume}</p>
      </div>
    </div>
  `;
  speakersCard.appendChild(card);
});

// more button

const speakersButton = document.getElementById('mbutton');
const textSpeakersButton = document.querySelector('.more-button-p');

speakersButton.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.card-hidden');
  hiddenCards.forEach((card) => {
    card.classList.toggle('show');
    card.classList.toggle('card-hidden');
  });
  if (textSpeakersButton.innerText === 'MORE') {
    textSpeakersButton.innerText = 'LESS';
  } else {
    textSpeakersButton.innerText = 'MORE';
    const showCards = document.querySelectorAll('.show');
    showCards.forEach((card) => {
      card.classList.remove('show');
      card.classList.toggle('card-hidden');
    });
  }
});

// hamburguer menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBarMenu = document.querySelector('.navbar-menu');
const main = document.querySelector('.main');
const closeButton = document.createElement('button');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  closeButton.classList.add('xButton');
  navMenu.appendChild(closeButton);

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBarMenu.classList.add('display');
  main.classList.toggle('active');
  body.classList.add('overFlow');
  const closeButtonAction = document.querySelector('.xButton');
  closeButtonAction.addEventListener('click', () => {
    window.location.reload();
  });
});

document.querySelectorAll('.link-menu').forEach((m) => m.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  main.classList.remove('active');
  body.classList.remove('overFlow');
}));