class TasksController < ApplicationController
  def all
    tasks = Task.all
    render json: tasks
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
end
