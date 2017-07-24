function handleLoad(event) {
    console.log('Loaded import: ' + event.target.href);
    //var link = document.querySelector('link[id="VueContentImport"]');
    var link = document.getElementById("VueContentImport");
    var doc = link.import;
    /* Grab DOM from imported document - all content of the DIV elelement with ID = content*/
    var div = doc.querySelector('#content');
    var clone = div.cloneNode(true);
    document.getElementById('app').appendChild(clone);
}

function init() {
  initVue();
}/* init */
