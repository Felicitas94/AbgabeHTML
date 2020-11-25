function enableButton() {
    var btn;
    var kennzeichen;

    btn = document.getElementById("body_btnSpeichern");
    kennzeichen = document.getElementById("DropDownListKfzKennzeichen");

    if (btn != null) {
        if(kennzeichen.value != "")
        btn.disabled = false;
    }
}

function containsZiffer(sender) {
    var senderValue;

    senderValue = sender.value;

    if (!isNumeric(senderValue)) {
        sender.value = "";
    }
}

function containsZifferUndKomma(sender) {
    var senderValue;

    senderValue = sender.value;
    var substring = ",";

    if (senderValue.indexOf(substring) > -1) {
        sender.value = "";
    }
    else {
        if (!isNumeric(senderValue)) {
            sender.value = "";
        }
    }
}

function setGefahrenKM(sender) {

    var senderValue;
    senderValue = sender.value;

    if (!isNumeric(senderValue)) {
        sender.value = "";
    }
    else {
        var valueaktuell = document.getElementById("body_txtBoxaltuellerkmStand").value;
        var valueletzter = document.getElementById("body_txtBoxLetzterkmStand").value;

        if (valueaktuell != "" & valueletzter != "") {

            var ergebniss = valueaktuell - valueletzter;
            if (ergebniss >= 0) {
                document.getElementById("body_txtBoxGefahrenekm").value = ergebniss;
            }
            else {
                document.getElementById("body_txtBoxGefahrenekm").value = 0;
            }
        }
    }
}

function setPS(sender) {

    var senderValue;
    senderValue = sender.value;

    if (!isNumeric(senderValue)) {
        sender.value = "";
    }
    else {
        var ps = document.getElementById("body_txtBoxPS");
        var kw = document.getElementById("body_txtBoxKW");

        if (kw.value != "") {
            var ergebnis = kw.value * 1.35962;
            ergebnis = ergebnis.toFixed(0);
            ps.value = ergebnis.replace('.', ",");
        }
    }
}

function setKW(sender) {

    var senderValue;
    senderValue = sender.value;

    if (!isNumeric(senderValue)) {
        sender.value = "";
    }
    else {
        var ps = document.getElementById("body_txtBoxPS");
        var kw = document.getElementById("body_txtBoxKW");

        if (ps.value != "") {
            var ergebnis = ps.value * 0.735499;
            ergebnis = ergebnis.toFixed(0);
            kw.value = ergebnis.replace('.', ",");
        }
    }
}

// Entfernt . und , damit überprüft werden kann ob der Eingegebene Wert nur aus Ziffern besteht
function isNumeric(n) {
    var n = n.replace(',', '');
    var n = n.replace('.', '');
    return !isNaN(parseFloat(n)) && isFinite(n);
}