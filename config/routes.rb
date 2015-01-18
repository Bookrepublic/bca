Rails.application.routes.draw do
  devise_for :users
  ActiveAdmin.routes(self)
  resources :people

  resources :posts

end
