$('#add').click( function() {
   var Task = $('#task').val();
  if($("#task").val() == '') {
    $('#alert').html("To do List cannot be empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
   $('#todos').prepend("<li style='list-style:none;'><input id='check' name='check' type='checkbox'/>" + Task + "</li>");
   $('#form')[0].reset();
   var todos = $('#todos').html();
   localStorage.setItem('todos', todos);
   return false;
});

if(localStorage.getItem('todos')) {
$('#todos').html(localStorage.getItem('todos'));
}

$('#clear').click( function() {
window.localStorage.clear();
location.reload();
return false;
});