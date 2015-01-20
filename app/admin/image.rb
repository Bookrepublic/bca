ActiveAdmin.register Image do

  permit_params :img

  form do |f|
    f.inputs 'Image' do
      f.input :img, as: :file
    end
    f.actions
  end

end
