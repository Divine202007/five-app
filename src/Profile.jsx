import React from 'react';
import 'dist/css/boostrap.min.css';
import 'myImage.png';


const Profile = (props) => {

return (
    <div>
        
<div className="card" style={{width: '18rem'}}>
  <img src={this.state.imgScr} className="card-img-top" >
    <div className="card-body">
        <h5 className="card-title">{this.state.fullName}</h5>
        <h5 className="card-title">{this.state.bio}</h5>
        <h5 className="card-title">{this.state.profession}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
    </div>
)
}

export default Profile ;