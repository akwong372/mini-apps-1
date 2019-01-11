$(document).ready(function () {
  $('#jsonUpload').on('click', function (e){
    console.log('clicked')
  })
  $('#mainForm').on('submit', function (e) {
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:3000/',
      data: new FormData($('form')[0]),
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        $('#successErrorMsg').text('Success!');
        // $('#downloadBtn').prop('disabled', false);
        $('#downloadBtn').text('Download CSV')
        $('footer').text(data);
      },
      error: function (data) {
        console.log('error');
      }
    });
  });

  // $('#downloadBtn').on('click', function (e) {
  //   e.preventDefault();

  //   $.ajax({
  //     method: 'GET',
  //     url: 'http://127.0.0.1:3000/',
  //     success: (data) => {
  //       console.log(data)
  //     },
  //     error: function (data) {
  //       console.log('error');
  //     }
  //   });
  // });
});