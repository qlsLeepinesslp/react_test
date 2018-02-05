import React, { Component } from 'react';

// step 9 : redux connect
import { connect } from 'react-redux';
// step 10 : load LatestNews
import LatestNews from '../components/home/latest';
// step 11 : load action
import { latestNews } from '../action';
// step 12 : load bineAction
import { bindActionCreators } from 'redux'; 

class Home extends Component {

    // step 15 : run action 
    componentDidMount(){
        this.props.latestNews();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
            </div>
        );
    }
}

// step 13 : map state to props
function mapStateToProps(state){
    // console.log(state);
    return{
        articles: state.articles
    }
}
// step 14 : dispatch reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);