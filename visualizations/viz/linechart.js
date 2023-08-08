import React from 'react';
import { LineChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <LineChart accountIds={[4043717]}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzcxN3xJTkZSQXxOQXw0NDA5MjM1ODYyMDU3ODUxNjk2' TIMESERIES auto"
        fullWidth
        />;
    }
}