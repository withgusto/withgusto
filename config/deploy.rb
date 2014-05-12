# config/deploy.rb
require 'capistrano/s3'

set :bucket, "withgusto.co"
set :access_key_id, (ENV['AWS_ACCESS_KEY_ID'])
set :secret_access_key, "(ENV['AWS_SECRET_ACCESS_KEY'])
