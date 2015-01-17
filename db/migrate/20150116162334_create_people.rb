class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.text :biography
      t.string :fb_profile
      t.string :tw_profile
      t.string :in_profile

      t.timestamps
    end
  end
end
