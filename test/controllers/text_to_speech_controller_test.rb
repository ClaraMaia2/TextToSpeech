require "test_helper"

class TextToSpeechControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get text_to_speech_index_url
    assert_response :success
  end
end
