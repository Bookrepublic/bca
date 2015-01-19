class ImagesController < InheritedResources::Base

  def create
    @image = Image.create ( image_params )
  end

  private

    def image_params
      params.require(:image).permit(:image)
    end
end

