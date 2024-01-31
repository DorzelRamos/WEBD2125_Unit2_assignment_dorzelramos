// $('.container').load('data.txt');
// $('.container:first').load('data.txt');
// $('.container:even').load('data.txt');

// ///////////// jQuery can be used to select multiple and different objects

$.getJSON('data.json', function(data) {
    // console.log(data);
    var output = '<ul>';
    $.each(data, function(key, val) {
        output += '<li>' + val.name + '</li>'
    });
    output +='</ul>';
    // $('#container').html(output);
    $('#container').append(output);
    // $('#container').prepend(output);

    //append() and prepend() can be used to place elements before or after objects in the HTML
});