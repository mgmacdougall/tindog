// Remember to import the data and Dog class!
import Dog from './Dog.js';
import dogs from './data.js';

let _dog;

const resetButtonStatus = () => {
  const statusButtons = document.querySelectorAll(
    '.inline-container .button-shadow'
  );

  Array.from(statusButtons).forEach(val =>
    val.classList.toggle('button-shadow')
  );
};

const getLikeStatusHtml = status => {
  return `
    <div class="like-status">
        <img src="images/badge-${status}.png">
    </div>
  `;
};

function toggleButtonFormatting(buttonElm) {
  const container = buttonElm.target.parentNode;
  container.classList.toggle('button-shadow');
}

// Code to set like/unlike image
const setLikeStatus = () => {
  const isLikedDisplay = document.querySelector('.like-status');
  if (isLikedDisplay === null) {
    _dog.hasBeenLiked = true; // Set the status of the
    document.getElementById('dog').innerHTML += getLikeStatusHtml('like');
  } else if (isLikedDisplay) {
    isLikedDisplay.innerHTML = null;
    if (_dog.hasBeenLiked) {
      _dog.hasBeenLiked = false;
    }
    isLikedDisplay.innerHTML += getLikeStatusHtml('like');
  } else {
    return;
  }
};

// Code to set like/unlike image
const setUnLikeStatus = () => {
  const isLikedDisplay = document.querySelector('.like-status');
  if (isLikedDisplay === null) {
    if (_dog.hasBeenLiked) {
      _dog.hasBeenLiked = false;
    }
    document.getElementById('dog').innerHTML += getLikeStatusHtml('nope');
  } else if (isLikedDisplay) {
    isLikedDisplay.innerHTML = null;
    if (_dog.hasBeenLiked) {
      _dog.hasBeenLiked = false;
    }
    isLikedDisplay.innerHTML += getLikeStatusHtml('nope');
  } else {
    return;
  }
};

//Event Listener for like/unlike buttons
document.getElementById('tindog-like').addEventListener('click', e => {
  if (e.target.id === 'like') {
    setLikeStatus();
    toggleButtonFormatting(e);
  }
  if (e.target.id === 'unlike') {
    setUnLikeStatus();
    toggleButtonFormatting(e);
  }
});

// First load the image to the background
const getInfoHTML = dogDetails => {
  return `
    <div>
      <span class="semi-bold font-large-height">${dogDetails.name}</span>
      <br>
      <p class="font-med-height">${dogDetails.bio}</p>
    </div>
  `;
};

const setBackgroundImage = activeDog => {
  document.getElementById('dog').style.removeProperty('backgroundImage');
  document.getElementById(
    'dog'
  ).style.backgroundImage = `url(${activeDog.avatar})`;
};

const render = dog => {
  setBackgroundImage(dog);
  document.getElementById('dog').innerHTML = getInfoHTML(dog);
  resetButtonStatus();
};

document.getElementById('unlike').addEventListener('click', () => {
  let active = (_dog.currentDog += 1);
  if (active < dogs.length) {
    setTimeout(() => {
      _dog = new Dog(dogs[active]);
      _dog.currentDog = active;
      _dog.hasBeenSwiped = true;
      render(_dog);
    }, 1000);
  }
});

document.getElementById('like').addEventListener('click', () => {
  let active = (_dog.currentDog += 1);
  if (active < dogs.length) {
    setTimeout(() => {
      _dog = new Dog(dogs[active]);
      _dog.currentDog = active;
      _dog.hasBeenSwiped = true;
      render(_dog);
    }, 1000);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  let currentDog = 0;
  _dog = new Dog(dogs[currentDog]);
  render(_dog);
});
