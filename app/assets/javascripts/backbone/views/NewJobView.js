var NewJobView = Backbone.View.extend({

  events: {
    'click #submit-new-job': 'saveNewJob',
  },

  template: HandlebarsTemplates['new_job'],

  render: function() {
    // Compile list of companies
    var data = { companies: [] };
    companyCollection.each(function(company) {
      data.companies.push({ id: company.get('id'), name: company.get('name') });
    });
    var html = this.template(data);
    this.$el.html(html);
    return this;
  },

  saveNewJob: function() {
    var options = {
      url: '/job',
      method: 'post',
      data: {
        title: $('input[name="title"]').val(),
        pros: $('input[name="pros"]').val(),
        cons: $('input[name="cons"]').val(),
        applied: $('input[name="applied"]').val(),
        contact_name: $('input[name="contact_name"]').val(),
        contact_phone: $('input[name="contact_phone"]').val(),
        contact_email: $('input[name="contact_email"]').val(),
        located: $('input[name="located"]').val(),
        salary: $('input[name="salary"]').val(),
        notes: $('input[name="notes"]').val(),
        company_id: parseInt($('select[name="company"]').val())
      }
    }
    $.ajax(options)
    if (options.data.applied) {
      var applied = new Date(options.data.applied);
      options.data.applied = applied.toISOString();
    }
    // Ugly function to get company name if company ID has been selected. Need to refactor.
    if (options.data.company_id) {
      var selectedCompany = companyCollection.filter(function(company) {
        return company.get('id') == options.data.company_id
      })
      options.data.company_name = selectedCompany[0].get('name');
    }
    jobCollection.add(options.data);
    window.scrollTo(0, 0);
    $('.hidden-div').fadeOut();
    $('.x').fadeOut();
  }

});
