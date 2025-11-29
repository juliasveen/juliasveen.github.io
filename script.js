const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.querySelector('.nav-container');
menuToggle.addEventListener('click', () => {
  navContainer.classList.toggle('show');
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0, rootMargin: '0px 0px -100px 0px' };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const typedText = document.getElementById('typed-text');
const textArray = ['Future Data Analyst', 'Aspiring Web Developer', 'IT Leader'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

async function fetchNowPlaying() {
  try {
    const response = await fetch('http://localhost:3000/now-playing');
    const data = await response.json();

    const display = document.getElementById('now-playing-text');

    if (data.is_playing) {
      const song = data.item.name;
      const artists = data.item.artists.map(artist => artist.name).join(', ');
      const link = data.item.external_urls.spotify;

      display.innerHTML = `🎵 <a href="${link}" target="_blank">${song}</a> by ${artists}`;
    } else {
      display.textContent = 'Not listening to anything right now.';
    }
  } catch (error) {
    document.getElementById('now-playing-text').textContent = 'Unable to fetch currently playing track.';
    console.error('Spotify fetch error:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchNowPlaying();
  setInterval(fetchNowPlaying, 30000); // refresh every 30 sec
});
