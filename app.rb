require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/flash'
require 'active_record'
require 'slim'

class Quizat < Sinatra::Base
  configure do
    enable :sessions
    register Sinatra::Reloader
    register Sinatra::Flash
  end

  helpers do

  end

  get "/" do
    erb :index
  end
end
