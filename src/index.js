import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDJ7kzee0vB2vmKdauPBmexLv1-7NwRhNY';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('ReactJS');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={video => this.setState({selectedVideo: video})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));