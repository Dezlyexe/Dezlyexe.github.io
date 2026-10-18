/* ==================== Ipad kidos ==================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* ==================== DoomScroll ==================== */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
});

/* ==================== ItemsData ==================== */
const PRODUCTS = [
  { id: 1, name: 'Хлеб пшеничный на закваске', cat: 'bread', price: 120, unit: 'шт',
    desc: 'Пышный, с хрустящей корочкой. Выпекается каждые 3 часа.',
    comp: 'Мука пшеничная, вода, закваска, соль',
    img: 'img/хлеб_пшеничный.JPG' },
  { id: 2, name: 'Хлеб ржаной «Бородинский»', cat: 'bread', price: 135, unit: 'шт',
    desc: 'Плотный, ароматный, с кориандром. Идеален к супу и салату.',
    comp: 'Мука ржаная, мука пшеничная, солод, кориандр, соль',
    img: 'img/хлеб_бородинский.jpg' },
  { id: 3, name: 'Хлеб бездрожжевой с семенами', cat: 'bread', price: 160, unit: 'шт',
    desc: 'С добавлением семян льна, подсолнечника и тыквы.',
    comp: 'Мука цельнозерновая, семена, вода, соль',
    img: 'img/хлеб_с_семенами.jpg' },

  { id: 4, name: 'Круассан классический', cat: 'pastry', price: 95, unit: 'шт',
    desc: 'Слоёный, сливочный, с золотистой корочкой.',
    comp: 'Мука, сливочное масло, молоко, дрожжи',
    img: 'img/круассан_классический.jpg' },
  { id: 5, name: 'Круассан с миндалём', cat: 'pastry', price: 130, unit: 'шт',
    desc: 'С миндальным кремом и лепестками миндаля.',
    comp: 'Мука, сливочное масло, миндальный крем, миндаль',
    img: 'img/круассан_с_миндалём.PNG' },
  { id: 6, name: 'Булочка с корицей', cat: 'pastry', price: 90, unit: 'шт',
    desc: 'Мягкая сдоба с ароматной корицей и глазурью.',
    comp: 'Мука, молоко, корица, сахар, сливочное масло',
    img: 'img/булочка_с_корицей.jpg' },
  { id: 7, name: 'Слойка с яблоком', cat: 'pastry', price: 85, unit: 'шт',
    desc: 'Хрустящее слоёное тесто и сочная яблочная начинка.',
    comp: 'Мука, сливочное масло, яблоки, корица, сахар',
    img: 'img/слойка_с_яблоком.jpg' },

  { id: 8, name: 'Пирожное «Картошка»', cat: 'cake', price: 90, unit: 'шт',
    desc: 'Классика с детства: бисквит, какао, сгущёнка.',
    comp: 'Бисквит, сгущённое молоко, какао, орехи',
    img: 'img/пирожное_картошка.JPG' },
  { id: 9, name: 'Торт «Медовик»', cat: 'cake', price: 1450, unit: 'кг',
    desc: 'Тонкие медовые коржи и нежный сметанный крем.',
    comp: 'Мука, мёд, сметана, яйца, сахар',
    img: 'img/торт_медовик.jpg' },
  { id: 10, name: 'Торт на заказ', cat: 'cake', price: 1700, unit: 'кг',
    desc: 'Изготовим по вашему эскизу и вкусу. Срок — 2 дня.',
    comp: 'По согласованию с клиентом',
    img: 'img/торт_на_заказ.jpg' },
  { id: 11, name: 'Печенье овсяное (набор 300 г)', cat: 'cake', price: 210, unit: 'набор',
    desc: 'Хрустящее снаружи, мягкое внутри. С изюмом.',
    comp: 'Овсяные хлопья, мука, изюм, масло, сахар',
    img: 'img/печенье_овсяное.jpg' },

  { id: 12, name: 'Кофе (американо / капучино / латте)', cat: 'drink', price: 150, unit: 'шт',
    desc: 'Свежеобжаренные зёрна, готовим на выбор.',
    comp: 'Кофе, молоко (по желанию)',
    img: 'img/кофе.jpg' },
  { id: 13, name: 'Чай (чёрный / зелёный / травяной)', cat: 'drink', price: 110, unit: 'шт',
    desc: 'Листовой чай, завариваем по вашему выбору.',
    comp: 'Чайный лист, травы',
    img: 'img/чай.jpg' },
  { id: 14, name: 'Какао', cat: 'drink', price: 130, unit: 'шт',
    desc: 'Густое, тёплое, с натуральным шоколадом.',
    comp: 'Молоко, какао, шоколад, сахар',
    img: 'img/какао.jpg' }
];

const CATEGORY_NAMES = {
  bread: 'Хлеб',
  pastry: 'Выпечка',
  cake: 'Кондитерские изделия',
  drink: 'Напитки'
};

/* ==================== Valid Helpers ==================== */
function setInvalid(input, invalid) {
  input.closest('.form-group').classList.toggle('invalid', invalid);
  return !invalid;
}
const phoneRegex = /^[\d\s()+\-]{10,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ==================== катАлог (только на catalog.html) ==================== */
const productsEl = document.getElementById('products');
if (productsEl) {

  function renderProducts(category = 'all') {
    const list = category === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.cat === category);

    productsEl.innerHTML = list.map(p => `
      <div class="card">
        <div class="card-img" style="background-image:url('${p.img}')">
          <span class="card-category">${CATEGORY_NAMES[p.cat]}</span>
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="card-desc">${p.desc}</p>
          <p class="card-comp">Состав: ${p.comp}</p>
          <div class="card-footer">
            <div class="price">${p.price} ₽ <small>/ ${p.unit}</small></div>
            <button class="btn-order" data-id="${p.id}">Заказать</button>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.btn-order').forEach(btn => {
      btn.addEventListener('click', () => openModal(+btn.dataset.id));
    });
  }
  renderProducts();

  /* --- Фильтрация --- */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    });
  });

  /* --- Модальное окно быстрого заказа --- */
  const overlay = document.getElementById('modalOverlay');
  const modalProduct = document.getElementById('modalProduct');
  let currentProduct = null;

  function openModal(id) {
    currentProduct = PRODUCTS.find(p => p.id === id);
    if (!currentProduct) return;
    modalProduct.textContent = `${currentProduct.name} — ${currentProduct.price} ₽ / ${currentProduct.unit}`;
    document.getElementById('modalName').value = '';
    document.getElementById('modalPhone').value = '';
    document.getElementById('modalQty').value = 1;
    document.getElementById('modalTime').value = '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.getElementById('modalSubmit').addEventListener('click', () => {
    const name = document.getElementById('modalName');
    const phone = document.getElementById('modalPhone');
    let ok = true;
    ok = setInvalid(name, name.value.trim().length < 2) && ok;
    ok = setInvalid(phone, !phoneRegex.test(phone.value.trim())) && ok;
    if (!ok) return;

    // Сохраняем быстрый заказ и переходим на страницу оформления
    sessionStorage.setItem('quickOrder', JSON.stringify({
      name: name.value.trim(),
      phone: phone.value.trim(),
      qty: document.getElementById('modalQty').value || 1,
      time: document.getElementById('modalTime').value || '',
      productName: currentProduct.name
    }));
    window.location.href = 'order.html';
  });
}

/* ==================== ФОРМА ЗАКАЗА (только на order.html) ==================== */
const orderForm = document.getElementById('orderForm');
if (orderForm) {

  // Устанавливаем минимальную дату — сегодня
  const orderDate = document.getElementById('orderDate');
  const today = new Date().toISOString().split('T')[0];
  orderDate.min = today;
  orderDate.value = today;

  // Подстановка данных из быстрого заказа (если пришёл с каталога)
  const quick = sessionStorage.getItem('quickOrder');
  if (quick) {
    try {
      const data = JSON.parse(quick);
      document.getElementById('orderName').value = data.name || '';
      document.getElementById('orderPhone').value = data.phone || '';
      document.getElementById('orderQty').value = data.qty || 1;

      // подбор товара
      const sel = document.getElementById('orderProduct');
      const target = (data.productName || '').toLowerCase().trim();
      for (const opt of sel.options) {
        if (!opt.value) continue;
        const optNorm = opt.text.toLowerCase().trim();
        if (optNorm === target || optNorm.includes(target) || target.includes(optNorm)) {
          sel.value = opt.value;
          break;
        }
      }

      // Комментарий с пожеланием по времени
      const comment = document.getElementById('orderComment');
      const parts = [`Быстрый заказ из каталога: ${data.productName}`];
      if (data.time) parts.push(`Желаемое время: ${data.time}`);
      comment.value = parts.join('\n');
    } catch (e) { /* ignore */ }
    sessionStorage.removeItem('quickOrder');
  }

  // Обработка отправки
  orderForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const email = document.getElementById('orderEmail');
    const product = document.getElementById('orderProduct');
    const qty = document.getElementById('orderQty');
    const date = document.getElementById('orderDate');

    let ok = true;
    ok = setInvalid(name, name.value.trim().length < 2) && ok;
    ok = setInvalid(phone, !phoneRegex.test(phone.value.trim())) && ok;
    if (email.value.trim()) {
      ok = setInvalid(email, !emailRegex.test(email.value.trim())) && ok;
    } else {
      setInvalid(email, false);
    }
    ok = setInvalid(product, !product.value) && ok;
    ok = setInvalid(qty, !qty.value || +qty.value < 1) && ok;
    ok = setInvalid(date, !date.value || date.value < today) && ok;

    if (!ok) {
      const first = orderForm.querySelector('.form-group.invalid');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Имитация отправки на сервер
    orderForm.style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'block';
    window.scrollTo({ top: document.getElementById('order').offsetTop, behavior: 'smooth' });
  });

  // Сброс ошибок при вводе
  orderForm.querySelectorAll('.form-control').forEach(el => {
    el.addEventListener('input', () => el.closest('.form-group').classList.remove('invalid'));
    el.addEventListener('change', () => el.closest('.form-group').classList.remove('invalid'));
  });
}

/* ==================== ФОРМА ОТЗЫВА (только на reviews.html) ==================== */
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    reviewForm.style.display = 'none';
    document.getElementById('reviewSuccess').style.display = 'block';
    document.getElementById('reviewSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}