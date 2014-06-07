var $textarea = $('#textarea');
var $wordcount = $('#wordcount');

function computeWordCount(text) {
    text = text.trim();
    var words = text.split(/\s+/);
    return words.length;
}

var cb = function() {
    var count = computeWordCount($textarea.val());
    $wordcount.text(count);
}

$textarea.on('change', cb);
$textarea.on('keyup', cb);

