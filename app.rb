require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/flash'
require 'active_record'

# see: https://gist.github.com/mamantoha/3358074
module Sinatra
  module Flash
    module Style
      def styled_flash(key=:flash)
        return "" if flash(key).empty?
        id = (key == :flash ? "flash" : "flash_#{key}")
        close = '<a class="close" data-dismiss="alert" href="#">×</a>'
        messages = flash(key).collect {|message| "  <div class='alert alert-#{message[0]}'>#{close}\n #{message[1]}</div>\n"}
        "<div id='#{id}'>\n" + messages.join + "</div>"
      end
    end
  end
end

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

  get "/signup" do
    erb :signup
  end
end
