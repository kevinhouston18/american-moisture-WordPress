function printit() {
    if (window.print) {
        window.print();
    } else {
        var WebBrowser =
            '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
        document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
        WebBrowser1.ExecWB(6, 2); //Use a 1 vs. a 2 for a prompting dialog box    WebBrowser1.outerHTML = "";  
    }
}