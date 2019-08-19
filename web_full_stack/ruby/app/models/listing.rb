class Listing < ActiveJob::Base
  CURRENCY = ['', 'USD', 'EUR']
  SHIPPING_REGION = ['', 'Continental US', 'France']
end