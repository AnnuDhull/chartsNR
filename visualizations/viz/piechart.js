import React from 'react';
import { PieChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <PieChart accountIds={[4043717]}
        //query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzI1MnxJTkZSQXxOQXw4MTk2MTMyNDc4NTUyNTA5NzEy' TIMESERIES auto"
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA0MzcxN3xJTkZSQXxOQXw0NDA5MjM1ODYyMDU3ODUxNjk2' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
        />;
    }
}