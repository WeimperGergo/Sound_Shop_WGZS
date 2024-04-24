import { adminHtmlOsszeallit, elotteMegjelenit, utanaMegjelenit } from "./fuggvenyek.js";

const bodyELEM = $("body");
if (window.innerWidth <= 1000) elotteMegjelenit(bodyELEM, `<a href="admin.html" class="feluletValto" id="adminFelValt"><i class="material-icons">	security</i></a><br>`);
else elotteMegjelenit(bodyELEM, `<a href="admin.html" class="feluletValto" id="adminFelValt">Admin felület</a><br>`);
