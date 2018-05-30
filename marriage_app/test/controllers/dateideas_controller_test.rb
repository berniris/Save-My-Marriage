require 'test_helper'

class DateideasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dateidea = dateideas(:one)
  end

  test "should get index" do
    get dateideas_url, as: :json
    assert_response :success
  end

  test "should create dateidea" do
    assert_difference('Dateidea.count') do
      post dateideas_url, params: { dateidea: { body: @dateidea.body } }, as: :json
    end

    assert_response 201
  end

  test "should show dateidea" do
    get dateidea_url(@dateidea), as: :json
    assert_response :success
  end

  test "should update dateidea" do
    patch dateidea_url(@dateidea), params: { dateidea: { body: @dateidea.body } }, as: :json
    assert_response 200
  end

  test "should destroy dateidea" do
    assert_difference('Dateidea.count', -1) do
      delete dateidea_url(@dateidea), as: :json
    end

    assert_response 204
  end
end
