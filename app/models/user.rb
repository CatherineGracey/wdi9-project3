class User < ApplicationRecord
  has_secure_password
  has_many :companies, dependent: :destroy
  has_many :jobs, dependent: :destroy
  has_many :tasks, dependent: :destroy

  def create_default_tasks
    tasks = [{
      title: "Write a CV or résumé",
      desc: "A résumé is a short document, usually a single page, that lists your work history in reverse chronological order. A CV is similar, but provides greater detail for each listing and is several pages long. Write the type of document that is expected for your industry and geographical area."
    },{
      title: "Create a profile on LinkedIn",
      desc: "When you create a profile on LinkedIn, you make it easy for companies to find you for relevant roles. Include a professional photo, list your skills that are relevant to the sort of role you want, and highlight the achievements in your past positions."
    },{
      title: "Find potential employers",
      desc: "Find the employers in your area that have hired people for positions like the one you are looking for and add them to your company list on this site."
    },{
      title: "Find recruitment agents",
      desc: "Find recruitment agents who place candidates in positions similar to the one you are looking for, and connect with them on LinkedIn. Recruiters often turn to their LinkedIn networks before advertising a position, so get on those networks and beat out other candidates just by being there first."
    },{
      title: "Create an elevator pitch",
      desc: "An elevator pitch is a short summary of who you are, what you can do, and what you can offer. It should take no longer than 60 seconds to say at a relaxed, conversational pace. The best pitches take only 30 seconds."
    },{
      title: "Create an online portfolio",
      desc: "An online portfolio gives you a place to shine and express yourself in an increasingly digtal world. Keep it professional and show who you are and what you can do. Include pictures of visually interesting work you have done, samples of things you have created, and tell the story of your career."
    },{
      title: "Find relevant meetups",
      desc: "Meetups are a great way to meet people who work in the industry that you want to work in. Whether you have 10 minutes of experience or 10 years, you will often be able to meet new people and learn new things."
    }]
    tasks.each do |task|
      t = Task.new
      t.user = self
      t.title = task[:title]
      t.desc = task[:desc]
      t.due = Time.now + 7.days
      t.complete = false
      t.save
    end
  end
end
