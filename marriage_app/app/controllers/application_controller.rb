class ApplicationController < ActionController::API
  include Knock::Authenticable
  prepend_before_action :authenticate_user

end
