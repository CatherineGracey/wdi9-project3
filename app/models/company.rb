class Company < ApplicationRecord
  belongs_to :user
  has_many :jobs
  has_many :tasks

  def create_default_tasks user_id
    tasks = [{
      title: "Follow company on LinkedIn",
      desc: "Many companies list vacancies on LinkedIn. By following these companies you will be alerted to any vacancies in your news feed as soon as they are advertised."
    },{
      title: "Connect with hiring manager on LinkedIn",
      desc: "Many hiring managers will look for new employees from their networks before advertising a position. By connecting with the hiring manager, you increase your chances of being considered for unadvertised jobs."
    }]
    tasks.each do |task|
      t = Task.new
      t.title = task[:title]
      t.desc = task[:desc]
      t.due = Time.now + 7.days
      t.complete = false
      t.user_id = user_id
      t.company = self
      t.save
    end
  end
end
