// Create Collections and list views
var taskCollection = new TaskCollection();
var companyCollection = new CompanyCollection();
var jobCollection = new JobCollection();

var taskListView = new TaskListView({ collection: taskCollection });
var companyListView = new CompanyListView({ collection: companyCollection });
var jobListView = new JobListView({ collection: jobCollection });

$().ready(function() {

  $('#new-task').click(function() {
    // Render new task form, append to hidden-div
    var view = new NewTaskView();
    $('.hidden-div').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    // Reveal hidden-div
    $('.hidden-div').fadeIn("slow");
  });

  // Search box functionality:
  $('#search-task').val("Search");
  $('#search-task').focus(function() {
    $(this).val("");
  });
  $('#search-task').focusout(function() {
      $(this).val("Search");
  });
  $('#search-task').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      var searchResult = taskCollection.where({ title: $(this).val() });
      $(this).val("");
      var searchResultCollection = new TaskCollection(searchResult);
      var view = new TaskListView({collection: searchResultCollection});
      $('.hidden-div').html(view.render().el);
      $('.hidden-div').fadeIn('slow');
    }
  });
  
  // Populate task collection with AJAX call
  taskCollection.fetch()
  companyCollection.fetch()
  jobCollection.fetch()
  $('.task-list-container').html(taskListView.el);

  // Navigation tab click handlers:
  $('#jobs-tab').click(function() {
    $('.task-list-container').html(jobListView.render().el);
  })

  $('#tasks-tab').click(function() {
    $('.task-list-container').html(taskListView.render().el);
  })

  $('#companies-tab').click(function() {
    $('.task-list-container').html(companyListView.render().el);
  })

  // Make logout link submit logout form
  $('#logout-link').click(function() {
    $('#logout').submit();
  });

});
