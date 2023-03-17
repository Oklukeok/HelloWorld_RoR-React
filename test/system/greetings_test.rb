require 'application_system_test_case'

class GreetingsTest < ApplicationSystemTestCase
  setup do
    @greeting = greetings(:one)
  end

  test 'visiting the index' do
    visit greetings_url
    assert_selector 'h1', text: 'Greetings'
  end

  test 'should create greeting' do
    visit greetings_url
    click_on 'New greeting'

    fill_in 'Greeting', with: @greeting.greeting
    click_on 'Create Greeting'

    assert_text 'Greeting was successfully created'
    click_on 'Back'
  end

  test 'should update Greeting' do
    visit greeting_url(@greeting)
    click_on 'Edit this greeting', match: :first

    fill_in 'Greeting', with: @greeting.greeting
    click_on 'Update Greeting'

    assert_text 'Greeting was successfully updated'
    click_on 'Back'
  end

  test 'should destroy Greeting' do
    visit greeting_url(@greeting)
    click_on 'Destroy this greeting', match: :first

    assert_text 'Greeting was successfully destroyed'
  end
end
