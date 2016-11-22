class SessionsController < ApplicationController
  def new
    # binding.pry
    
  end

  def create
    # binding.pry
    user = User.find_by(email: params[:email].downcase)

    if user && user.authenticate(params[:password])
      log_in user
      redirect_to user
      # redirect_to current_user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to login_path
  end
end

