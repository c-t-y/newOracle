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
    let randCard = Math.floor(Math.random() * 30) + 1;
    // let initCard;
    // let finalCard;
    let initCard = document.createElement('img');
    initCard.draggable = false;
    let finalCard = document.createElement('img');
    finalCard.draggable = false;
    document.querySelector('.white-flash').style.zIndex = 5;
    document.querySelector('.white-flash').style.opacity = 1;
    document.querySelector('.white-flash').style.opacity = 0;
    document.querySelector('.loading-container-outer').style.zIndex = -1;
    document.querySelector('.question-reiterated').style.opacity = 0;
    document.querySelector('.card-final-container').style.zIndex = 6;
    document.querySelector('.card-final-container').style.opacity = 1;
    if (randCard === 1) {
      initCard.src = './cards/SmallCard_0012_nourishment.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0017_20_nourishment.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card1');
      let cardSong = new Audio('../assets/sounds/NOURISHMENT_V1.mp3');
      cardSong.play();
    }
    if (randCard === 2) {
      initCard.src = './cards/SmallCard_0000_gestation2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0004_5_gestation.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card2');
      let cardSong = new Audio('../assets/sounds/GESTATION_V1.mp3');
      cardSong.play();
    }
    if (randCard === 3) {
      initCard.src = './cards/SmallCard_0001_idleorgans2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0003_4_idleorgans.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card3');
      let cardSong = new Audio('../assets/sounds/IDLE ORGANS V1.mp3');
      cardSong.play();
    }
    if (randCard === 4) {
      initCard.src = './cards/SmallCard_0002_interstitital2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0010_13_interstitial.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card4');
      let cardSong = new Audio('../assets/sounds/INTERSTITIAL V2.mp3');
      cardSong.play();
    }
    if (randCard === 5) {
      // hmmmm
      initCard.src = './cards/SmallCard_0003_alienation2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0000_12_alienation.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card5');
      let cardSong = new Audio('../assets/sounds/INTERSTITIAL V2.mp3');
      cardSong.play();
    }
    if (randCard === 6) {
      initCard.src = './cards/SmallCard_0004_innerspace2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0018_21_innerspace.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card6');
      let cardSong = new Audio('../assets/sounds/INNER SPACE V2.mp3');
      cardSong.play();
    }
    if (randCard === 7) {
      initCard.src = './cards/SmallCard_0005_sync-2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0009_11_sync.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card7');
      let cardSong = new Audio('../assets/sounds/SYNC V1.mp3');
      cardSong.play();
    }
    if (randCard === 8) {
      initCard.src = './cards/SmallCard_0006_fecundity2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0001_2_fecundity.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card8');
      let cardSong = new Audio('../assets/sounds/FECUNDITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 9) {
      //hmmmm
      initCard.src = './cards/SmallCard_0007_automation2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0030_10_automation copy.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card9');
      let cardSong = new Audio('../assets/sounds/FECUNDITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 10) {
      initCard.src = './cards/SmallCard_0008_shadowunion2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0006_7_shadowunion.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card10');
      let cardSong = new Audio('../assets/sounds/SHADOW UNION V1.mp3');
      cardSong.play();
    }
    if (randCard === 11) {
      initCard.src = './cards/SmallCard_0009_parasite2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0005_6_parasite.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card11');
      let cardSong = new Audio('../assets/sounds/PARASITE_V1.mp3');
      cardSong.play();
    }
    if (randCard === 12) {
      initCard.src = './cards/SmallCard_0010_superfluity2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0016_19_superfluity.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card12');
      let cardSong = new Audio('../assets/sounds/SUPERFLUITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 13) {
      // hmmmmmm
      initCard.src = './cards/SmallCard_0011_actualization2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0002_3_actualization.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card13');
      let cardSong = new Audio('../assets/sounds/SUPERFLUITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 14) {
      // hmmmmmm
      initCard.src = './cards/SmallCard_0013_instinct2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0008_9_instinct.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card14');
      let cardSong = new Audio('../assets/sounds/SUPERFLUITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 15) {
      initCard.src = './cards/SmallCard_0014_ecosex2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0014_17_ecosex.jpg';
      document.querySelector('.card-final').appendChild(finalCard);

      console.log('show card15');
      let cardSong = new Audio('../assets/sounds/ECOSEX_V3.mp3');
      cardSong.play();
    }
    if (randCard === 16) {
      initCard.src = './cards/SmallCard_0015_firstmatter2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0015_18_firstmatter.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card16');
      let cardSong = new Audio('../assets/sounds/FIRST MATTER_V1.mp3');
      cardSong.play();
    }
    if (randCard === 17) {
      initCard.src = './cards/SmallCard_0016_auguries2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0012_15_auguries.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card17');
      let cardSong = new Audio('../assets/sounds/AUGURIES_V3.mp3');
      cardSong.play();
    }
    if (randCard === 18) {
      initCard.src = './cards/SmallCard_0018_observation2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0022_25_observation.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card18');
      let cardSong = new Audio('../assets/sounds/OBSERVATION_V1.mp3');
      cardSong.play();
    }
    if (randCard === 19) {
      initCard.src = './cards/SmallCard_0019_foreplay2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0024_28_foreplay.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card19');
      let cardSong = new Audio('../assets/sounds/FOREPLAY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 20) {
      initCard.src = './cards/SmallCard_0020_lifecycle2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0029_27_lifecycle copy.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card20');
      let cardSong = new Audio('../assets/sounds/LIFE_CYCLE_V2.mp3');
      cardSong.play();
    }
    if (randCard === 21) {
      initCard.src = './cards/SmallCard_0021_simultaneity2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0023_26_simultaneity.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card21');
      let cardSong = new Audio('../assets/sounds/SIMULTANEITY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 22) {
      initCard.src = './cards/SmallCard_0022_planetarity2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0025_29_planetarity.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card22');
      let cardSong = new Audio('../assets/sounds/PLANETARITY V1.mp3');
      cardSong.play();
    }
    if (randCard === 23) {
      initCard.src = './cards/SmallCard_0023_dialectic2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0026_30_dialectic.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card23');
      let cardSong = new Audio('../assets/sounds/DIALECTIC V1.mp3');
      cardSong.play();
    }
    if (randCard === 24) {
      initCard.src = './cards/SmallCard_0024_anonymity2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0027_31_anonymity.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card24');
      let cardSong = new Audio('../assets/sounds/ANONYMITY_V2.mp3');
      cardSong.play();
    }
    if (randCard === 25) {
      initCard.src = './cards/SmallCard_0026_diagnostic2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0021_24_diagnostic.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card25');
      let cardSong = new Audio('../assets/sounds/DIAGNOSTIC_V1.mp3');
      cardSong.play();
    }
    if (randCard === 26) {
      initCard.src = './cards/SmallCard_0027_nervousfluid2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0028_32_nervousfluid.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card26');
      let cardSong = new Audio('../assets/sounds/NERVOUS FLUID_V2.mp3');
      cardSong.play();
    }
    if (randCard === 27) {
      initCard.src = './cards/SmallCard_0028_mystery2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0013_16_mystery.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card27');
      let cardSong = new Audio('../assets/sounds/MYSTERY_V1.mp3');
      cardSong.play();
    }
    if (randCard === 28) {
      initCard.src = './cards/SmallCard_0029_contagion2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0020_23_contagion.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card28');
      let cardSong = new Audio('../assets/sounds/CONTAGION V1.mp3');
      cardSong.play();
    }
    if (randCard === 29) {
      initCard.src = './cards/SmallCard_0030_pedagogy2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0019_22_pedagogy.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card29');
      let cardSong = new Audio('../assets/sounds/PEDAGOGY V1.mp3');
      cardSong.play();
    }
    if (randCard === 30) {
      initCard.src = './cards/SmallCard_0031_classification2.png';
      document.querySelector('.card-initial').appendChild(initCard);
      finalCard.src = './cards-full/BIG-CARDS_0007_8_classification.jpg';
      document.querySelector('.card-final').appendChild(finalCard);
      console.log('show card30');
      let cardSong = new Audio('../assets/sounds/CLASSIFICATION V2.mp3');
      cardSong.play();
    }
    // if (randCard === 31) {
    //   initCard.src = './oraclecards/cards-full/BIG-CARDS_0007_8_classification.jpg';
    //   document.querySelector('.card-initial').appendChild(initCard);
    //   finalCard.src = './cards-full/BIG-CARDS_0003_4_idleorgans.jpg';
    //   document.querySelector('.card-final').appendChild(finalCard);
    //   console.log('show card1');
    // }
    // if (randCard === 32) {
    //   initCard.src = './cards/SmallCard_0001_idleorgans2.png';
    //   document.querySelector('.card-initial').appendChild(initCard);
    //   finalCard.src = './cards-full/BIG-CARDS_0003_4_idleorgans.jpg';
    //   document.querySelector('.card-final').appendChild(finalCard);
    //   console.log('show card1');
    // }
  }, eggSpinTime);
}

function clickCard() {
  console.log('clicked');
  document.querySelector('.card-initial').style.opacity = 0;
  document.querySelector('.card-final').style.opacity = 1;

  document.querySelector('.home-btn').style.opacity = 1;
}

/// modal
