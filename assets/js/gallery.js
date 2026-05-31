const galleryItems = [
  ["עזרא הסופר", "המאה ה־5 לפנה״ס", "people/ezra.html", "עזרא הסופר", "דימוי ייצוגי/מקראי. מומלץ להחליף בהמשך בתמונה בדוקה מנחלת הכלל."],
  ["נחמיה", "המאה ה־5 לפנה״ס", "people/nehemiah.html", "נחמיה", "דימוי ייצוגי/מקראי. מומלץ להחליף בהמשך בתמונה בדוקה מנחלת הכלל."],
  ["רבי יהודה הנשיא", "135–217 בערך", "people/yehuda-hanasi.html", "רבי יהודה הנשיא", "דימוי ייצוגי. מומלץ להחליף בתמונה היסטורית/איור מותר לשימוש."],
  ["חסדאי אבן שפרוט", "915–970 בערך", "people/hasdai-ibn-shaprut.html", "חסדאי אבן שפרוט", "מומלץ להשתמש בתמונה של אנדרטה או דימוי ציבורי עם רישיון ברור."],
  ["שמואל הנגיד", "993–1056", "people/shmuel-hanagid.html", "שמואל הנגיד", "דימוי ייצוגי. מומלץ להוסיף מקור מדויק בהמשך."],
  ["יצחק אברבנאל", "1437–1508", "people/isaac-abravanel.html", "יצחק אברבנאל", "דיוקן מסורתי; יש לבדוק רישיון לפני שימוש בתמונה בפועל."],
  ["דונה גרציה נשיא", "1510–1569", "people/dona-gracia-nasi.html", "דונה גרציה נשיא", "דימוי ייצוגי; יש לוודא מקור ורישיון."],
  ["יוסף נשיא", "1524–1579", "people/joseph-nasi.html", "יוסף נשיא", "דימוי ייצוגי; יש לוודא מקור ורישיון."],
  ["מנשה בן ישראל", "1604–1657", "people/menasseh-ben-israel.html", "מנשה בן ישראל", "דיוקנאות היסטוריים רבים נמצאים בנחלת הכלל; יש לוודא בדף המקור."],
  ["משה מנדלסון", "1729–1786", "people/moses-mendelssohn.html", "משה מנדלסון", "דיוקנאות היסטוריים רבים נמצאים בנחלת הכלל; יש לוודא בדף המקור."],
  ["דוד פרידלנדר", "1750–1834", "people/david-friedlander.html", "דוד פרידלנדר", "דיוקן היסטורי אפשרי; יש לוודא רישיון."],
  ["משה מונטיפיורי", "1784–1885", "people/moses-montefiore.html", "משה מונטיפיורי", "דיוקנאות היסטוריים רבים נמצאים בנחלת הכלל; יש לוודא בדף המקור."],
  ["אדולף כרמיה", "1796–1880", "people/adolphe-cremieux.html", "אדולף כרמיה", "דיוקנאות היסטוריים רבים נמצאים בנחלת הכלל; יש לוודא בדף המקור."],
  ["קרל נטר", "1826–1882", "people/charles-netter.html", "קרל נטר", "מומלץ להוסיף דיוקן או תמונת מקוה ישראל עם קרדיט ברור."],
  ["אדמונד ג׳יימס דה רוטשילד", "1845–1934", "people/edmond-de-rothschild.html", "אדמונד דה רוטשילד", "דיוקן היסטורי או תמונת רמת הנדיב/מושבות; יש לוודא רישיון."],
  ["הרב יהודה אלקלעי", "1798–1878", "people/yehuda-alkalai.html", "הרב יהודה אלקלעי", "דיוקן או דימוי ייצוגי; יש לוודא מקור ורישיון."],
  ["הרב צבי הירש קלישר", "1795–1874", "people/tzvi-hirsch-kalischer.html", "הרב צבי הירש קלישר", "דיוקן או שער ספר דרישת ציון; יש לוודא מקור ורישיון."]
];

function localImageName(name) {
  return name
    .replaceAll("׳", "")
    .replaceAll("״", "")
    .replace(/[^\u0590-\u05FFa-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") + ".jpg";
}

function renderGalleryCards() {
  const grid = document.querySelector("#gallery-grid");
  if (!grid) return;
  grid.innerHTML = galleryItems.map((item, index) => {
    const [name, years, page, fallback, credit] = item;
    const imagePath = `assets/images/${localImageName(name)}`;
    return `<article class="gallery-card rich-gallery-card" tabindex="0" data-index="${index}">
      <div class="gallery-photo-wrap">
        <img class="gallery-photo" src="${imagePath}" alt="${name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="gallery-fallback">${fallback}</div>
      </div>
      <div class="person-body"><p class="person-meta">${years}</p><h3>${name}</h3><p class="gallery-credit-short">${credit}</p><a class="button secondary" href="${page}" onclick="event.stopPropagation();">לדף הדמות</a></div>
    </article>`;
  }).join("");
}

function setupGalleryModal() {
  const modal = document.querySelector("#image-modal");
  if (!modal) return;
  const title = document.querySelector("#modal-title");
  const image = document.querySelector("#modal-image");
  const credit = document.querySelector("#modal-credit");
  const link = document.querySelector("#modal-person-link");
  const close = modal.querySelector(".close-modal");

  function openModal(index) {
    const item = galleryItems[index];
    if (!item) return;
    const [name, years, page, fallback, textCredit] = item;
    title.textContent = `${name} — ${years}`;
    image.src = `assets/images/${localImageName(name)}`;
    image.alt = name;
    image.onerror = () => { image.removeAttribute("src"); image.alt = fallback; };
    if (credit) credit.textContent = textCredit;
    if (link) link.href = page;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  document.querySelectorAll(".rich-gallery-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.index));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.index); } });
  });
  close.addEventListener("click", () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); });
  modal.addEventListener("click", e => { if (e.target === modal) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); } });
}

renderGalleryCards();
setupGalleryModal();
