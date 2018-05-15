require 'rails_helper'

RSpec.describe "listings page", :type => :request do
  it "displays listings" do

    listings_response = {
      listings: [
        {
          title: 'Some Cool Instrument',
          photos: [
            {
              _links: { thumbnail: { href: 'https://image.com' } }
            }
          ]
        }
      ]
    }

    stub_request(:get, "https://api.reverb.com/api/listings/all?per_page=10")
      .to_return(
        status: 200,
        body: listings_response.to_json,
        headers: {}
      )

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
