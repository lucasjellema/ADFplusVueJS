var VueContentClone;

function handleLoad(event) {
    console.log('Loaded import: ' + event.target.href);
    //var link = document.querySelector('link[id="VueContentImport"]');
    var link = document.getElementById("VueContentImport");
    var doc = link.import;
    /* Grab DOM from imported document - all content of the DIV elelement with ID = content*/
    var div = doc.querySelector('#content');
    VueContentClone = div.cloneNode(true);
}

function init() {
  // this function is called when the page load is complete and therefore all DOM elements will have been created
  var targetContainer = document.getElementById('app');
  // now inject the content loaded from the VueContent.html document into the DIV that is the designated container
  targetContainer.appendChild(VueContentClone);
  //now that all Vue.js application related HTML elements are in the DOM, we can initialize Vue.js
  initVue();
}/* init */
