class ImagesController < InheritedResources::Base

  def create
    @image = Image.create ( image_params )

    if @image.save
      redirect_to @image, notice: 'Img was successfully created.'
    else
      render action: 'new'
    end
  end

  private

    def image_params
      params.require(:image).permit(:img)
    end
end
