var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var improvedText = text.replace(/Trump/gi, 'Hamburgler');

            if (improvedText !== text) {
                element.replaceChild(document.createTextNode(improvedText), node);
            }
        }
    }
}