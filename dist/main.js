(()=>{"use strict";function e(e,t){let n=!1;return n=t.test(e),n}document.getElementById("fizetesBtn").addEventListener("click",(()=>{let t=/^[\p{L} ]+$/,n=[e(document.getElementById("nevInput").value,t),e(document.getElementById("orszagInput").value,t),e(document.getElementById("varosInput").value,t),e(document.getElementById("utcaHazszamInput").value,/^[\p{L}0-9 -]+$/),e(document.getElementById("iranyitoSzamInput").value,/^[A-Z0-9]+$/),e(document.getElementById("bankKartyaInput").value,/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/),e(document.getElementById("ellenorzoInput").value,/^[0-9]{3}$/),e(document.getElementById("bankKartyaNevInput").value,t)],u=n.includes(!1);if(console.log(n),u)document.getElementById("hibaMegjelenites").textContent="hiba";else{document.body.innerHTML="";let e=document.createElement("div");e.classList.add("sikerMegjelenit"),e.textContent="siker",document.body.appendChild(e)}}))})();