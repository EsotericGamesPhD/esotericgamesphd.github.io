// Constellation: choose a star to bring its game into the spotlight.
// Without JavaScript every star is a link to the game's press kit, and every trailer is a YouTube link.
(function () {
  var sky = document.getElementById('sky');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function embed(id, title) {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
    f.title = title || 'Trailer';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    return f;
  }

  // Trailer facades on press kit pages and in the Synthient section.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.trailer-play');
    if (!a) return;
    e.preventDefault();
    a.replaceWith(embed(a.dataset.yt, a.dataset.title));
  });

  // Small-screen menu.
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); toggle.focus(); }
    });
  }

  if (!sky) return;
  var stars = Array.prototype.slice.call(sky.querySelectorAll('.star'));
  var lines = sky.querySelector('.sky-lines');

  function select(slug, opts) {
    opts = opts || {};
    var spot = document.getElementById('spot-' + slug);
    if (!spot) return null;
    stars.forEach(function (s) {
      if (s.dataset.game === slug) s.setAttribute('aria-current', 'true');
      else s.removeAttribute('aria-current');
    });
    sky.querySelectorAll('.spot').forEach(function (s) {
      if (s === spot) return;
      s.hidden = true;
      var art = s.querySelector('.spot-art');
      if (art && art.dataset.original) { art.innerHTML = art.dataset.original; delete art.dataset.original; }
    });
    if (spot.hidden) {
      spot.hidden = false;
      if (!reduced) {
        spot.classList.remove('is-entering');
        void spot.offsetWidth;
        spot.classList.add('is-entering');
      }
    }
    return spot;
  }

  function play(slug, id) {
    var spot = select(slug);
    if (!spot) return false;
    var art = spot.querySelector('.spot-art');
    if (!art.dataset.original) art.dataset.original = art.innerHTML;
    art.innerHTML = '';
    art.appendChild(embed(id, spot.querySelector('.spot-title').textContent + ' trailer'));
    if (spot.getBoundingClientRect().top > window.innerHeight - 120 || spot.getBoundingClientRect().top < 0) {
      spot.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    }
    return true;
  }

  stars.forEach(function (star, i) {
    star.addEventListener('click', function (e) {
      e.preventDefault();
      select(star.dataset.game);
    });
    star.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = stars[(i + 1) % stars.length];
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = stars[(i - 1 + stars.length) % stars.length];
      if (e.key === 'Home') next = stars[0];
      if (e.key === 'End') next = stars[stars.length - 1];
      if (next) { e.preventDefault(); next.focus(); select(next.dataset.game); }
    });
  });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-play]');
    if (!a || !a.dataset.game) return;
    if (play(a.dataset.game, a.dataset.play)) e.preventDefault();
  });

  // Faint gold lines joining the stars, band by band, like the sky they come from.
  function drawLines() {
    if (!lines) return;
    var box = sky.getBoundingClientRect();
    var visible = window.getComputedStyle(lines).display !== 'none';
    if (!visible) return;
    var d = '';
    sky.querySelectorAll('.stars').forEach(function (band) {
      band.querySelectorAll('.star .sparkle').forEach(function (sp, i) {
        var r = sp.getBoundingClientRect();
        d += (i ? 'L' : 'M') + (r.left + r.width / 2 - box.left).toFixed(1) + ' ' + (r.top + r.height / 2 - box.top).toFixed(1) + ' ';
      });
    });
    lines.innerHTML = '<path d="' + d + '"/>';
  }
  drawLines();
  window.addEventListener('resize', drawLines);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLines);
})();
