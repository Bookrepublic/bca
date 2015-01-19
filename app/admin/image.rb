ActiveAdmin.register Image do

  permit_params :image

  form do |f|
    f.inputs 'Image' do
      f.input :image, as: :file
    end
    f.actions
  end

end
