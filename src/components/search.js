import React, {Component} from 'react';
import axios from 'axios';
import ImageResults from './imageresults';


class Search extends Component {
    state={
        searchText: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '21076994-77e910579d9cc8e6a21597403',
        images: []
    };  //images are stored in an empty array. when those are requested, then the array is filled
    //this function is used to let the user to type something in the search box. this query will be used to search for images
    //q parameter is used as the query (search text) also needs to be passed
    //.then is used to get a response from API  .catch is used to display if there is any error
    onTextChange=e=>{
        this.setState({[e.target.name]:e.target.value},()=>{
            axios
            .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo`)
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
        });
    };          //axios is used to get the API from pixabay. The API comes with a special key which is different for each user and which is got by signing up at Pixabay
    render(){
        console.log(this.state.images); //because we need the images
        return(
            <div className="search-images">
                <h3>IMAGE SEARCH</h3>
                <form>
                <input type="text"  
                placeholder="Search for Images" style={{backgroundColor: 'black', color: 'white', 
                borderTopStyle: 'hidden', borderRightStyle: 'hidden', borderLeftStyle: 'hidden', outline: 'none', borderBottomStyle: 'groove', alignContent:'center', 
                alignItems: 'center', fontSize: 30, fontFamily: 'Courier New'
                }}
                name="searchText" value={this.state.searchText}
                onChange={this.onTextChange}
                />        
                </form>
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}          
            </div>
        )
    }
}
/*  the div is actually for search query 
    this.state.images.length sees if the results of the search query are greater than 0. 
    If yes then ImageResults is used to display the images. Each image is passed as an element in images[] array and displayed using ImageResults 
    If no, then nothing is shown. A null array in images[] and therefore no results
    axios is used to get the API from the website of Pixabay 
    search images uses Inline CSS */
export default Search;