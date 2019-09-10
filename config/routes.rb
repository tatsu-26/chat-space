Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :update, :edit, :index] do
    resources :messages, only: [:create, :index]
  end
    
end
