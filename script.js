function biglietto_unico() {
    document.getElementById("quantita_biglietti_div").style.display = "none";


}

function piu_biglietti() {
    document.getElementById("quantita_biglietti_div").style.display = "block";

}


function aggiungi_codice_fiscale() {
    let numero_cf = document.getElementById('numero_codici_fiscali').getAttribute("value");
    if (numero_cf == 4) {
        alert("massimo numero di biglietti raggiunto")
    } else {
        numero_cf++;
        document.getElementById("numero_codici_fiscali").setAttribute("value", numero_cf);
        id = "cf" + String(numero_cf);
        document.getElementById(id).style.display = "block";

    }

}

function rimuovi_codice_fiscale() {
    let numero_cf = document.getElementById('numero_codici_fiscali').getAttribute("value");
    if (numero_cf > 1) {
        numero_cf--;
        document.getElementById("numero_codici_fiscali").setAttribute("value", numero_cf);
        id = "cf" + String(numero_cf + 1);
        document.getElementById(id).style.display = "none";

    }

}