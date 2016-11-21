Rails.application.routes.draw do
  get '/tasks', to: 'tasks#all'
end
