var headEnd = res.pageContributions.headEnd;
if (!headEnd) {
    res.pageContributions.headEnd = [];
} else if(typeof headEnd == 'string') {
    res.pageContributions.headEnd = [ headEnd ];
}
res.pageContributions.headEnd.push(myCodeForHeadEnd);