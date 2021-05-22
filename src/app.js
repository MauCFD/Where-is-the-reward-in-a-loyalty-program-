

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  // fetch(`${window.origin}/get_all`)
  // .then(function (response) {
  //     return response.json();
  // }).then(function (text) {
  //     console.log('GET response:');
  //     //console.log(text.greeting); 
  // });



//  function init() {

    // reset previous data
    //resetInfo();

    // read in JSON file
  //  d3.json(get_data()).then((data => {
    //    console.log(data)

        // get the id data to the dropdwown menu
        // data.names.forEach((name => {
        //     var option = idSelect.append("option");
        //     option.text(name).property("value");
        // })); 

        // get the first ID from the list for initial charts as a default
        // var initId = idSelect.property("value")

        // // plot charts with initial ID
        // setPlot(initId);
    //}));
//} // close init() function


function data() {
  var appdir = '/get_all';
  var server = "http_127.0.0.1:5000";
  var send_msg = "<p>Sending Numbers</p>";
  var received_msg = "<p>Result retruned</p>";
  console.log(send_msg);
  $('#message').html(send_msg);
  $.ajax({
    type: "GET",
    url:server+appdir
  }).done(function(data) {
    console.log(data);
  });
};