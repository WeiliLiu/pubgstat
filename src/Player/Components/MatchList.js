import React from 'react';
import MatchListItem from '../Components/MatchListItem';

export default class MatchList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchList: '',
            loading: false
        }

        this.formList = this.formList.bind(this);
    }

    formList() {
        let matchList = this.props.matchIDList;
        let listLength = Object.keys(matchList).length
        var list = [];
        for(let i = 0; i < listLength; i++) {
            list.push(
                <MatchListItem key={i} id={i} matchID={matchList[i]} playerID={this.props.playerID}
                                filterMode={this.props.filterMode}/>
            )
        }
        return list;
    }

    render() {
        return(
            <div>{this.formList()}</div>
        )
    }
}