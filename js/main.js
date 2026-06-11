/* ============================================================
   Carlos Orellana — portfolio
   Mobile menu toggle · terminal typing effect · mailto
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    });
    // close the menu after tapping a link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- mailto (kept lightly obfuscated) ---------- */
  var emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    var address = ['carlosorellana200', 'outlook.com'].join('@');
    emailBtn.setAttribute('href', 'mailto:' + address);
  }

  /* ---------- Terminal typing effect ---------- */
  function typeLoop(el, cmds, startDelay) {
    if (!el) return;
    var ci = 0;
    var pos = cmds[0].length;
    var deleting = true;
    el.textContent = cmds[0];

    function tick() {
      var full = cmds[ci];
      if (!deleting) {
        pos++;
        el.textContent = full.slice(0, pos);
        if (pos >= full.length) { deleting = true; setTimeout(tick, 1500); return; }
        setTimeout(tick, 75 + Math.random() * 55);
      } else {
        pos--;
        el.textContent = full.slice(0, pos);
        if (pos <= 0) { deleting = false; ci = (ci + 1) % cmds.length; setTimeout(tick, 320); return; }
        setTimeout(tick, 38);
      }
    }
    setTimeout(tick, startDelay);
  }

  typeLoop(
    document.getElementById('heroType'),
    ['./open-to-new-grad-roles', './currently-building', './always-learning', './say-hello'],
    1600
  );
  typeLoop(
    document.getElementById('contactType'),
    ['./say-hello', './send-an-email', './check-my-linkedin', './open-my-github', './have-a-question?'],
    2200
  );
})();
