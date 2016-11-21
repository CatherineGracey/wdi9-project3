Rails.application.routes.draw do
  get '/tasks', to: 'tasks#all'
  get 'tasks/:id', to: 'tasks#show'
end
