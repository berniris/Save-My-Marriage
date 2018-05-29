Rails.application.routes.draw do
resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :fights
post 'user_token' => 'user_token#create'
get 'users/current' => 'users#current'
end
