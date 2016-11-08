/*

Name : popup.js
Version : 1.1
Contributors : Snigdha Prakash
			   Sai Raghuram Prabhu
			   Prachi Prakash
Feature Changes : 
Date 			Description
06/11/2016		Save the data on reload of the plugin
08/11/2016		Added appropriate title on task completion


*/


$(document).ready(function() {
  
  // To save and reload
  function update() { 
    var toDoList = [];
    $("ul").each(function(){
       toDoList.push(this.innerHTML);
    })
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  }

  $("#clearTasks").click(function(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  });

  loadAfterRefresh();

  function loadAfterRefresh() {
    if (localStorage.getItem('todoList')){
        var toDoList = JSON.parse(localStorage.getItem('todoList'));
        $("ul").each(function(listItem){
          this.innerHTML = toDoList [listItem];
        })
    }
  }
// });

// Checked on click
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
	update();
	if(ev.target.classList == 'checked') { 
		$('.checked').attr('title', 'Click to undo');
	} else {
		$('li').removeAttr( "title" );
		$('.checked').attr('title', 'Click to undo');
	}
  }
}, false);


// Create a new task list
$("#addTask").click(function(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  console.log(t);
  li.appendChild(t);
  if (inputValue === '') {
    $('#alert').html("To do List cannot be empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
  } else {
    document.getElementById("taskUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
  update();
});

});
