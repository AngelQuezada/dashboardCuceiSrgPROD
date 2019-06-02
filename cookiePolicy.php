<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
<script async src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
<script async defer>
var URL = localStorage.getItem("url");
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#237afc"
    },
    "button": {
      "background": "#fff",
      "text": "#237afc"
    }
  },
  "theme": "classic",
  "content": {
    "message": "Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia.",
    "dismiss": "Bien",
    "link": "Leer más",
    "href": `${URL}/about-cookies.html`,
  },
})});
</script>