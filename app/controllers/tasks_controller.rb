class TasksController < ApplicationController
  def all
    if session[:user_id]
      tasks = User.find(session[:user_id]).tasks.order(due: :asc)
      render json: tasks
    else
      redirect_to '/'
    end
  end

  def create
    if session[:user_id]
      task = Task.new
      task.title = params[:title]
      task.desc = params[:desc]
      task.due = params[:due]
      task.complete = false
      task.user_id = session[:user_id]
      if params[:company_id] != 'NaN'
        task.company = Company.find(params[:company_id])
      end
      if params[:job_id] != 'NaN'
        task.job = Job.find(params[:job_id])
      end
      if task.save
        render json: task
      else
        render json: {error: "Task has failed to save."}
      end
    else
      redirect_to '/'
    end
  end

  def create_recurring
    if session[:user_id]
      rt = RecurringTask.new
      rt.title = params[:title] #Task name to display when task is generated
      rt.desc = params[:desc] #Task description
      rt.firstdue = params[:due] #Date user sets that the task is first due
      rt.frequency = params[:frequency] #Frequency with which the task should be generated
      rt.prior = params[:prior] #Amount of time between when the task is generated and due next
      rt.user_id = session[:user_id]
      if params[:company]
        rt.company = Company.find(params[:company])
      end
      if params[:job]
        rt.job = Jobs.find(params[:job])
      end
      if rt.save
        tasks = User.find(rt.user_id).generate_recurring_tasks
        render json: tasks
      else
        render json: {error: "Task has failed to save."}
      end
    else
      redirect_to '/'
    end
  end

  def show
    if Task.exists? params[:id]
      task = Task.find params[:id]
      if task.user_id == session[:user_id]
        render json: task
      else
        render json: {error: "ID is assigned to a different user."}
      end
    else
      render json: {error: "ID does not exist"}
    end
  end

  def update
    if Task.exists? params[:id]
      task = Task.find params[:id]
      if task.user_id == session[:user_id]
        task.title = params[:title]
        task.desc = params[:desc]
        task.due = params[:due]
        task.complete = params[:complete]
        task.completed_on = params[:completed_on]
        task.company = Company.find(params[:company])
        task.job = Jobs.find(params[:job])
        if task.save
          render json: task
        else
          render json: {error: "Task has failed to save."}
        end
        render json: task
      else
        render json: {error: "ID is assigned to a different user."}
      end
    else
      render json: {error: "ID does not exist"}
    end
  end

  def destroy
    if Task.exists? params[:id]
      task = Task.find params[:id]
      if task.user_id == session[:user_id]
        task.destroy
      end
    end
  end

  def complete
    task = Task.find params[:id]
    if task.complete
      task.complete = nil
      task.completed_on = nil
      task.save
    else
      task.complete = true
      task.completed_on = Time.now
      task.save
    end
    render json: task
  end
end
