require "sinatra"

get "/" do
 redirect "/index.html" 
end

get "/favicon.ico" do
  halt 404
end
