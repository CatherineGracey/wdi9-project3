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
    $('select').material_select();
    // Reveal hidden-div
    $('.hidden-div').fadeIn();
    $('.x').fadeIn();
  });

  $('#new-job').click(function() {
    // Render new task form, append to hidden-div
    var view = new NewJobView();
    $('.hidden-div').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    // Reveal hidden-div
    $('.hidden-div').fadeIn();
    $('.x').fadeIn();
  });

  $('#new-company').click(function() {
    // Render new task form, append to hidden-div
    var view = new NewCompanyView();
    $('.hidden-div').html(view.render().el);
    // Reveal hidden-div
    $('.hidden-div').fadeIn();
    $('.x').fadeIn();
  });

  $('.x').click(function() {
    $('.hidden-div').fadeOut();
    $('.x').fadeOut();
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
      var queryInput = $(this).val();
      // debugger
      var taskCollectionJson = taskCollection.toJSON();
      var filteredTask = _.filter(taskCollectionJson, function(Object) {

         return Object.title.includes(queryInput);
      })

      var filteredTaskCollection = new TaskCollection(filteredTask);
      var view = new TaskListView({ collection: filteredTaskCollection });

      $('.hidden-div').html(view.render().el);
      $('.hidden-div').fadeIn();
      $('.x').fadeIn();


    }
  });

  // Populate collections with AJAX call
  taskCollection.fetch()
  companyCollection.fetch()
  jobCollection.fetch()
  $('.task-list-container').html(taskListView.el);

  // Navigation tab click handlers:
  $('#jobs-tab').click(function() {
    $('.task-list-container').html(jobListView.render().el);
    // Display add job button
    $('#new-job').fadeIn();
    $('#new-task').hide();
    $('#new-company').hide();
  })

  $('#tasks-tab').click(function() {
    $('.task-list-container').html(taskListView.render().el);
    // Display add task button
    $('#new-task').fadeIn();
    $('#new-job').hide();
    $('#new-company').hide();
  })

  $('#companies-tab').click(function() {
    $('.task-list-container').html(companyListView.render().el);
    // Display add task button
    $('#new-company').fadeIn();
    $('#new-job').hide();
    $('#new-task').hide();
  })

  // Make logout link submit logout form
  $('#logout-link').click(function() {
    $('#logout').submit();
  });


});
