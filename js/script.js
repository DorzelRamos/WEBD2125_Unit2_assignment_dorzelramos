
  var request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  }
  else {
    request = new ActiveXObject ('Microsoft.XMLHTTP');
  }
    request.open('GET', 'data.json');
    request.onreadystatechange = function() {
        if ((request.readyState===4) && (request.status===200)) {
            // var modify = document.getElementsByTagName('ul')
            // [1].getElementsByTagName('li');
            // var modify = document.getElementsByTagName('li')
            // modify[2].innerHTML = request.responseText;
            // console.log(request.responseXML);
            // console.log(request.responseXML.getElementsByTagName('name')[1]);
            // console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0]);
            // console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

            // var items = request.responseXML.getElementsByTagName('name');
            // var output = '<ul>';
            // for (var i = 0; i < items.length; i++) {
            //     output += '<li>' + items[i].firstChild.nodeValue + '</li>';
            // }
            // output += '</ul>'
            // document.getElementById('container').innerHTML = output;

        // You can get individual elements or the whole thing
        // you can also get the name without the quotes by using firstChild.nodeValue

         //Starts at 0, making 2 the third number in the array
        // if u make 2 lists it also counts those

            // for (var i = 0; i < modify.length; i++) {
            //     modify[i].innerHTML = request.responseText
            // }

            var items = JSON.parse(request.responseText);
            console.log(items);
            // stopped at 1:29 of the JSON reading video
        }
    }
    request.send();
