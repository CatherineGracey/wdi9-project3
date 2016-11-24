class SessionsController < ApplicationController
  def create
    if User.exists?(email: params[:email])
      user = User.find_by(email: params[:email])

      if user && user.authenticate(params[:password])
        log_in user
        user.generate_recurring_tasks
        redirect_to '/'
      else
        flash[:danger] = 'Invalid Password Combination!'
        redirect_to '/'
      end
    else
      user = User.new
      user.password = params[:password]
      user.email = params[:email]
      user.create_default_tasks
      user.create_default_recurring_tasks
      user.generate_recurring_tasks
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
