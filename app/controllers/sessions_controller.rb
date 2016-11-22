class SessionsController < ApplicationController
  def create
    if User.exists?(email: params[:email])
      user = User.find_by(email: params[:email].downcase)

      if user && user.authenticate(params[:password])
        log_in user
        redirect_to '/'
      else
        flash[:danger] = 'Invalid Password Combination!'
        redirect_to '/'
      end
    else
      user = User.new
      user.password = params[:password]
      user.email = params[:email]
      if user.save
        log_in user
        redirect_to '/'
      else
        redirect_to '/'
      end
    end
  end

  def destroy
    log_out
    redirect_to '/'
  end
end

