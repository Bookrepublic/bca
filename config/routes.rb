Rails.application.routes.draw do
  resources :images do
    collection do
      post :post_image, to: 'images#post_image_create'
    end
  end

  devise_for :users
  ActiveAdmin.routes(self)
  resources :people

  resources :posts

end
