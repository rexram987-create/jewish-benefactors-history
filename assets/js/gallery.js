const galleryItems = [
  {name:"עזרא הסופר",years:"המאה ה־5 לפנה״ס",page:"people/ezra.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ezra%20Reads%20the%20Law.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"נחמיה",years:"המאה ה־5 לפנה״ס",page:"people/nehemiah.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Nehemiah.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"רבי יהודה הנשיא",years:"135–217 בערך",page:"people/yehuda-hanasi.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Judah%20ha-Nasi.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"חסדאי אבן שפרוט",years:"915–970 בערך",page:"people/hasdai-ibn-shaprut.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Hasdai%20ibn%20Shaprut.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"שמואל הנגיד",years:"993–1056",page:"people/shmuel-hanagid.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Samuel%20ha-Nagid.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"יצחק אברבנאל",years:"1437–1508",page:"people/isaac-abravanel.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Isaac%20Abrabanel.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"דונה גרציה נשיא",years:"1510–1569",page:"people/dona-gracia-nasi.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gracia%20Mendes%20Nasi.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"יוסף נשיא",years:"1524–1579",page:"people/joseph-nasi.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Joseph%20Nasi.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"מנשה בן ישראל",years:"1604–1657",page:"people/menasseh-ben-israel.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Menasseh%20Ben%20Israel.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"משה מנדלסון",years:"1729–1786",page:"people/moses-mendelssohn.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moses%20Mendelssohn.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"דוד פרידלנדר",years:"1750–1834",page:"people/david-friedlander.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/David%20Friedlaender.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"משה מונטיפיורי",years:"1784–1885",page:"people/moses-montefiore.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moses%20Montefiore.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"אדולף כרמיה",years:"1796–1880",page:"people/adolphe-cremieux.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Adolphe%20Cremieux.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"קרל נטר",years:"1826–1882",page:"people/charles-netter.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Charles%20Netter.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"אדמונד ג׳יימס דה רוטשילד",years:"1845–1934",page:"people/edmond-de-rothschild.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Edmond%20James%20de%20Rothschild.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"הרב יהודה אלקלעי",years:"1798–1878",page:"people/yehuda-alkalai.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Yehuda%20Alkalai.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."},
  {name:"הרב צבי הירש קלישר",years:"1795–1874",page:"people/tzvi-hirsch-kalischer.html",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Zvi%20Hirsch%20Kalischer.jpg",credit:"תמונה מ־Wikimedia Commons; יש לבדוק את הרישיון בדף הקובץ."}
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
