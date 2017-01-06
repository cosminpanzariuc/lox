/**
 * Created by Cosmin on 28-12-2016.
 */

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Board from './components/board';

const API_KEY = "AIzaSyCBFqR7YNGbyZMrvD7EZtAxForkNCuD3jk";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            homeLink: "HOME",
            searchMounted: true
        };
        this.videoSearch('');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onGreet(){
        alert("Hello!");
    }

    onChangeSearchMounted(){
        this.setState({
            searchMounted: !this.state.searchMounted
        });
    }

    render(){
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

        let searchComponent = "";
        if(this.state.searchMounted){
            searchComponent = (
                <SearchBar
                    onSearchTermChange = {videoSearch}
                    initialAge = {27}
                    greet = {this.onGreet}
                    changeLink={(newName) => this.onChangeLinkName(newName)}
                    initialLinkName = {this.state.homeLink}>
                    <p>Search your video...</p>
                </SearchBar>);
        }

        return (
            <div>

                <Header homeLink={this.state.homeLink}/>

                <div>
                    {searchComponent}
                    <button onClick={() => this.onChangeSearchMounted()} className="btn btn-primary">(Un)Mount Search Component</button>
                </div>

                <VideoDetail video = {this.state.selectedVideo}/>

                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo})}
                    video_list={this.state.videos}
                />

                <Board />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));