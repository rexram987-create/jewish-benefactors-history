const personImages = {
  "ezra.html": {
    img: "../assets/images/ezra-the-scribe.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "nehemiah.html": {
    img: "../assets/images/nehemiah.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "yehuda-hanasi.html": {
    img: "../assets/images/judah-ha-nasi.jpg",
    credit: "תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."
  },
  "hasdai-ibn-shaprut.html": {
    img: "../assets/images/hasdai-ibn-shaprut.jpg",
    credit: "תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."
  },
  "shmuel-hanagid.html": {
    img: "../assets/images/samuel-ha-nagid-andalusian-poet-vizier-portrait.png",
    credit: "תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."
  },
  "isaac-abravanel.html": {
    img: "../assets/images/isaac-abravanel.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "dona-gracia-nasi.html": {
    img: "../assets/images/dona-gracia-mendes-nasi-colorized-portrait.png",
    credit: "Portrait of Doña Gracia Mendes Nasi, by Rubyleah, Wikimedia Commons, CC BY-SA 4.0. Colorized/edited version for Jewish Benefactors History."
  },
  "joseph-nasi.html": {
    img: "../assets/images/joseph-nasi.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "menasseh-ben-israel.html": {
    img: "../assets/images/menasseh-ben-israel.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "moses-mendelssohn.html": {
    img: "../assets/images/moses-mendelssohn.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "david-friedlander.html": {
    img: "../assets/images/david-friedlander.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "moses-montefiore.html": {
    img: "../assets/images/moses-montefiore.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "adolphe-cremieux.html": {
    img: "../assets/images/adolphe-cremieux.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "charles-netter.html": {
    img: "../assets/images/charles-netter.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "edmond-de-rothschild.html": {
    img: "../assets/images/edmond-de-rothschild.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "yehuda-alkalai.html": {
    img: "../assets/images/yehuda-alkalai.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  },
  "tzvi-hirsch-kalischer.html": {
    img: "../assets/images/tzvi-hirsch-kalischer.jpg",
    credit: "תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."
  }
};

function injectPersonImage(){
  const fileName = window.location.pathname.split('/').pop();
  const item = personImages[fileName];
  const titleSection = document.querySelector('.page-title');
  if(!item || !titleSection || document.querySelector('.person-portrait-card')) return;

  const portrait = document.createElement('section');
  portrait.className = 'section person-portrait-card';
  portrait.innerHTML = `
    <figure class="person-portrait-figure">
      <img src="${item.img}" alt="תמונה של ${document.querySelector('h1')?.textContent || 'הדמות'}" loading="eager" onerror="this.closest('.person-portrait-card').style.display='none';">
      <figcaption>${item.credit}</figcaption>
    </figure>
  `;

  titleSection.insertAdjacentElement('afterend', portrait);
}

document.addEventListener('DOMContentLoaded', injectPersonImage);
