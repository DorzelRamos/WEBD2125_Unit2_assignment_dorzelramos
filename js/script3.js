$.getJSON('data.json',function(data){
    // console.log(data);

    var output = '<ul class="searchresults">';
    $.each(data, function(key, val) {
        output += '<li>';
        output += '<h2>' + val.name + '</h2>';
        output += '<img src="planet_images/' + val.name + '_nasa.jpg" alt="' + val.name + '"/>'
        output += '<p>' + val.bio
        output += '</li>';
    });
    output += '</ul>';
    $('#container').html(output);
}); // get JSON