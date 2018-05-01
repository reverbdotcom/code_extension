require 'rails_helper'

RSpec.describe "categories page", :type => :request do
  it "displays the full name of matching categories" do

    stub_request(:get, "http://api.reverb.com/api/categories/flat")
      .to_return(
        status: 200,
        body: {categories: [{full_name: 'Guitars'}, {full_name: 'Geetars'}]}.to_json,
        headers: {}
      )

    get categories_path(query: 'guitar')

    # one result and it is "Guitars"
    assert_select "ul.list-group" do
      assert_select "li.list-group-item", "Guitars"
      assert_select "li.list-group-item", 1
    end
  end

  it "does not display anything if there are no matching categories" do

    stub_request(:get, "http://api.reverb.com/api/categories/flat")
      .to_return(
        status: 200,
        body: {categories: [{full_name: 'Guitars'}, {full_name: 'Geetars'}]}.to_json,
        headers: {}
      )

    get categories_path(query: 'didgeridoo')

    # no results
    assert_select "ul.list-group", 0
  end
end
