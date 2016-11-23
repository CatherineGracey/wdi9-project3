Rails.application.routes.draw do
  get '/', to: 'pages#index'

  get '/tasks', to: 'tasks#all'
  get '/tasks/:id', to: 'tasks#show'
  post '/task', to: 'tasks#create'
  post '/tasks/:id/edit', to: 'tasks#update'
  post '/tasks/:id/complete', to: 'tasks#complete'
  delete '/tasks/:id/delete', to: 'tasks#destroy'

  get '/companies', to: 'companies#all'
  get '/companies/:id', to: 'companies#show'
  post '/company', to: 'companies#create'
  post '/companies/:id/edit', to: 'companies#update'
  delete '/companies/:id/delete', to: 'companies#destroy'

  get '/jobs', to: 'jobs#all'
  get '/jobs/:id', to: 'jobs#show'
  post '/job', to: 'jobs#create'
  post '/jobs/:id/edit', to: 'jobs#update'
  delete '/jobs/:id/delete', to: 'jobs#destroy'

  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end
