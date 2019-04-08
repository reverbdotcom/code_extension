require 'rails_helper'

RSpec.describe "listings page", :type => :request do
  let(:listings) do
    [
      {
        'title' => 'Some Cool Instrument',
        'photos' => [
          {
            '_links' => { 'thumbnail' => { 'href' => 'https://image.com' } }
          }
        ]
      }
    ]
  end

  let(:client) do
    instance_double(ReverbClient, listings: listings)
  end

  before do
    allow(ReverbClient).to receive(:new) { client }
  end

  it "displays listings" do
    get listings_path

    # one result
    assert_select "ul.list-group" do
      assert_select "li.list-group-item", 1 do
        assert_select "img[src=?]", 'https://image.com'
        assert_select "h2", 'Some Cool Instrument'
      end
    end
  end
end
