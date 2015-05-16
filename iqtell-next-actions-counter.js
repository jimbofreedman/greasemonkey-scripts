// ==UserScript==
// @name         IQTELL Next Actions counter
// @namespace    http://www.jlf.me
// @version      0.1
// @description  Adds the number of items in the Next Actions header
// @author       Jimbo Freedman
// @match        https://my.iqtell.com/iqtell/workspace
// @grant        none
// ==/UserScript==

(function() {
    setCount = function() {
        var header = document.getElementById('ext-gen102');
        
        if (header != null) {
            var nextActionList = document.getElementById('ext-gen136');
            header.innerHTML = "Next Actions (" + nextActionList.childNodes.length.toString() + ")";
        }
        
        window.setTimeout(function() { 
            setCount(); 
        }, 10000);
    };
    
    setCount();
})();

