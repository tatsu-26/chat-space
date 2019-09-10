Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :update, :edit, :index] do
    resources :messages, only: [:create, :index]
  end
    
end
