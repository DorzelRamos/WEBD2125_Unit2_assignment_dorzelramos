$('#search').keyup(function(data) {
    var searchField = $('#search').val();
    // console.log(searchField);
    var myExp = new RegExp(searchField, "i");
    $.getJSON('data.json',function(data){
        // console.log(data);
    
        var output = '<ul class="searchresults">';
        $.each(data, function(key, val) {
            if ((val.name.search(myExp) != -1) || 
                (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="planet_images/' + val.name + '_nasa.jpg" alt="' + val.name + '"/>'
                output += '<p>' + val.bio
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#container').html(output);
    }); // get JSON
});
