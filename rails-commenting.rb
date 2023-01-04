# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Taking place here in this code is 

# BlogPostController is the controller. The controller is a logical center of an application. It will organize the communication between the user, views, and the model. A controller is made using $rails g controller (Controllername). In the next line, there is a def method with the name index. Index means to send back the entire list of data available for the model being queried. So the method's name is index, and index has a defintion. 



class BlogPostsController < ApplicationController
  def index


    # ---2)

# An instance variable named post is performing an Active Record query to retrieve all Posted content, which is stored within the instance variable.
    @posts = BlogPost.all
  end

  # ---3)

# The Method we are using here is show. which displays a single item by accessing it with a parameter i.s. The instance variable post allows us to access the I.D. within the item and displays it." 
  def show 
    @post = BlogPost.find(params[:id])
  end

  # ---4)

  #  The method new enables users to input information into our website and store it in the database. 
  def new 
    @post = BlogPost.new
  end

# This create method allows the user to take data, modify it, and store the modified data in the database as a new instance.

  def create


    # ---5)

# This method establishes a connection between the controller and the model. If the created post will is validated by the params, it will be stored on the model. If not, the post will not be displayed and the user will be redirected to the landing page.

# There is a def edit method, which sends HTML forms to the user. These forms allow the user to input data and send it to the database to overwrite existing information.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
   
    # ---6)
 
# Here we are again using the post instance, using the .find after BlogPost to find one item by its id. Since this is under the def edit, it is used to edit an existing model object. 

    @post = BlogPost.find(params[:id])
  end

# Update edit will  update the model class using the params ID. 

  def update
    @post = BlogPost.find(params[:id])


    # ---7)

  # A conditional statement is utilized to update or edit a blog post. If the new entry is successfully made, a redirect is triggered to the attached link path. If not, the process is terminated.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  #  The destroy method searches for a parameter with a specific id. If the parameter matches the id specified in the parameters, it is subsequently destroyed.  

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)

      # A conditional statement was implemented to check if a specific ID parameter exists within the Blog post. If the parameter is located, the corresponding post is destroyed from the database and the user is redirected to a new link path. 
      redirect_to blog_posts_path
    end
  end

  # ---9)

  # The private keyword restricts the scope of where a method can be called. Private is listed to a controller class, so that there is no chance that it can be called from somewhere else in the program without permission of course. Once private is instanciated, everything under it is protected. 
  
  private
  def blog_post_params


    # ---10)

    # Under the operational ruling of private, the required method ensures that a specific parameter is present. If the parameter is absent, an error is raised. In this case, the method requires a blog post. The method  returns the title, content, and filtered parameters."
    params.require(:blog_post).permit(:title, :content)
  end
end