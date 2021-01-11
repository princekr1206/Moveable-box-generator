import React from "react";
import ReactDOM from "react-dom";
import Box from './subComponents/box';
import '../css/main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxDetail: [],
            zIndex: 10,
            selectedId: '',
            keyEnable:false
        }
    }
    componentDidMount() {
        window.addEventListener('keydown',(event)=>{
            const key = event.key; 
            console.log("key",key);
            if(this.state.keyEnable){
            if(key==="Delete")
            {                 
                let boxDetailOld=[];
                this.state.boxDetail.forEach(element => {                 
                    if(element.id===this.state.selectedId){                      
                    }                 
                    else{
                        boxDetailOld.push(element);
                    }
                });          
                this.setState({
                    boxDetail:boxDetailOld
                });
                console.log(boxDetailOld);
                this.setState({
                    selectedId:''
                });
            }
            if (this.state.selectedId != '') {
                console.log("selectedId", this.state.selectedId);
                let id = this.state.selectedId;
                let div = document.getElementById(id);
                let left = div.getBoundingClientRect().left-15;
                console.log("left", left);
                
                let top = div.getBoundingClientRect().top-15;
                console.log("top",top);
                
                let rightContainer=document.querySelector(".box-container").getBoundingClientRect().right-170;
                let bottomContainer=document.querySelector(".box-container").getBoundingClientRect().bottom-95;
                console.log("boxContainer",bottomContainer);

              
               
         
                
                    if ((key === 'D' || key==='d' || key==='ArrowRight') && left<=rightContainer) {
                        div.style.left = `${left+15}px`;
                    }
                    if ((key === 'A' || key==='a' || key==='ArrowLeft') && left>=15) {       
                        div.style.left = `${left-15}px`;
                    }
                
                    if ((key === 'S' || key==='s' || key==='ArrowDown') && top<=bottomContainer) {
                    
                        div.style.top = `${top+15}px`;
                    }
                    if ((key === 'W' || key==='w' || key==='ArrowUp') && top>=15) {
                    
                        div.style.top = `${top-15}px`;
                    }
                   
                // console.log(div.getBoundingClientRect())
            }
            }
        })


        // window.addEventListener('keypress', (event)=>{
        //     if (this.state.selectedId != '') {
        //         console.log("selectedId", this.state.selectedId);
        //         let id = this.state.selectedId;
        //         let div = document.getElementById(id);
        //         let left = div.getBoundingClientRect().left-15;
        //         console.log("left", left);
                
        //         let top = div.getBoundingClientRect().top-15;
        //         console.log("top",top);
                
        //         let rightContainer=document.querySelector(".box-container").getBoundingClientRect().right-170;
        //         let bottomContainer=document.querySelector(".box-container").getBoundingClientRect().bottom-75;
        //         console.log("boxContainer",bottomContainer);

        //         let keyCode = event.which || event.keyCode;
               
        //    //    console.log("keycode",keyCode);
               
        //         // console.log(div.getBoundingClientRect())
                
        //             if ((keyCode === 100 || keyCode===68) && left<=rightContainer) {
        //                 div.style.left = `${left+15}px`;
        //             }
        //             if ((keyCode === 97 || keyCode===65) && left>=15) {       
        //                 div.style.left = `${left-15}px`;
        //             }
                
        //             if ((keyCode === 115 || keyCode===83) && top<=bottomContainer) {
                    
        //                 div.style.top = `${top+15}px`;
        //             }
        //             if ((keyCode === 119 || keyCode===87) && top>=15) {
                    
        //                 div.style.top = `${top-15}px`;
        //             }
        //             if(keyCode === 127)
        //             {
        //                 div.remove();
        //             }
        //         // console.log(div.getBoundingClientRect())
        //     }
        // })

    }


    onClickDiv = (id) => {

        let div = document.getElementById(id);

        //   console.log(div.getBoundingClientRect())

        this.state.boxDetail.forEach(element => {
            document.getElementById(element.id).style.border = "none";
        });
        div.style.border = "2px solid black";
        this.setState({ selectedId: id })



        // console.log(div.getBoundingClientRect())
    }
    render() {
        //console.log("boxDetail",this.state.boxDetail);
        console.log("keyEnabled:",this.state.keyEnable);
        let zIndex = this.state.zIndex;
           
        return (
            <div className="main">
                <div className="box-container">
                    {
                        this.state.boxDetail.map((item) => (
                            <Box keyVal={item.id} click={this.onClickDiv} key={item.id} rgb={item.rgb} />
                        ))
                    }

                </div>
                <div className="control-container">
                    <input
                        onClick={() => {
                            let date = new Date();
                            this.setState({
                                boxDetail: [...this.state.boxDetail,
                                { id: date.getTime(), zIndex: { zIndex }, rgb: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})` }]
                            });
                            this.setState({ zIndex: ++zIndex });
                        }}
                        type="button"
                        className="add-buton"
                        value="Add New Box" />
                    
                    <input 
                    type="checkbox"
                    className="add-check"
                    onClick={()=>{
                      this.setState({
                        keyEnable:!this.state.keyEnable
                      });
                    }}

                    /> 
                    <div className="Enable-Key">Enable Keboard Listning</div>
                 </div> 
            </div>
        );
    }
}

export default Main;