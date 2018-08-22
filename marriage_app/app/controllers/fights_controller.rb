class FightsController < ApplicationController
  before_action :authenticate_user
  before_action :set_fight, only: [:show, :update, :destroy]

  def index
    render json: {
      fights: [
        {'issue': 'Coming home at 3AM'},
        {'issue': 'Never helping with dishes'},
        {'issue': 'Constant nagging'}
      ]
    }.to_json
  end
end
