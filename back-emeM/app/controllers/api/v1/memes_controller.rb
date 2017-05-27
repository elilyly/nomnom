class Api::V1::MemesController < ApplicationController
  def index
    @memes = Meme.all
    render json: @memes
  end

  def new
    @meme = Meme.new
  end

  def create
    @meme = Meme.create(memes_params)
  end

  def show
    @meme = Meme.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def memes_params
    params.require(:meme).permit(:text_top, :text_bottom, :image_url)
  end
end
