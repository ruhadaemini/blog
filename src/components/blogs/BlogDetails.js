import React from 'react';

const BlogDetails = (props) => {
    const id = props.match.params.id;

    return(
        <div className="container section blog-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Blog Title - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quis voluptatum? Ab alias cum deserunt dolores ea exercitationem expedita harum magnam, magni nesciunt nihil nostrum quod ratione, sapiente tempore voluptate.
                    </p>
                </div>
                <div className="card-action grey lighten-4 gray-text">
                    <div>Posted by Ruhada Emini</div>
                    <div>2nd September, 2:00am</div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;