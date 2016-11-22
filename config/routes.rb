Rails.application.routes.draw do
  get '/', to: 'pages#index'
  # get '/', to: 'sessions#new'
  get '/tasks', to: 'tasks#all'
  post '/task', to: 'tasks#create'

  get 'tasks/:id', to: 'tasks#show'


  # get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users

  get '/tasks/:id', to: 'tasks#show'

end
