Rails.application.routes.draw do
  devise_for :users
  root "messages#index", except: :index
  resources :users, only: [:edit, :update]

end
