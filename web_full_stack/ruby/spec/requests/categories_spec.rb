require 'rails_helper'

RSpec.describe "categories page", :type => :request do
  let(:categories) do
    [{'full_name' => 'Guitars'}, {'full_name' => 'Geetars'}]
  end

  let(:client) do
    instance_double(ReverbClient, categories: categories)
  end

  before do
    allow(ReverbClient).to receive(:new) { client }
  end

  context 'with matching categories' do
    it "displays the full name of matching categories" do
      get categories_path(query: 'guitar')

      # one result and it is "Guitars"
      assert_select "ul.list-group" do
        assert_select "li.list-group-item", "Guitars"
        assert_select "li.list-group-item", 1
      end
    end
  end

  context 'with no matching categories' do
    it "does not display anything if there are no matching categories" do
      get categories_path(query: 'didgeridoo')
      # no results
      assert_select "ul.list-group", 0
    end
  end

end
