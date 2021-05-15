function questionClick() {
  document.querySelector('.card-container-outer-outer').style.opacity = 0;
  document.querySelector('.card-container-outer-outer').style.zIndex = 0;

  document.querySelector('.questionmark').style.zIndex = -5;
  document.querySelector('.questionmark').style.opacity = 0;

  document.querySelector('.question-input-container-outer').style.zIndex = 5;
  document.querySelector('.question-input-container-outer').style.opacity = 1;

  document.querySelector('.questionmark-back').style.zIndex = 10;
  document.querySelector('.questionmark-back').style.opacity = 1;
}

function eggClick() {
  // let eggSpinTime = 9500;
  let eggSpinTime = 200;
  document.querySelector('.question-input-container-outer').style.opacity = 0;
  document.querySelector('.question-input-container-outer').style.zIndex = 0;

  document.querySelector('.loading-container-outer').style.opacity = 1;
  document.querySelector('.loading-container-outer').style.zIndex = 5;

  let egg = document.createElement('img');
  egg.src = '../assets/eggspin.gif';
  document.querySelector('.eggspincontainer').appendChild(egg);

  let inputVal = document.querySelector('.input-box').value;
  document.querySelector('.question-reiterated').innerHTML = inputVal;
  document.querySelector('.question-reiterated').style.opacity = 1;

  setTimeout(function () {
    // let initCard;
    // let finalCard;
    let initCard = document.createElement('img');
    let finalCard = document.createElement('img');
    document.querySelector('.white-flash').style.zIndex = 5;
    document.querySelector('.white-flash').style.opacity = 1;
    document.querySelector('.white-flash').style.opacity = 0;
    document.querySelector('.loading-container-outer').style.zIndex = -1;
    document.querySelector('.question-reiterated').style.opacity = 0;
    document.querySelector('.card-final-container').style.zIndex = 6;
    document.querySelector('.card-final-container').style.opacity = 1;
    if (inputVal.length > 1) {
      initCard.src = './cards/SmallCard_0012_nourishment.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/LargeCard_0012_nourishment.png';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card1');
    }
  }, eggSpinTime);
}

function clickCard() {
  console.log('clicked');
  document.querySelector('.card-initial').style.opacity = 0;
  document.querySelector('.card-final').style.opacity = 1;

  document.querySelector('.home-btn').style.opacity = 1;
}

/// modal
