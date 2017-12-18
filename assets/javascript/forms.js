$(function() {
  /* * * * * * * * * * * * * * * * */
  /* Generic form handling         */
  /* * * * * * * * * * * * * * * * */
  $('form[data-submit="ajax"]').submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $form.find('._form-error').hide()
    $.post($form.attr('action'), $form.serialize())
    .done(function(data) {
      $form.find('._form-content').hide()
      $form.find('._form-thank-you').show()
    })
    .fail(function(xhr){
      $form.find('._form-error').show()
    });
  });
});