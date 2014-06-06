require 'sinatra'
require 'pry'

get '/' do
  erb :index
end

post '/about' do
  @name = params['name']
  @nn = params['nn']
  @age = params['age']
  @language = params['language']
  @speaking = params['speaking']
  @bio = params['bio']
  @bp = params['bp']
  @pwd = params['pwd']
  @sex = params['sex']
  @ms = params['ms']
  # @item = params['item']
  @hobb = params['hobb']
  # binding.pry
  erb :about
end
