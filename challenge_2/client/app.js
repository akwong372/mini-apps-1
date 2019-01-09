$( document ).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    var fileName = $('#jsonUpload').val();

    $.ajax({method: 'POST',
     url: 'http://127.0.0.1:3000/',
     data: new FormData($('form')[0]),
     cache: false,
     contentType: false,
     processData: false,
     success: (data) => {
      //  console.log(data)
      //  console.log($('form')[0])
       $('#successErrorMsg').text('Success!');
       $('footer').text(data);
     },
     error: function(data){
      console.log('error');
  }
       });
  });
});