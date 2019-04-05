require 'spec_helper'
require 'reverb_client'

RSpec.describe "ReverbClient" do

  let(:client) do
    ReverbClient.new
  end

  it 'fetches categories' do
    stub_request(:get, "https://api.reverb.com/api/categories/flat")
      .to_return(
        status: 200,
        body: {categories: [{full_name: 'Guitars'}, {full_name: 'Geetars'}]}.to_json,
        headers: {}
      )

    categories = client.categories

    expect(categories.length).to eq(2)
    expect(categories.map{|c| c['full_name']}).to match_array(['Guitars', 'Geetars'])
  end

  it 'fetches listings' do
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

    listings = client.listings

    expect(listings.first['title']).to eq('Some Cool Instrument')
  end
end
