import React from 'react';
import LeaderboardList from '../Home/Components/LeaderboardList';

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('solo')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('solo')
            })
    })
})

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('solo-fpp')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('solo-fpp')
            })
    })
})

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('duo')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('duo')
            })
    })
})

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('duo-fpp')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('duo-fpp')
            })
    })
})

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('squad')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('squad')
            })
    })
})

describe('#apiCall() using Promises', () => {
    it('should load leaderboard data', () => {
        let leaderboardList = new LeaderboardList();
        return leaderboardList.apiCall('squad-fpp')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.data.data.type).toEqual('leaderboard')
                expect(data.data.data.attributes.gameMode).toEqual('squad-fpp')
            })
    })
})