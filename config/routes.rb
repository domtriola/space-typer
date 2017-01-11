Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    get '/users/:id', to: 'users#stats'
    resource :session, only: [:create, :destroy]
    resources :scores, only: [:index, :create]
    get '/quote', to: 'quotes#quote'
  end
end
