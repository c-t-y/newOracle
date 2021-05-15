let point = [],
  mouse = {
    a: 0,
    b: 0,
  };

let Points = function () {
  this.a = 0;
  this.b = 0;
  this.node = (function () {
    let m = document.createElement('div');
    m.className = 'mouse-trail';
    document.body.appendChild(m);
    return m;
  })();
};

Points.prototype.draw = function () {
  this.node.style.left = this.a + 'px';
  this.node.style.top = this.b + 'px';
};

for (let i = 0; i < 15; i++) {
  let h = new Points();
  point.push(h);
}

function draw() {
  let a = mouse.a,
    b = mouse.b;

  point.forEach(function (points, index, point) {
    let mark = point[index + 1] || point[0];

    points.a = a;
    points.b = b;
    points.draw();
    a += (mark.a - points.a) * 0.5;
    b += (mark.b - points.b) * 0.5;
  });
}

addEventListener('mousemove', (e) => {
  mouse.a = e.pageX;
  mouse.b = e.pageY;
});

function animation() {
  draw();
  requestAnimationFrame(animation);
}

animation();

/////

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = [
    'the human being is characterized by a negation of the Other.',
    'the human being destroys himself and his planet by clinging to his narcissistic systems of classification.',
    'as long as the human being understands himself as separate and ',
    'discrete, he will be forever dissatisfied in his lifelong pursuit of domination and',
    'exclusion, for this is all that his History has left for him.',
    'radical becomings can only be characterized by continuous ',
    'mutation, remaking themselves in every moment as part of a co-emergent process ',
    'with the places and temporalities in which they are enmeshed.',
    'radical becomings are catalyzed by liminality, ',
    'their existential praxis is the aesthetic implosion of boundaries between self/ Other, ',
    'the incessant crossings of all established borders, the meticulous ',
    'openings of moist spaces for all bodies to sync in.',
    'the human being lives in naive devotion to his own',
    'knowledges, forgetting that his concept of objectivity',
    'can only be born out of violent trajectories of colonialism and epistemicide.',
    'he is content to delineate the boundaries of his truths ',
    'and know the world through his positivist filter of ',
    'perception, as he only entertains ideas that can be proven by his own machines. ',
    'he has lost his taste for the great mystery, moving about the world with severe agitation',
    'radical becomings are swimming in turquoise milk. their most powerful ',
    'weapon against the hegemony of the human being is their ongoing discovery ',
    'of the topology of pleasure, the infinite sensations they are able ',
    'to take in when they withdraw themselves from predetermined pathways of desire.',
    'this electric matrix explodes scarcity through its intrinsic',
    'abundance, seeking ever more forms to incorporate as its vertices.',
    'the human being’s life is spent in service to his addictions.',
    'facing each new day as a separated Individual calls for desperate patterns of consumption as distraction.',
    'his market oversaturates his senses, his pharmacological regimen ',
    'neutralizes his compassion, his religion validates his sense of self-hatred and indecency.',
    'his dependencies make him complicit in global devastation, he ',
    'can only strive for conformity, wealth, comfort, and easy sleep.',
    'radical becomings are disciples of the womb.',
    'all too aware of the physical and psychical blockages imposed by ten-thousand',
    'years of patriarchy, they are seeping into its cracks until it',
    'bursts, ushering in a deluge of scintillating vaginal fluid.',
    'they are surgically rewiring the human being’s habitual rhythms, allowing the ',
    'dryness of linear progress to soften into the wetness of spiralic cyclings.',
    'they are not afraid to ask their own bodies a question.',
    'the human beings impulse towards conservatism is directly proportional to his fragility.',
    'his stiffness leaves him prone to fractures, and he puts all his',
    'efforts towards sealing these shut, avoiding any prospect of critical reorganization.',
    'his fear-based claims to privilege and power are based on his species',
    'identification, his genitals, his nationality, and the color of his',
    'skin, so he fights to uphold the sanctity of any or all of these hierarchical categorizations.',
    'radical becomings are allied with the grotesque--vaginal openings, intestinal',
    'worms, bodily fluids, voluptuous swamps, reptilian secretions--anything',
    'too close to the fecundity of life, anything that carries the potential to',
    'disrupt the boundaries of self, anything possessing a slithering primordial power.',
    'quietly bubbling at the edges of human decency, the grotesque is the affect of radical seduction.',
    'disrupt the boundaries of self, anything possessing a slithering primordial power.',
    'the human being rejects myth, magic, monsters, matriarchy, menstruation—all things too slippery to be spoken in his language.',
    'things too slippery to be spoken in his language.',
    'the human being says NO to the present moment, over and over again for eternity.',
    'all of his abstractions are built on his image of the future, all of his',
    'neuroses are sustained by his memories of the past, all of his callousness',
    'relies on separation from the Otherness that is the shimmering potential for change within every instant.',
    'radical becomings play with the promises of linear Time.',
    'no longer bound by the normalizing programs of past and future, the only',
    'tense of radical becoming is the ongoing NOW, the portal that is always perfect',
    'time, the ever-present non-site of perpetual transformation.',
    'in the dark and unsentimental underbelly of each passing moment, radical',
    'becomings melt into their pulsating aliveness, a condition pronounced by',
    'its equally vital inverse of ecstatic death.',
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector('.text-container').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 100);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
