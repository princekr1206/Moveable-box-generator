import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component{
   
    render(){
        // console.log("props",this.props);
        return(
            <div 
            className="box"
            onClick={()=>this.props.click(this.props.keyVal)} 
            style={{backgroundColor:this.props.rgb,zIndex:this.props.zIndex}} 
            id={this.props.keyVal}>
               
            </div>
        );
    }
}

export default Box;