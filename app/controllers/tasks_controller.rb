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
      if params[:company]
        task.company = Company.find(params[:company])
      end
      if params[:job]
        task.job = Jobs.find(params[:job])
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
