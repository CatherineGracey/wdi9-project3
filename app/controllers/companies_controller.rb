class CompaniesController < ApplicationController
  def all
    if session[:user_id]
      companies = User.find(session[:user_id]).companies
      render json: companies
    else
      redirect_to '/'
    end
  end

  def create
    if session[:user_id]
      company = Company.new
      company.name = params[:name]
      company.website = params[:website]
      company.pros = params[:pros]
      company.cons = params[:cons]
      company.size = params[:size]
      company.focus = params[:focus]
      company.industry = params[:industry]
      company.user_id = session[:user_id]
      if company.save
        render json: task
      else
        render json: {error: "Company has failed to save."}
      end
    else
      redirect_to '/'
    end
  end

  def show
    if Company.exists? params[:id]
      company = Company.find params[:id]
      if company.user_id == session[:user_id]
        render json: company
      else
        render json: {error: "ID is assigned to a different user."}
      end
    else
      render json: {error: "ID does not exist."}
    end
  end

  def destroy
    if Company.exists? params[:id]
      company = Company.find params[:id]
      tasks = company.tasks
      tasks.each do |task|
        task.destroy
      end
      if company.user_id == session[:user_id]
        company.destroy
      end
    end
  end

end
