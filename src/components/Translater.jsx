export const Translater = () => {
    function googleTranslateElementInit() {
        new google.translate.TranslateElement('google_translate_element');
    }
    return (
        <div>
            <div id="google_translate_element"></div>
            <script type="text/javascript" src={`http://translate.google.com/translate_a/element.js?cb=${googleTranslateElementInit}`}></script>
        </div>
    )
}