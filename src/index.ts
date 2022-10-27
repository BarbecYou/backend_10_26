function regexEllenoriz(szoveg: string, regex: RegExp): boolean{
    let helyes = false;
    helyes = regex.test(szoveg);
    return helyes;
};

document.getElementById('fizetesBtn')!.addEventListener('click', () => {
    let name_country_city_Pattern = /^[\p{L} ]+$/;
    let streetHousePattern = /^[\p{L}0-9 -]+$/;
    let postCodePattern = /^[A-Z0-9]+$/;
    let cardNumberPattern = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    let authNumberPattern = /^[0-9]{3}$/;

    const nevHelyes = regexEllenoriz((document.getElementById('nevInput') as HTMLInputElement).value, name_country_city_Pattern);
    const orszagHelyes = regexEllenoriz((document.getElementById('orszagInput') as HTMLInputElement).value, name_country_city_Pattern);
    const varosHelyes = regexEllenoriz((document.getElementById('varosInput') as HTMLInputElement).value, name_country_city_Pattern);
    const utcaHazszamHelyes = regexEllenoriz((document.getElementById('utcaHazszamInput') as HTMLInputElement).value, streetHousePattern);
    const iranyitoSzamHelyes = regexEllenoriz((document.getElementById('iranyitoSzamInput') as HTMLInputElement).value, postCodePattern);
    const bankKartyaHelyes = regexEllenoriz((document.getElementById('bankKartyaInput') as HTMLInputElement).value, cardNumberPattern);
    const ellenorzoHelyes = regexEllenoriz((document.getElementById('ellenorzoInput') as HTMLInputElement).value, authNumberPattern);
    const bankKartyaNevHelyes = regexEllenoriz((document.getElementById('bankKartyaNevInput') as HTMLInputElement).value, name_country_city_Pattern);


    let list: boolean[] = [nevHelyes, orszagHelyes, varosHelyes, utcaHazszamHelyes
    , iranyitoSzamHelyes, bankKartyaHelyes, ellenorzoHelyes, bankKartyaNevHelyes];
    let vanHiba: boolean = list.includes(false);
    console.log(list);

    if (vanHiba){
        document.getElementById('hibaMegjelenites')!.textContent = "hiba"
    }else {
        document.body.innerHTML = "";
        let sikerMegjelenit = document.createElement('div');
        sikerMegjelenit.classList.add('sikerMegjelenit');
        sikerMegjelenit.textContent = "siker";
        document.body.appendChild(sikerMegjelenit);
    }
});
