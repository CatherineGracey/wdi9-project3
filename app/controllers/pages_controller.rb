class PagesController < ApplicationController
  def index
    if session[:user_id]
      user = User.find(session[:user_id])
      @user_email = user.email
      render :loggedin
    else
      render :index
    end
  end
end
