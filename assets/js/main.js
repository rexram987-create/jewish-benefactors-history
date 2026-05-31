const people = [
  { slug: "ezra", name: "עזרא הסופר", latin: "Ezra the Scribe", years: "המאה ה־5 לפנה״ס", period: "שיבת ציון", region: "בבל ויהודה", fields: ["תורה", "שיקום קהילה", "ארץ ישראל"], image: "assets/images/ezra.png", summary: "מנהיג רוחני ומדיני בתקופת שיבת ציון, שחיזק את מעמד התורה ואת הזהות היהודית לאחר גלות בבל.", etymology: "השם עזרא קשור לשורש ע־ז־ר, במשמעות עזרה וסיוע. הכינוי הסופר מציין מומחיות בכתיבה, תורה ומנהל ציבורי." },
  { slug: "nehemiah", name: "נחמיה", latin: "Nehemiah", years: "המאה ה־5 לפנה״ס", period: "שיבת ציון", region: "פרס וירושלים", fields: ["שיקום ירושלים", "הנהגה", "ביטחון"], image: "assets/images/nehemiah.png", summary: "מנהיג יהודי שפעל לשיקום ירושלים, לבניית חומותיה ולחיזוק הקהילה היהודית בארץ יהודה.", etymology: "השם נחמיה מורכב מן השורש נ־ח־ם ומרכיב שם האל יה, ומשמעותו בקירוב: ה׳ ניחם או ה׳ מנחם." },
  { slug: "yehuda-hanasi", name: "רבי יהודה הנשיא", latin: "Judah ha-Nasi", years: "135–217 בערך", period: "התקופה הרומית", region: "ארץ ישראל הרומית", fields: ["משנה", "הנהגה", "שימור מסורת"], image: "assets/images/yehuda-hanasi.png", summary: "נשיא הסנהדרין ועורך המשנה, שפעולתו עיצבה את החיים היהודיים לדורות בארץ ישראל ובתפוצות.", etymology: "יהודה הוא שם מקראי הקשור להודאה ולשבט יהודה. הכינוי הנשיא מציין ראש ומנהיג ציבורי בעל סמכות." },
  { slug: "hasdai-ibn-shaprut", name: "חסדאי אבן שפרוט", latin: "Hasdai ibn Shaprut", years: "915–970 בערך", period: "תור הזהב בספרד", region: "קורדובה", fields: ["דיפלומטיה", "רפואה", "קהילות"], image: "assets/images/hasdai-ibn-shaprut.png", summary: "רופא, דיפלומט ומדינאי בחצר ח׳ליפות קורדובה, שסייע לחיזוק מעמד היהודים בספרד המוסלמית.", etymology: "חסדאי קשור למילה חסד. אבן הוא רכיב ערבי־יהודי שמשמעותו בן. שפרוט הוא שם משפחה יהודי־ספרדי קדום." },
  { slug: "shmuel-hanagid", name: "שמואל הנגיד", latin: "Samuel ha-Nagid", years: "993–1056", period: "תור הזהב בספרד", region: "גרנדה", fields: ["וזירות", "תרבות", "קהילה"], image: "assets/images/shmuel-hanagid.png", summary: "וזיר, מצביא, משורר ומנהיג יהודי בגרנדה, שחיזק את מעמד היהודים בספרד המוסלמית.", etymology: "שמואל הוא שם מקראי. הכינוי הנגיד מציין מנהיג, שר או בעל מעמד ציבורי בכיר." },
  { slug: "isaac-abravanel", name: "יצחק אברבנאל", latin: "Isaac Abravanel", years: "1437–1508", period: "גירוש ספרד", region: "פורטוגל, ספרד ואיטליה", fields: ["מנהיגות", "פרשנות", "קהילות גולים"], image: "assets/images/isaac-abravanel.png", summary: "מדינאי, פרשן ומנהיג יהודי שסייע ליהודים בזמן גירוש ספרד והמשיך להנהיג קהילות גולים.", etymology: "יצחק הוא שם מקראי הקשור לצחוק. אברבנאל הוא שם משפחה יהודי־איברי עתיק, המזוהה עם משפחת מנהיגים ופרשנים." },
  { slug: "dona-gracia-nasi", name: "דונה גרציה נשיא", latin: "Dona Gracia Nasi", years: "1510–1569", period: "העת החדשה המוקדמת", region: "פורטוגל, ונציה והאימפריה העות׳מאנית", fields: ["הצלה", "אנוסים", "טבריה"], image: "assets/images/dona-gracia-nasi.png", summary: "אשת עסקים ומנהיגה יהודית שסייעה לאנוסים להימלט מאירופה ותמכה בפיתוח מרכז יהודי בטבריה.", etymology: "דונה פירושו גברת מכובדת. גרציה קשור ל־gratia, חן וחסד. נשיא מציין מנהיג או ראש ציבור." },
  { slug: "joseph-nasi", name: "יוסף נשיא", latin: "Joseph Nasi", years: "1524–1579", period: "העת החדשה המוקדמת", region: "האימפריה העות׳מאנית", fields: ["דיפלומטיה", "טבריה", "חצר הסולטאן"], image: "assets/images/joseph-nasi.png", summary: "מדינאי יהודי בעל השפעה בחצר הסולטאן העות׳מאני, שתמך בפיתוח טבריה ובסיוע ליהודים.", etymology: "יוסף הוא שם מקראי שפירושו יוסיף. נשיא הוא תואר עברי למנהיג, ראש או בעל מעמד ציבורי." },
  { slug: "menasseh-ben-israel", name: "מנשה בן ישראל", latin: "Menasseh ben Israel", years: "1604–1657", period: "המאה ה־17", region: "אמסטרדם ואנגליה", fields: ["דיפלומטיה", "אמנציפציה", "אנגליה"], image: "assets/images/menasseh-ben-israel.png", summary: "רב, הוגה ודיפלומט שפעל להשבת היהודים לאנגליה לאחר מאות שנות גירוש.", etymology: "מנשה הוא שם מקראי. בן ישראל מציין שיוך לעם ישראל וגם שם משפחתי־תרבותי בעל משמעות יהודית מובהקת." },
  { slug: "moses-mendelssohn", name: "משה מנדלסון", latin: "Moses Mendelssohn", years: "1729–1786", period: "ההשכלה", region: "פרוסיה וגרמניה", fields: ["השכלה", "זכויות", "סובלנות"], image: "assets/images/moses-mendelssohn.png", summary: "הוגה יהודי מרכזי שקידם השכלה, סובלנות ושיפור מעמד היהודים באירופה.", etymology: "משה הוא שם מקראי. מנדלסון פירושו בן מנדל; מנדל הוא צורת יידיש או גרמנית־יהודית של מנחם." },
  { slug: "david-friedlander", name: "דוד פרידלנדר", latin: "David Friedländer", years: "1750–1834", period: "אמנציפציה יהודית", region: "פרוסיה", fields: ["זכויות אזרח", "חינוך", "שילוב"], image: "assets/images/david-friedlander.png", summary: "פעיל ציבורי יהודי שפעל למען אמנציפציה ושילוב יהודים בחברה האירופית המודרנית.", etymology: "דוד הוא שם מקראי. פרידלנדר מורכב מיסודות גרמניים הקשורים לשלום או לארץ מוצא, בהתאם למסורת השמות האשכנזית." },
  { slug: "moses-montefiore", name: "משה מונטיפיורי", latin: "Moses Montefiore", years: "1784–1885", period: "המאה ה־19", region: "בריטניה, ארץ ישראל והעולם היהודי", fields: ["צדקה", "שתדלנות", "ירושלים"], image: "assets/images/moses-montefiore.png", summary: "נדבן ושתדלן שפעל למען יהודים בעולם ובארץ ישראל, במיוחד בירושלים ובמוסדות רווחה וכלכלה.", etymology: "משה הוא שם מקראי. Montefiore באיטלקית: Monte = הר, Fiore = פרח; כלומר הר הפרחים." },
  { slug: "adolphe-cremieux", name: "אדולף כרמיה", latin: "Adolphe Crémieux", years: "1796–1880", period: "המאה ה־19", region: "צרפת וצפון אפריקה", fields: ["זכויות", "חינוך", "כי״ח"], image: "assets/images/adolphe-cremieux.png", summary: "מדינאי יהודי־צרפתי שפעל למען זכויות יהודים וחינוך יהודי מודרני דרך כל ישראל חברים.", etymology: "אדולף הוא שם אירופי־גרמאני. כרמיה או Crémieux הוא שם משפחה צרפתי שמקורו במקום בשם זה בדרום צרפת." },
  { slug: "charles-netter", name: "קרל נטר", latin: "Charles Netter", years: "1826–1882", period: "המאה ה־19", region: "צרפת וארץ ישראל", fields: ["חינוך", "חקלאות", "מקוה ישראל"], image: "assets/images/charles-netter.png", summary: "ממייסדי כי״ח ומייסד מקוה ישראל, מוסד חקלאי מרכזי להכשרת צעירים יהודים בארץ ישראל.", etymology: "קרל או שארל הוא שם אירופי נפוץ. נטר הוא שם משפחה יהודי־אירופי; משמעותו המדויקת תלויה במסורת המשפחתית והלשונית." },
  { slug: "edmond-de-rothschild", name: "אדמונד ג׳יימס דה רוטשילד", latin: "Edmond James de Rothschild", years: "1845–1934", period: "סוף המאה ה־19", region: "צרפת וארץ ישראל", fields: ["התיישבות", "חקלאות", "מושבות"], image: "assets/images/edmond-de-rothschild.png", summary: "תמך במושבות היהודיות הראשונות בארץ ישראל והניח יסודות כלכליים להתיישבות החדשה.", etymology: "אדמונד הוא שם אירופי. רוטשילד בגרמנית: Roth = אדום, Schild = מגן; כלומר מגן אדום." },
  { slug: "yehuda-alkalai", name: "הרב יהודה אלקלעי", latin: "Yehuda Alkalai", years: "1798–1878", period: "מבשרי הציונות", region: "הבלקן וארץ ישראל", fields: ["עלייה", "עברית", "שיבת ציון"], image: "assets/images/yehuda-alkalai.png", summary: "ממבשרי הציונות שקרא לעלייה לארץ ישראל, לתחיית העברית ולהתארגנות יהודית לאומית.", etymology: "יהודה הוא שם מקראי. אלקלעי הוא שם משפחה ספרדי־בלקני, כנראה קשור למסורת גאוגרפית או קהילתית של המשפחה." },
  { slug: "tzvi-hirsch-kalischer", name: "הרב צבי הירש קלישר", latin: "Tzvi Hirsch Kalischer", years: "1795–1874", period: "מבשרי הציונות", region: "פרוסיה וארץ ישראל", fields: ["התיישבות", "שיבת ציון", "הגות"], image: "assets/images/tzvi-hirsch-kalischer.png", summary: "עודד התיישבות יהודית מעשית בארץ ישראל ותמך ברעיון שיבת ציון בדרך פעילה.", etymology: "צבי והירש הם שם עברי ושם יידי־גרמני בעלי משמעות דומה: אייל או צבי. קלישר קשור כנראה למוצא משפחתי מן העיר קאליש." }
];

function getBasePath() {
  return window.location.pathname.includes("/people/") ? "../" : "";
}

function dedicatedPage(person) {
  const pages = {
    "ezra": "ezra.html",
    "nehemiah": "nehemiah.html",
    "yehuda-hanasi": "yehuda-hanasi.html",
    "hasdai-ibn-shaprut": "hasdai-ibn-shaprut.html",
    "shmuel-hanagid": "shmuel-hanagid.html",
    "isaac-abravanel": "isaac-abravanel.html",
    "dona-gracia-nasi": "dona-gracia-nasi.html",
    "joseph-nasi": "joseph-nasi.html",
    "menasseh-ben-israel": "menasseh-ben-israel.html",
    "moses-mendelssohn": "moses-mendelssohn.html",
    "david-friedlander": "david-friedlander.html",
    "moses-montefiore": "moses-montefiore.html",
    "adolphe-cremieux": "adolphe-cremieux.html",
    "charles-netter": "charles-netter.html",
    "edmond-de-rothschild": "edmond-de-rothschild.html",
    "yehuda-alkalai": "yehuda-alkalai.html"
  };
  return pages[person.slug] || null;
}

function personUrl(person) {
  const dedicated = dedicatedPage(person);
  if (dedicated) return window.location.pathname.includes("/people/") ? dedicated : `people/${dedicated}`;
  return `${getBasePath()}people/person.html?person=${person.slug}`;
}

function imageBlock(person, extraClass = "person-image") {
  return `<div class="${extraClass}" data-fallback="${person.name}">${person.name}</div>`;
}

function setupPeopleDropdown() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks || navLinks.querySelector(".people-dropdown")) return;
  if (document.querySelector(".navbar > .people-dropdown")) return;
  const dropdown = document.createElement("div");
  dropdown.className = "people-dropdown";
  dropdown.innerHTML = `<button class="people-dropdown-toggle" type="button" aria-expanded="false">דמויות</button><div class="people-dropdown-menu">${people.map(person => `<a href="${personUrl(person)}">${person.name}</a>`).join("")}</div>`;
  navLinks.prepend(dropdown);
  const toggle = dropdown.querySelector(".people-dropdown-toggle");
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", dropdown.classList.contains("open") ? "true" : "false");
  });
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function renderPeopleGrid() {
  const grid = document.querySelector("#people-grid");
  if (!grid) return;
  grid.innerHTML = people.map(person => `<article class="person-card">${imageBlock(person)}<div class="person-body"><p class="person-meta">${person.years} · ${person.period}</p><h3>${person.name}</h3><p>${person.summary}</p><div class="tags">${person.fields.map(field => `<span class="tag">${field}</span>`).join("")}</div><a class="button secondary" href="${personUrl(person)}">לדף הדמות</a></div></article>`).join("");
}

function renderTimeline() {
  const list = document.querySelector("#timeline-list");
  if (!list) return;
  list.innerHTML = people.map(person => `<article class="timeline-item"><div class="timeline-date">${person.years}</div><h3>${person.name}</h3><p><strong>${person.region}</strong> — ${person.summary}</p><a class="button secondary" href="${personUrl(person)}">לדף הדמות</a></article>`).join("");
}

function renderGallery() {
  const grid = document.querySelector("#gallery-grid");
  if (!grid) return;
  grid.innerHTML = people.map(person => `<article class="gallery-card" data-name="${person.name}" data-image="${getBasePath()}${person.image}">${imageBlock(person, "gallery-image")}<div class="person-body"><h3>${person.name}</h3><p>${person.period}</p></div></article>`).join("");
}

function renderPersonPage() {
  const container = document.querySelector("#person-page");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("person") || "ezra";
  const pseudoPerson = { slug };
  const dedicated = dedicatedPage(pseudoPerson);
  if (dedicated) { window.location.href = dedicated; return; }
  const person = people.find(item => item.slug === slug) || people[16];
  document.title = `${person.name} — Jewish Benefactors History`;
  container.innerHTML = `<section class="section page-title"><p class="eyebrow">דף דמות מחקרי</p><h1>${person.name}</h1><p>${person.latin} · ${person.years} · ${person.region}</p></section><section class="section content-grid"><article class="content-card"><h2>תקציר</h2><p>${person.summary}</p></article><article class="content-card"><h2>אטימולוגיה ופירוש השם</h2><p>${person.etymology}</p></article><article class="content-card"><h2>תחומי פעולה</h2><div class="tags">${person.fields.map(field => `<span class="tag">${field}</span>`).join("")}</div></article><article class="content-card"><h2>השפעה על יהודי ארץ ישראל</h2><p>סעיף זה מיועד להרחבה מחקרית: כיצד הדמות השפיעה על חיים יהודיים בארץ ישראל, על מוסדות, קהילות, התיישבות, לימוד תורה, כלכלה או זהות יהודית.</p></article><article class="content-card"><h2>השפעה על יהודי התפוצות</h2><p>סעיף זה מיועד להרחבה מחקרית: כיצד הדמות השפיעה על קהילות יהודיות בעולם, על זכויות, חינוך, הצלה, קשרים דיפלומטיים או הנהגה קהילתית.</p></article><article class="content-card"><h2>מקורות ותמונות</h2><p>בשלב הבא נוסיף לכל דמות מקורות נפרדים, קישורים לתמונות בנחלת הכלל, ושמות קבצים מוכנים לגיטהאב.</p></article></section>`;
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!button || !links) return;
  button.addEventListener("click", () => links.classList.toggle("open"));
}

function setupModal() {
  const modal = document.querySelector("#image-modal");
  if (!modal) return;
  const title = modal.querySelector("#modal-title");
  const img = modal.querySelector("#modal-image");
  const close = modal.querySelector(".close-modal");
  document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => {
      title.textContent = card.dataset.name;
      img.src = card.dataset.image;
      img.alt = card.dataset.name;
      modal.classList.add("open");
    });
  });
  close.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", event => { if (event.target === modal) modal.classList.remove("open"); });
}

setupPeopleDropdown();
renderPeopleGrid();
renderTimeline();
renderGallery();
renderPersonPage();
setupMenu();
setTimeout(setupModal, 0);
