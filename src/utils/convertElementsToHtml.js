
function jsonToHtml(element) {
    let voidElements = ['img']
    let html = `<${element.type} id="${element.id}" style="${convertStyleToString(element.style)}">${element.value || ''}`;

    // Recursively generate HTML for each child element
    if (element.children && element.children.length > 0) {
        element.children.forEach((child) => {
            html += jsonToHtml(child);
        });
    }

    if (voidElements?.includes(element?.type)) {
        html += `/>`;
    } else {
        html += `</${element.type}>`;
    }

    return html;
}

function convertStyleToString(styleObj) {
    return Object.entries(styleObj)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ");
}

function convertElementsToHtml(elements) {
    return elements.map(jsonToHtml).join("");
}

export default convertElementsToHtml

