'use strict';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const awards = [
  {
    id: 'patience', tab: 'Терпение', category: 'НЕРВЫ ИЗ АРМИРОВАННОЙ СТАЛИ',
    title: '30 лет.\n«В этом году точно».',
    photo: 'football.png', alt: 'Компания в шарфах «Динамо» на футбольной трибуне',
    caption: 'ФУТБОЛЬНОЕ «ДИНАМО» / ОЖИДАНИЕ ЧЕМПИОНСТВА',
    text: '30 лет ждать чемпионства футбольного «Динамо» и не уйти болеть за кого-нибудь попроще. Это уже не преданность. Это бессрочный вклад в банке эмоциональных потрясений.',
    stat: 'ТЕРПЕНИЕ', value: '∞',
    aside: '«В следующем сезоне точно». Фраза продлевается автоматически.',
    toast: 'Терпение засчитано. Валерьянка в стоимость абонемента по-прежнему не входит.'
  },
  {
    id: 'leonids', tab: 'Царь Леонидс', category: 'ВЕТЕРАН СМУТНОГО ВРЕМЕНИ',
    title: 'Царя Леонидса\nпережил.',
    photo: 'leonids.png', alt: 'Мем: царь Леонидс на троне в динамовской мантии',
    caption: 'ЛЕТОПИСЬ / ПРИ ЦАРЕ ЛЕОНИДСЕ',
    text: 'Смутные времена пережиты. Динамовское подданство сохранено. Психика получила статус «после реставрации». За особые заслуги разрешено вздрагивать от слов «долгосрочный проект».',
    stat: 'УСТОЙЧИВОСТЬ К СМУТЕ', value: '99',
    aside: 'Царь на картинке. Выживший - по эту сторону экрана.',
    toast: 'Царская грамота выдана. Холопом не был. Болельщиком остался.'
  },
  {
    id: 'gta6', tab: 'Дождался VI', category: 'ВЫЖИВШИЙ В ОЖИДАНИИ РЕЛИЗА',
    title: 'Дожил\nдо GTA VI.',
    photo: 'gta.png', alt: 'Брат с геймпадом у экрана с Grand Theft Auto VI',
    caption: 'ВЕЩДОК / ГЕЙМПАД В РУКАХ, GTA VI НА ЭКРАНЕ',
    text: 'Дождался GTA V. Дождался GTA VI. Между этими событиями успел получить взрослую жизнь с работой, счетами и фразой «почему спина хрустит». Теперь можно снова угонять машины. Хотя бы виртуально.',
    stat: 'СИЛА ОЖИДАНИЯ', value: 'VI',
    aside: 'Пусть впереди будет столько же приключений. Только с сохранением перед сложными решениями.',
    toast: 'Миссия пройдена: дожить до GTA VI. Rockstar, за седьмую пока не берёмся.'
  },
  {
    id: 'director', tab: 'Реальные пацаны', category: 'ХАРИЗМА ПОПАЛА В КАДР',
    title: 'Реальные пацаны.\nСвой человек в кадре.',
    photo: 'director.png', alt: 'Брат держит кинохлопушку «Реальные пацаны» и показывает язык',
    caption: 'РЕАЛЬНЫЕ ПАЦАНЫ / ЛИЧНЫЙ КИНОАРХИВ',
    text: 'Настолько свой, что даже в «Реальных пацанах» нашлось место. На экране можно сыграть кого угодно. А вот быть человеком, с которым хочется дружить, у него получается без сценария.',
    stat: 'ЕСТЕСТВЕННОСТЬ В КАДРЕ', value: '99',
    aside: 'Хлопушка есть. Харизма есть. Осталось дождаться звонка: «Бро, второй сезон без тебя не начинаем».',
    toast: 'За роль самого себя. Дублёра с такой харизмой не нашли.'
  },
  {
    id: 'hockey', tab: 'Двойной сезон', category: 'УДВОЕННАЯ НАГРУЗКА НА НЕРВЫ',
    title: 'Футбол закончился?\nЕсть хоккей.',
    photo: 'hockey.png', alt: 'Компания в динамовской атрибутике на хоккейной арене',
    caption: 'ХОККЕЙНОЕ «ДИНАМО» / МЕСТА ДЛЯ СВОИХ',
    text: 'Нормальные люди дают нервной системе отдых между сезонами. Он нашёл второй вид спорта с тем же названием клуба. Очень удобно: кричалку менять не надо, валерьянку можно покупать оптом.',
    stat: 'ОТПУСК НЕРВНОЙ СИСТЕМЫ', value: '0',
    aside: 'Зато на фото всегда полный состав. Это важнее таблицы.',
    toast: 'Двойной сезон засчитан. Нервы попросили трансфер. Запрос отклонён.'
  },
  {
    id: 'handshake', tab: 'Всё решим', category: 'ЧЕЛОВЕК, НА КОТОРОГО МОЖНО ПОЛОЖИТЬСЯ',
    title: 'Рукопожатие\nуровня «всё решим».',
    photo: 'handshake.png', alt: 'Рукопожатие на фоне символики хоккейного «Динамо»',
    caption: 'РУКОПОЖАТИЕ КРЕПКОЕ / СЛОВО ТОЖЕ',
    text: '«Всё решим» от него звучит спокойно. Потому что рядом человек, который выслушает, поддержит и не пропадёт, когда трудно. А потом ещё и рассмешит так, что проблема уже не кажется концом света.',
    stat: 'НАДЁЖНОСТЬ', value: '99',
    aside: 'Хорошо, когда есть кому позвонить без вступления «извини, что беспокою».',
    toast: 'За поддержку без лишних слов. Свои знают, кому звонить.'
  },
  {
    id: 'tyukavin', tab: 'Тюкавин в очереди', category: 'ЛЕГЕНДУ УЗНАЛИ НА ВХОДЕ',
    title: 'Даже Тюкавин\nхочет фото.',
    photo: 'tyukavin.png', alt: 'Брат на совместном фото с Костей Тюкавиным',
    caption: 'КОСТЯ ТЮКАВИН / ВСТРЕЧА С ЛЕГЕНДОЙ',
    text: 'Обычно люди просят сфотографироваться с футболистом. Здесь всё наоборот: даже Костя Тюкавин хочет фото с этой легендой. Не смог отказать Косте. Человек старался, играл, ждал своего момента.',
    stat: 'ПОПУЛЯРНОСТЬ СРЕДИ ФУТБОЛИСТОВ', value: '99',
    aside: 'Костя, фото получилось. Теперь ждём красивый гол в честь именинника.',
    toast: 'Фото выдано. Костя доволен. Легенда вернулась к своим делам.'
  },
  {
    id: 'chill', tab: 'На чилле', category: 'ВЫСШИЙ УРОВЕНЬ РАССЛАБОНА',
    title: 'На чилле.\nНа расслабоне.',
    photo: 'chill.png', alt: 'Брат отдыхает в бассейне на розовом надувном фламинго',
    caption: 'РЕЖИМ «НЕ БЕСПОКОИТЬ» / ЛИЧНЫЙ ВОДИТЕЛЬ - ФЛАМИНГО',
    text: 'Всегда на расслабоне, на чилле. В расписании: полежать, поплавать, снова полежать. Розовый фламинго принят на должность личного водителя. Единственная срочная задача - не расплескать отдых.',
    stat: 'СРОЧНОСТЬ ВСЕГО ПРОИСХОДЯЩЕГО', value: '0',
    aside: 'Пусть таких дней будет больше: свои рядом, голова свободна и спешить никуда не надо.',
    toast: 'Отдых тоже талант. Судя по фламинго, этот навык уже прокачан.'
  }
];

const STORAGE = 'legend30-v2';
const state = { awards: [], shots: [], gift: false, sound: false, selected: 'patience' };
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE));
  if (saved && typeof saved === 'object') {
    state.awards = Array.isArray(saved.awards) ? [...new Set(saved.awards.filter(id => awards.some(a => a.id === id)))] : [];
    state.shots = Array.isArray(saved.shots) ? saved.shots.filter(s => typeof s === 'boolean').slice(0, 5) : [];
    state.gift = saved.gift === true;
    state.sound = saved.sound === true;
    state.selected = awards.some(a => a.id === saved.selected) ? saved.selected : 'patience';
  }
} catch { /* Local files and private browsing can restrict storage. */ }

let current = 'home';
let busy = false;
let audio;
let toastTimer;
let appeals = 0;
let logoClicks = 0;

function save() {
  try { localStorage.setItem(STORAGE, JSON.stringify(state)); } catch { /* The experience remains playable without storage. */ }
}

function sound(type = 'click') {
  if (!state.sound) return;
  try {
    audio ??= new (window.AudioContext || window.webkitAudioContext)();
    audio.resume().catch(() => {});
    const start = audio.currentTime;
    const notes = type === 'win' ? [392, 494, 587, 784] : type === 'goal' ? [440, 660] : type === 'miss' ? [160, 110] : [490];
    notes.forEach((frequency, i) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0, start + i * .09);
      gain.gain.linearRampToValueAtTime(.06, start + i * .09 + .01);
      gain.gain.exponentialRampToValueAtTime(.001, start + i * .09 + .17);
      oscillator.start(start + i * .09);
      oscillator.stop(start + i * .09 + .18);
    });
  } catch { /* Unsupported audio must not block navigation. */ }
}

function toast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4600);
}

function showScreen(id, { preview = false } = {}) {
  if (!$('#' + id)?.classList.contains('screen')) return;
  current = id;
  $$('.screen').forEach(screen => { screen.hidden = screen.id !== id; });
  $$('.masthead nav button').forEach(button => {
    if (button.dataset.screen === id) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  if (id === 'hall') selectAward(state.selected, false);
  if (id === 'gift') {
    const open = preview || state.gift;
    $('#gift-open').hidden = !open;
    $('#gift-locked').hidden = open;
    if (open) celebrate();
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  const heading = $('#' + id + ' h1') || $('#' + id + ' h2');
  if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  sound();
}

$$('[data-screen]').forEach(button => button.addEventListener('click', () => showScreen(button.dataset.screen)));
$$('[data-achievement]').forEach(button => button.addEventListener('click', () => {
  state.selected = button.dataset.achievement;
  save();
  showScreen('hall');
}));

// The SVG viewport crops screenshot chrome at display time; original photos stay untouched.
const photoFrames = {
  'tyukavin.png': { width: 366, height: 639, box: [8, 64, 357, 523] },
  'chill.png': { width: 365, height: 629, box: [5, 64, 360, 483] }
};
let photoFrameSequence = 0;
function makePhoto(file, alt = '', lazy = false) {
  const frame = photoFrames[file];
  if (!frame) {
    const img = document.createElement('img');
    img.src = 'photos/' + file;
    img.alt = alt;
    if (lazy) img.loading = 'lazy';
    return img;
  }
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.classList.add('source-frame');
  svg.setAttribute('viewBox', frame.box.join(' '));
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.style.setProperty('--photo-ratio', frame.box[2] / frame.box[3]);
  if (alt) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', alt); }
  else svg.setAttribute('aria-hidden', 'true');
  const defs = document.createElementNS(ns, 'defs');
  const clip = document.createElementNS(ns, 'clipPath');
  const clipId = 'photo-frame-' + (++photoFrameSequence);
  clip.id = clipId;
  clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
  const rect = document.createElementNS(ns, 'rect');
  ['x', 'y', 'width', 'height'].forEach((attribute, i) => rect.setAttribute(attribute, frame.box[i]));
  clip.append(rect); defs.append(clip);
  const image = document.createElementNS(ns, 'image');
  image.setAttribute('href', 'photos/' + file);
  image.setAttribute('width', frame.width);
  image.setAttribute('height', frame.height);
  image.setAttribute('clip-path', 'url(#' + clipId + ')');
  svg.append(defs, image);
  return svg;
}
function setPhoto(id, file, alt) {
  const node = makePhoto(file, alt);
  node.id = id;
  $('#' + id).replaceWith(node);
}

$('#achievement-tabs').replaceChildren(...awards.map(award => {
  const tab = document.createElement('button');
  tab.id = 'tab-' + award.id;
  tab.dataset.award = award.id;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', 'achievement-panel');
  const thumbnail = makePhoto(award.photo, '', true);
  const text = document.createElement('span');
  text.textContent = award.tab;
  const mark = document.createElement('span');
  mark.className = 'tab-mark';
  mark.setAttribute('aria-hidden', 'true');
  tab.append(thumbnail, text, mark);
  tab.addEventListener('click', () => selectAward(award.id));
  tab.addEventListener('keydown', event => {
    const i = awards.findIndex(a => a.id === award.id);
    let next;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (i + 1) % awards.length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (i - 1 + awards.length) % awards.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = awards.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectAward(awards[next].id);
      $('#tab-' + awards[next].id).focus({ preventScroll: true });
      $('#tab-' + awards[next].id).scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });
  return tab;
}));

function selectAward(id, playSound = true) {
  const index = awards.findIndex(a => a.id === id);
  if (index === -1) return;
  const award = awards[index];
  state.selected = id;
  save();
  $$('[data-award]').forEach(tab => {
    const selected = tab.dataset.award === id;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  $('#achievement-panel').setAttribute('aria-labelledby', 'tab-' + id);
  setPhoto('evidence-img', award.photo, award.alt);
  $('#evidence-caption').textContent = award.caption;
  $('#award-category').textContent = award.category;
  $('#award-position').textContent = (index + 1) + ' / ' + awards.length;
  $('#award-title').innerText = award.title;
  $('#award-text').textContent = award.text;
  $('#award-stat-label').textContent = award.stat;
  $('#award-stat-value').textContent = award.value;
  $('#award-aside').textContent = award.aside;
  $('#evidence').classList.toggle('royal', id === 'leonids');
  updateAwards();
  if (playSound) sound();
}

function updateAwards() {
  $('#archive-count').textContent = state.awards.length + '/' + awards.length;
  $$('[data-award]').forEach(tab => {
    const collected = state.awards.includes(tab.dataset.award);
    tab.classList.toggle('collected', collected);
    tab.querySelector('.tab-mark').textContent = collected ? '✓' : '·';
    tab.setAttribute('aria-label', awards.find(a => a.id === tab.dataset.award).tab + (collected ? ', награда получена' : ''));
  });
  const claimed = state.awards.includes(state.selected);
  $('#claim-award').disabled = claimed;
  $('#claim-award').textContent = claimed ? 'Награда получена' : 'Забрать награду';
  $('#award-stamp').hidden = !claimed;
  $('#award-number').textContent = claimed ? 'СЕМЕЙНЫЙ КОМИТЕТ НЕ ВОЗРАЖАЕТ' : 'РЕШЕНИЕ КОМИТЕТА: ОДОБРИТЬ';
}

$('#claim-award').addEventListener('click', () => {
  if (state.awards.includes(state.selected)) return;
  state.awards.push(state.selected);
  save();
  updateAwards();
  $('#award-stamp').animate([{opacity:0,transform:'scale(1.25) rotate(-10deg)'},{opacity:1,transform:'scale(1) rotate(-6deg)'}], {duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:420,easing:'ease-out'});
  sound('goal');
  toast(state.awards.length === awards.length ? awards.length + '/' + awards.length + '. Семейная платина получена. Можно наконец перестать доказывать, что ты красавчик.' : awards.find(a => a.id === state.selected).toast);
});
$('#next-award').addEventListener('click', () => {
  const next = (awards.findIndex(a => a.id === state.selected) + 1) % awards.length;
  selectAward(awards[next].id);
  $('#tab-' + state.selected).scrollIntoView({ block: 'nearest', inline: 'nearest' });
});

function openPhoto(file, alt) {
  setPhoto('full-photo', file, alt);
  $('#full-photo-caption').textContent = alt;
  const frame = photoFrames[file];
  $('#photo-dialog').style.width = frame ? 'min(calc(100vw - 32px), calc(78svh * ' + (frame.box[2] / frame.box[3]) + '))' : '';
  $('#photo-dialog').showModal();
}
$$('[data-photo]').forEach(button => button.addEventListener('click', () => openPhoto(button.dataset.photo, button.dataset.alt)));
$('#evidence-expand').addEventListener('click', () => {
  const award = awards.find(a => a.id === state.selected);
  openPhoto(award.photo, award.alt);
});
$('#photo-close').addEventListener('click', () => $('#photo-dialog').close());
$('#future-open').addEventListener('click', () => {
  showScreen('hall');
  $('#future-plan').scrollIntoView({ block: 'start', behavior: 'instant' });
});
$('#player-open').addEventListener('click', () => $('#player-dialog').showModal());
$('#player-close').addEventListener('click', () => $('#player-dialog').close());
$('#appeal').addEventListener('click', () => {
  appeals += 1;
  toast(appeals >= 3 ? 'Три апелляции подряд. Упрямство: 100. Добавили в характеристику.' : 'Комитет из одного младшего брата рассмотрел жалобу. Комитету смешно. Жалоба отклонена.');
  sound();
});

function updateSound() {
  $('#sound').setAttribute('aria-pressed', String(state.sound));
  $('#sound').setAttribute('aria-label', state.sound ? 'Выключить звук' : 'Включить звук');
  $('#sound-text').textContent = state.sound ? 'Звук вкл.' : 'Звук выкл.';
}
$('#sound').addEventListener('click', () => {
  state.sound = !state.sound;
  save();
  updateSound();
  sound();
});

function resetBall() {
  $('.ball').style.left = '50%';
  $('.ball').style.bottom = innerWidth <= 760 ? '26px' : '32px';
  $('.pitch').classList.remove('shooting');
  $('.ball').style.scale = '1';
  $('.keeper').style.left = '50%';
  $('.keeper').style.transform = 'translateX(-50%)';
}

function updateMatch() {
  const goals = state.shots.filter(Boolean).length;
  const misses = state.shots.length - goals;
  $('#score').textContent = goals;
  $('#scorebug-score').textContent = goals + ' : ' + misses;
  $('#attempt').textContent = state.shots.length === 5 ? 'СЕРИЯ ЗАКРЫТА' : 'УДАР ' + (state.shots.length + 1) + '/5';
  $('#shot-history').replaceChildren(...Array.from({ length: 5 }, (_, index) => {
    const shot = document.createElement('span');
    const done = index < state.shots.length;
    const goal = state.shots[index];
    shot.className = 'shot-result' + (done ? goal ? ' goal-result' : ' miss-result' : '');
    shot.textContent = done ? goal ? '✓' : '×' : index + 1;
    shot.setAttribute('aria-label', 'Удар ' + (index + 1) + ': ' + (done ? goal ? 'гол' : 'сейв' : 'не выполнен'));
    return shot;
  }));
  $$('[data-shot]').forEach(button => { button.disabled = busy || state.shots.length >= 5; });
  $('#retry').disabled = busy;
  $('#claim-gift').hidden = !(state.shots.length === 5 && goals >= 3);
  if (state.shots.length === 5) {
    $('#match-message').textContent = goals >= 3 ? 'План выполнен. Бухгалтерия младшего брата нехотя одобряет премию.' : 'Куртуа взял своё. Давай реванш: день рождения всё-таки у тебя.';
  }
}

function shoot(side) {
  if (busy || state.shots.length >= 5) return;
  busy = true;
  $('.pitch').classList.add('shooting');
  const keeperSide = ['left', 'middle', 'right'][Math.floor(Math.random() * 3)];
  const goal = keeperSide !== side;
  const positions = { left: '18%', middle: '50%', right: '82%' };
  $('.ball').style.left = positions[side];
  $('.ball').style.bottom = goal ? '58%' : '45%';
  $('.ball').style.scale = '.55';
  const goalFrame = $('.goal');
  const keeperPercent = ($('.pitch').clientWidth * parseFloat(positions[keeperSide]) / 100 - goalFrame.offsetLeft) / goalFrame.offsetWidth * 100;
  $('.keeper').style.left = keeperPercent + '%';
  $('.keeper').style.transform = 'translateX(-50%) rotate(' + (keeperSide === 'left' ? -29 : keeperSide === 'right' ? 29 : 0) + 'deg)';
  updateMatch();
  setTimeout(() => {
    state.shots.push(goal);
    if (state.shots.length === 5 && state.shots.filter(Boolean).length >= 3) state.gift = true;
    save();
    sound(goal ? 'goal' : 'miss');
    $('#match-message').textContent = goal ? ['Гол! Куртуа проводил мяч взглядом. Стадион в восторге.', 'В сетке! Бро, ты сейчас пробил Куртуа.', 'Есть! Такой удар надо показывать на семейных застольях.'][Math.floor(Math.random() * 3)] : 'Куртуа потащил. Ничего, следующие ворота будут твоими.';
    updateMatch();
    setTimeout(() => { resetBall(); busy = false; updateMatch(); }, 500);
  }, 580);
}
$$('[data-shot]').forEach(button => button.addEventListener('click', () => shoot(button.dataset.shot)));
$('#retry').addEventListener('click', () => {
  if (busy) return;
  state.shots = [];
  save();
  resetBall();
  updateMatch();
  $('#match-message').textContent = 'Куртуа снова в воротах. Выбирай угол, бро.';
  sound();
});

function celebrate() {
  sound('win');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement('i');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = ['#efd053', '#123ee9', '#fafaf5'][i % 3];
    piece.style.animationDelay = Math.random() * .6 + 's';
    piece.style.setProperty('--drift', (Math.random() - .5) * 240 + 'px');
    document.body.append(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}
$('#celebrate').addEventListener('click', celebrate);
$('#bonus-joke').addEventListener('click', () => toast('Финансовый отдел просит не тыкать в бюджет. Сюрприз должен оставаться сюрпризом.'));
$('#rating-joke').addEventListener('click', () => toast('99 - потому что 100 он сам себе бы поставил. Нужна хоть какая-то независимая экспертиза.'));
$('.wordmark').addEventListener('click', () => {
  logoClicks += 1;
  if (logoClicks % 3 === 0) toast('Чит-код принят. Младший брат зачислен в состав без просмотра и медосмотра.');
});

document.addEventListener('keydown', event => {
  if ($('#photo-dialog').open || $('#player-dialog').open) return;
  if (event.key === 'Escape' && current !== 'home') { showScreen('home'); return; }
  if (current === 'game' && ['1', '2', '3'].includes(event.key) && !event.repeat && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    shoot(['left', 'middle', 'right'][Number(event.key) - 1]);
  }
});

selectAward(state.selected, false);
updateSound();
updateMatch();
