class FightsController < ApplicationController
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
