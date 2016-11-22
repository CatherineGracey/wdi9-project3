class PagesController < ApplicationController
  def index
    if session[:user_id]
      render :loggedin
    else
      render :index
    end  
  end
end
