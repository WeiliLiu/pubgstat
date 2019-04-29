import React from 'react';
import { Timeline } from "react-twitter-widgets";

export default class TwitterFeed extends React.Component {

    render() {
        return(
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'PUBG'
                }}
                options={{
                    username: 'PUBG',
                    height: '30rem'
                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />
        )
    }
}