Rails.application.routes.draw do
  resources :images

  devise_for :users
  ActiveAdmin.routes(self)
  resources :people

  resources :posts

end
