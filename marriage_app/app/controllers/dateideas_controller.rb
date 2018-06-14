class DateideasController < ApplicationController
  # before_action :authenticate_user
  before_action :set_dateidea, only: [:show, :update, :destroy]

  # GET /dateideas
  def index
    @dateideas = Dateidea.all

    render json: @dateideas
  end

  # GET /dateideas/1
  def show
    render json: @dateidea
  end

  # POST /dateideas
  def create
    @dateidea = Dateidea.new(dateidea_params)

    if @dateidea.save
      render json: @dateidea, status: :created, location: @dateidea
    else
      render json: @dateidea.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dateideas/1
  def update
    if @dateidea.update(dateidea_params)
      render json: @dateidea
    else
      render json: @dateidea.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dateideas/1
  def destroy
    @dateidea.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dateidea
      @dateidea = Dateidea.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dateidea_params
      params.require(:dateidea).permit(:body)
    end
end
