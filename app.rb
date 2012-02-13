require "sinatra"

get "/" do
 redirect "/test.html" 
end

get "/favicon.ico" do
  halt 404
end
