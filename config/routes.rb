Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/tasks', to: 'tasks#all'
  get 'tasks/:id', to: 'tasks#show'
  post '/task', to: 'tasks#create'

  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end
