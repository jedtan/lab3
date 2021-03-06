'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project-description').hide();
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Omaha!");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);

}

function updateProject(e){
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID + " .project-description").text(newText);
}

function projectClick(e) { 
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

       var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.is(":visible")) { 
       description.fadeOut();
    } else { 
       description.fadeIn();
    }
}