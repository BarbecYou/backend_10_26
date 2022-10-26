function regexEllenoriz(szoveg, regex){
    let helyes = false;
    helyes = regex.test(szoveg);
    return helyes;
};

document.getElementById('fizetesBtn').addEventListener('click', () => {
    let name_country_city_Pattern = /^[a-zA-Z ]+$/;
    console.log(regexEllenoriz(document.getElementById('nevInput').value, name_country_city_Pattern));
    console.log(regexEllenoriz(document.getElementById('orszagInput').value, name_country_city_Pattern));
    console.log(regexEllenoriz(document.getElementById('varosInput').value, name_country_city_Pattern));
    let streetHousePattern = /^[a-zA-Z0-9 -]+$/;
    console.log(regexEllenoriz(document.getElementById('utcaHazszamInput').value, streetHousePattern));
    let postCodePattern = /^[A-Z0-9]+$/;
    console.log(regexEllenoriz(document.getElementById('iranyitoSzamInput').value, postCodePattern));
    let cardNumberPattern = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
    console.log(regexEllenoriz(document.getElementById('bankKartyaInput').value, cardNumberPattern));
});