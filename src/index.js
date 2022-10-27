"use strict";
function regexEllenoriz(szoveg, regex) {
    let helyes = false;
    helyes = regex.test(szoveg);
    return helyes;
}
;
document.getElementById('fizetesBtn').addEventListener('click', () => {
    let name_country_city_Pattern = /^[\p{L} ]+$/;
    let streetHousePattern = /^[\p{L}0-9 -]+$/;
    let postCodePattern = /^[A-Z0-9]+$/;
    let cardNumberPattern = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    let authNumberPattern = /^[0-9]{3}$/;
    const nevHelyes = regexEllenoriz(document.getElementById('nevInput').value, name_country_city_Pattern);
    const orszagHelyes = regexEllenoriz(document.getElementById('orszagInput').value, name_country_city_Pattern);
    const varosHelyes = regexEllenoriz(document.getElementById('varosInput').value, name_country_city_Pattern);
    const utcaHazszamHelyes = regexEllenoriz(document.getElementById('utcaHazszamInput').value, streetHousePattern);
    const iranyitoSzamHelyes = regexEllenoriz(document.getElementById('iranyitoSzamInput').value, postCodePattern);
    const bankKartyaHelyes = regexEllenoriz(document.getElementById('bankKartyaInput').value, cardNumberPattern);
    const ellenorzoHelyes = regexEllenoriz(document.getElementById('ellenorzoInput').value, authNumberPattern);
    const bankKartyaNevHelyes = regexEllenoriz(document.getElementById('bankKartyaNevInput').value, name_country_city_Pattern);
    let list = [nevHelyes, orszagHelyes, varosHelyes, utcaHazszamHelyes,
        iranyitoSzamHelyes, bankKartyaHelyes, ellenorzoHelyes, bankKartyaNevHelyes];
    let vanHiba = list.includes(false);
    console.log(list);
    if (vanHiba) {
        document.getElementById('hibaMegjelenites').textContent = "hiba";
    }
    else {
        document.body.innerHTML = "";
        let sikerMegjelenit = document.createElement('div');
        sikerMegjelenit.classList.add('sikerMegjelenit');
        sikerMegjelenit.textContent = "siker";
        document.body.appendChild(sikerMegjelenit);
    }
});
