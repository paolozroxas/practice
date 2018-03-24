$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var paragraphs = $('p');
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.innerText;
    var words = text.split(' ');
    var spans = words.map(function(word) {
      return '<span>' + word + '</span>';
    });
    var newText = spans.join('');
    paragraph.innerHTML = newText;
  }


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  setInterval(function() {
    var spans = $('span');
    for (var i = 0; i < spans.length; i++) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      $(spans[i]).css({ 'background-color': 'rgba(' + r + ',' + g + ',' + b + ')' });
    }
  }, 1000);

});