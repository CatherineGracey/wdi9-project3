class TasksController < ApplicationController
  def all
    if session[:user_id]
      tasks = User.find(session[:user_id]).tasks.order(due: :desc)
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
      # Check this once log in has been written
      task.user_id = session[:user_id]
      if task.save
        render json: task
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
      render json: task
    else
      render json: {error: "ID does not exist"}
    end
  end

  def update
  end

  def destroy
  end

  def complete
    task = Task.find params[:id]
    if task.complete
      task.complete = nil
      task.completed_on = nil
    else
      task.complete = true
      task.completed_on = Time.now
    end
  end
end
