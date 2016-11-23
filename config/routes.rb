Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/tasks', to: 'tasks#all'
  get 'tasks/:id', to: 'tasks#show'
  post '/task', to: 'tasks#create'
  post '/tasks/:id/edit', to: 'tasks#update'
  post '/tasks/:id/complete', to: 'tasks#complete'
  delete '/tasks/:id/delete', to: 'tasks#destroy'

  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end
