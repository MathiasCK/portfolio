var textWrapper = document.querySelector('.header-1');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
);

anime.timeline().add({
  targets: '.header-1 .letter',
  translateY: [50, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  //delay: (el, i) => 4800 + 50 * i,
});

var textWrapper = document.querySelector('.header-2');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
);

anime.timeline().add({
  targets: '.header-2 .letter',
  translateY: [50, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: 1500,
});

anime.timeline().add({
  targets: '.text-1',
  translateX: [200, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: 2000,
});

anime.timeline().add({
  targets: '.text-2',
  translateX: [200, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: 2300,
});

anime.timeline().add({
  targets: '.text-3',
  translateX: [200, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: 2400,
});

anime.timeline().add({
  targets: '.text-4',
  translateX: [200, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 2000,
  delay: 2700,
});
