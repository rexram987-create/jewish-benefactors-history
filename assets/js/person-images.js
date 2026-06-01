const personImages={
"ezra.html":["../assets/images/ezra-the-scribe.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"nehemiah.html":["../assets/images/nehemiah.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"yehuda-hanasi.html":["../assets/images/judah-ha-nasi.jpg","תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."],
"hasdai-ibn-shaprut.html":["../assets/images/hasdai-ibn-shaprut.jpg","תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."],
"shmuel-hanagid.html":["../assets/images/samuel-ha-nagid-andalusian-poet-vizier-portrait.png","תמונה שנוצרה/עובדה לאתר Jewish Benefactors History."],
"isaac-abravanel.html":["../assets/images/isaac-abravanel.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"dona-gracia-nasi.html":["../assets/images/dona-gracia-mendes-nasi-colorized-portrait.png","Portrait of Doña Gracia Mendes Nasi, by Rubyleah, Wikimedia Commons, CC BY-SA 4.0. Colorized/edited version for Jewish Benefactors History."],
"joseph-nasi.html":["../assets/images/joseph-nasi.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"menasseh-ben-israel.html":["../assets/images/menasseh-ben-israel.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"moses-mendelssohn.html":["../assets/images/moses-mendelssohn.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"david-friedlander.html":["../assets/images/david-friedlander.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"moses-montefiore.html":["../assets/images/moses-montefiore.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"adolphe-cremieux.html":["../assets/images/adolphe-cremieux.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"charles-netter.html":["../assets/images/charles-netter.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"edmond-de-rothschild.html":["../assets/images/edmond-de-rothschild.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"yehuda-alkalai.html":["../assets/images/yehuda-alkalai.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."],
"tzvi-hirsch-kalischer.html":["../assets/images/tzvi-hirsch-kalischer.jpg","תמונה מעובדת/צבועה לאתר Jewish Benefactors History."]
};
function injectPersonImage(){
 const file=location.pathname.split('/').pop();
 const item=personImages[file];
 const title=document.querySelector('.page-title');
 if(!item||!title||document.querySelector('.person-portrait-card'))return;
 const h1=document.querySelector('h1');
 const sec=document.createElement('section');
 sec.className='section person-portrait-card';
 sec.innerHTML='<figure class="person-portrait-figure"><img src="'+item[0]+'" alt="תמונה של '+(h1?h1.textContent:'הדמות')+'" loading="eager"><figcaption>'+item[1]+'</figcaption></figure>';
 title.insertAdjacentElement('afterend',sec);
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',injectPersonImage);}else{injectPersonImage();}
