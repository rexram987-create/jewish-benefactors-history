const galleryItems = [
  {name:"עזרא הסופר",years:"המאה ה־5 לפנה״ס",page:"people/ezra.html",img:"images/ezra-the-scribe.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"נחמיה",years:"המאה ה־5 לפנה״ס",page:"people/nehemiah.html",img:"images/nehemiah.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"רבי יהודה הנשיא",years:"135–217 בערך",page:"people/yehuda-hanasi.html",img:"images/judah-ha-nasi.jpg",credit:"תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."},
  {name:"חסדאי אבן שפרוט",years:"915–970 בערך",page:"people/hasdai-ibn-shaprut.html",img:"images/hasdai-ibn-shaprut.jpg",credit:"תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."},
  {name:"שמואל הנגיד",years:"993–1056",page:"people/shmuel-hanagid.html",img:"images/samuel-ha-nagid.jpg",credit:"תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."},
  {name:"יצחק אברבנאל",years:"1437–1508",page:"people/isaac-abravanel.html",img:"images/isaac-abravanel.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"דונה גרציה נשיא",years:"1510–1569",page:"people/dona-gracia-nasi.html",img:"images/dona-gracia-mendes-nasi-colorized-portrait.png",credit:"Portrait of Doña Gracia Mendes Nasi, by Rubyleah, Wikimedia Commons, CC BY-SA 4.0. Colorized/edited version for Jewish Benefactors History."},
  {name:"יוסף נשיא",years:"1524–1579",page:"people/joseph-nasi.html",img:"images/joseph-nasi.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"מנשה בן ישראל",years:"1604–1657",page:"people/menasseh-ben-israel.html",img:"images/menasseh-ben-israel.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"משה מנדלסון",years:"1729–1786",page:"people/moses-mendelssohn.html",img:"images/moses-mendelssohn.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"דוד פרידלנדר",years:"1750–1834",page:"people/david-friedlander.html",img:"images/david-friedlander.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"משה מונטיפיורי",years:"1784–1885",page:"people/moses-montefiore.html",img:"images/moses-montefiore.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"אדולף כרמיה",years:"1796–1880",page:"people/adolphe-cremieux.html",img:"images/adolphe-cremieux.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"קרל נטר",years:"1826–1882",page:"people/charles-netter.html",img:"images/charles-netter.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"אדמונד ג׳יימס דה רוטשילד",years:"1845–1934",page:"people/edmond-de-rothschild.html",img:"images/edmond-de-rothschild.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"הרב יהודה אלקלעי",years:"1798–1878",page:"people/yehuda-alkalai.html",img:"images/yehuda-alkalai.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."},
  {name:"הרב צבי הירש קלישר",years:"1795–1874",page:"people/tzvi-hirsch-kalischer.html",img:"images/tzvi-hirsch-kalischer.jpg",credit:"תמונה מעובדת/צבועה לאתר Jewish Benefactors History. יש להוסיף קרדיט מקור ורישיון לפי קובץ המקור."}
];

function renderGalleryCards(){
  const grid=document.querySelector('#gallery-grid');
  if(!grid)return;
  grid.innerHTML=galleryItems.map((item,index)=>`<article class="gallery-card rich-gallery-card" tabindex="0" data-index="${index}"><div class="gallery-photo-wrap"><img class="gallery-photo" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="gallery-fallback" style="display:none;">${item.name}</div></div><div class="person-body"><p class="person-meta">${item.years}</p><h3>${item.name}</h3><p class="gallery-credit-short">${item.credit}</p><a class="button secondary" href="${item.page}" onclick="event.stopPropagation();">לדף הדמות</a></div></article>`).join('');
}

function setupGalleryModal(){
  const modal=document.querySelector('#image-modal');
  if(!modal)return;
  const title=document.querySelector('#modal-title');
  const image=document.querySelector('#modal-image');
  const credit=document.querySelector('#modal-credit');
  const link=document.querySelector('#modal-person-link');
  const close=modal.querySelector('.close-modal');
  function openModal(index){
    const item=galleryItems[index];
    if(!item)return;
    title.textContent=`${item.name} — ${item.years}`;
    image.style.display='block';
    image.src=item.img;
    image.alt=item.name;
    image.onerror=()=>{image.style.display='none';};
    if(credit)credit.textContent=item.credit;
    if(link)link.href=item.page;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }
  document.querySelectorAll('.rich-gallery-card').forEach(card=>{
    card.addEventListener('click',()=>openModal(card.dataset.index));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(card.dataset.index);}});
  });
  close.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');});
  modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}});
}

renderGalleryCards();
setupGalleryModal();
