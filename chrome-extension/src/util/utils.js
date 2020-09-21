export function getParameterByName(name, url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(url);
    const parameter = results[1].replace(/\+/g, ' ');
    return parameter;
}