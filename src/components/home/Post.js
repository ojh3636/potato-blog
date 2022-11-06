import React from "react";
import "./Post.css"

class Post extends React.Component {
  render() {
    return (
      <div className='post_outer'>
        <div className='post_middle'>
         <div className='post'>
           <div className='post_image'/>
           {/*<p className='post_category'>Interview</p>*/}
         </div>
          <div className='post'>
            <div className='post_image'/>
          </div>
          <div className='post'>
            <div className='post_image'/>
          </div>
        </div>
        <div className='post_middle'>
          <div className='post'>
            <div className='post_image'/>
          </div>
          <div className='post'>
            <div className='post_image'/>
          </div>
          <div className='post'>
            <div className='post_image'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
