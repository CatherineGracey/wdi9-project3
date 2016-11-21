class TasksController < ApplicationController
  def all 
    @tasks = Task.all
    render json: @tasks
  end
end
