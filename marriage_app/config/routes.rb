Rails.application.routes.draw do
 scope '/api' do

  resources :users
  resources :dateideas
  resources :fights
  # post 'dateideas' => 'dateideas#create'
  post 'user_token' => 'user_token#create'
end


end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
