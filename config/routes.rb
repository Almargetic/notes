Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'notes/index'
      post 'notes/create'
      get '/show/:id', to: 'notes#show'
      delete '/destroy/:id', to: 'notes#destroy'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/*path' => 'dashboard#index'
  # Defines the root path route ("/")
  root 'dashboard#index'
end
