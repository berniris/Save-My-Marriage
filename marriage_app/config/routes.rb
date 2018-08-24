Rails.application.routes.draw do
 scope '/api' do

  resources :users
  resources :dateideas
  resources :fights

  # comment out dateideas
  post 'dateideas' => 'dateideas#create'
   # Get login token from Knock
  post 'user_token' => 'user_token#create'

  # User actions
  post '/users/create' => 'users#create'
end


end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
