import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component{
    //object of state is created and this will be used to open a larger image
    state={
        open:false,
        currentImg: ''
    }
    //opening a larger image. when zoom in button is clicked, this function will be called
    handleOpen=img=>{
        this.setState({open:true, currentImg:img})
    }
    //closing the image. this function will close the image when close is clicked after opening the larget image
    handleClose=()=>{
        this.setState({open:false});
    }
    render()
    {
        let imageList;      //variable to display the images
        const {images}=this.props
        
        if(images)
        {                                   //no of columns in image display.
                                            //images.map is used because we want to display an array of images
            imageList=(
                <GridList cols={5}>         
                {  images.map(img=>(
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            actionIcon={
                                <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                                <ZoomIn color="white" />    
                                </IconButton>
                            }
                            >
                            <img src={img.largeImageURL} alt="No pictures" />  
                        </GridTile>
                    ))      
                }
                </GridList>
            )
        }   //on clicking the icon button (zoom in) a larger version of the image will be opened
            //gridlist shows the no of columns that will be shown if the search is successfull and gridtile shows the title, key and the zoom icon key extracted from the API at pixabay
            //if no image available then nothing will be showed as the array will be null
        else{
            imageList=null;                                
        }
        //this will be a close button
        const actions=[
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ]
                //this is the close button and has close written on it
        return(
            <div style={{marginLeft:30, marginRight:30, marginTop:20, marginBottom:40}}>
                {imageList}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImg} alt=" " style={{width:'100%'}} /> 
                </Dialog>
            </div>
        )
    }
}
                                //display image list based on results
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;        //export the image results