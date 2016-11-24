// Create Collections and list views
var taskCollection = new TaskCollection();
var companyCollection = new CompanyCollection();
var jobCollection = new JobCollection();
var jobTasksCollection = new TaskCollection();
var companyTasksCollection = new TaskCollection();
var companyJobsCollection = new JobCollection();

var taskListView = new TaskListView({ collection: taskCollection });
var companyListView = new CompanyListView({ collection: companyCollection });
var jobListView = new JobListView({ collection: jobCollection });

$().ready(function() {
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('.hidden-div').fadeOut();
      $('.x').fadeOut();
    }
  });

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
    $('select').material_select();
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

  // Search box functionality:
  $('#search-task').val("Search");
  $('#search-task').focus(function() {
    $(this).val("");
  });
  $('#search-task').focusout(function() {
      $(this).val("Search");
  });

  $('#search-task').bind('keyup', function(e) {
    if (e.keyCode == 13) {
      // var view = new TaskListView({});
      // debugger
      var strQueryInput = $(this).val().toLowerCase();
      var indexOfSymbol = strQueryInput.indexOf(":");
      var strSplitedQueryInput = strQueryInput.split(":", indexOfSymbol);
      if (indexOfSymbol == -1) { //task search... by default..
        var arrFilteredTaskCollection = _.filter(taskCollection.toJSON(), function(Object) {
          return Object.title.toLowerCase().trim().includes(strQueryInput.trim());
        });

        var objFilteredTaskCollection = new TaskCollection(arrFilteredTaskCollection);
        var viewFilteredTaskList = new TaskListView({ collection: objFilteredTaskCollection });
        debugger
        $('.hidden-div').html(viewFilteredTaskList.render().el);
      } 
      else {
        if (strSplitedQueryInput[0].trim() == "company") { //Place company search here..
          var arrFilteredCompanyCollection = _.filter(companyCollection.toJSON(), function(Object){
            return Object.name.toLowerCase().trim().includes(strSplitedQueryInput[1].trim());
          });

          var objFilteredCompanyCollection = new CompanyCollection(arrFilteredCompanyCollection);
          var viewFilteredCompanyCollection = new TaskListView({ collection: objFilteredCompanyCollection });
          debugger
          $('.hidden-div').html(viewFilteredCompanyCollection.render().el);
        } 
        else if (strSplitedQueryInput[0].trim() == "job") { //job search..
          var arrFilteredJobCollection = _.filter(jobCollection.toJSON(), function(Object) {
            return Object.title.toLowerCase().trim().includes(strSplitedQueryInput[1].trim());
          });

          var objFilteredJobCollection = new JobCollection(arrFilteredJobCollection);
          var viewFilteredJobCollection = new TaskListView({ collection: objFilteredJobCollection });
          debugger
          $('.hidden-div').html(viewFilteredJobCollection.render().el);
        }
      }
      
      $('.hidden-div').fadeIn();
      $('.x').fadeIn();
    }
  });

});
