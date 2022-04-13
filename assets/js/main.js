/* eslint-disable linebreak-style */
// get dom elements
const mobNav = document.querySelector('.mobile-menu');
const mobList = document.querySelectorAll('.mob-list');
const dogsContainer = document.querySelector('.dogs-main-section');
const dataToggle = document.querySelector('.more');

// dogs object
const dogs = [
  {
    id: 1,
    name: 'BO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-one.webp',
  },
  {
    id: 2,
    name: 'OLLIE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-six.jpg',
  },
  {
    id: 3,
    name: 'BLAZE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-three.jpg',
  },
  {
    id: 4,
    name: 'AXEL',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-four.webp',
  },
  {
    id: 5,
    name: 'LUCKY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-five.webp',
  },
  {
    id: 6,
    name: 'BOOMER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: './assets/images/dog-two.webp',
  },
];

// function add more
const addLess = () => {
  let dynDogs = [];
  for (let i = 0; i < 2; i += 1) {
    dynDogs = [...dynDogs, dogs[i]];
  }
  let result = '';
  dynDogs.forEach((dog) => {
    const { name, description, img } = dog;
    const data = `
      <div class="dog-container">
        <div class="dog-img">
          <img src="${img}" alt="">
        </div>
        <div class="dog-content">
          <h4>${name}</h4>
          <p>${description}</p>
          <div class="underline-two"></div>
        </div>
      </div>`;
    result += data;
  });
  dogsContainer.innerHTML = result;
};
// function add less
const addMore = () => {
  let result = '';
  dogs.forEach((dog) => {
    const { name, description, img } = dog;
    const data = `
    <div class="dog-container">
      <div class="dog-img">
        <img src="${img}" alt="">
      </div>
      <div class="dog-content">
        <h4>${name}</h4>
        <p>${description}</p>
        <div class="underline-two"></div>
      </div>
    </div>`;
    result += data;
  });
  dogsContainer.innerHTML = result;
};
// document event listener
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    addLess();
  } else {
    addMore();
  }
});

dataToggle.addEventListener('click', () => {
  if (dataToggle.classList.contains('add')) {
    addMore();
    dataToggle.classList.remove('add');
    dataToggle.innerHTML = 'LESS <i class="fa-solid fa-circle-chevron-up"></i>';
  } else {
    addLess();
    dataToggle.innerHTML = 'MORE <i class="fa-solid fa-circle-chevron-down"></i>';
    dataToggle.classList.add('add');
  }
});
// show navigation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-bars')) {
    mobNav.style.cssText = `
      top:0;
      right:0;
    `;
  }
});
// hide navigation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark')) {
    mobNav.style.cssText = `
      top: -9999px;
      left:-9999px;
    `;
  }
});

// get all links
mobList.forEach((list) => {
  list.addEventListener('click', () => {
    mobNav.style.cssText = `
    display:none
    `;
  });
});

window.onresize = () => {
  window.location.reload();
};