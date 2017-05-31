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
    render json: @meme
  end

  def show
    @meme = Meme.find(params[:id])
  end

  def edit
  end

  def update
    meme = Meme.find(params[:id])
    meme.update(memes_params)
    render json: meme
  end

  def destroy
    meme = Meme.find(params[:id])
    meme.destroy
    render json: meme
  end

  private

  def memes_params
    params.require(:meme).permit(:text_top, :text_bottom, :image_url)
  end
end
