// Fills in the progress bar from the numbers on <div class="progress" data-raised data-goal data-donors>.
document.querySelectorAll('.progress').forEach(function (el) {
  var raised = Number(el.dataset.raised) || 0;
  var goal = Number(el.dataset.goal) || 0;
  var donors = Number(el.dataset.donors) || 0;
  var money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  var pct = goal ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

  el.querySelector('[data-raised-text]').textContent = money(raised);
  el.querySelector('[data-goal-text]').textContent = money(goal);
  el.querySelector('.progress__bar span').style.width = pct + '%';
  el.querySelector('.progress__bar').setAttribute('aria-valuenow', pct);
  if (donors) {
    el.querySelector('[data-donors-text]').textContent =
      donors + (donors === 1 ? ' neighbor' : ' neighbors') + ' · ' + pct + '%';
  }
});
