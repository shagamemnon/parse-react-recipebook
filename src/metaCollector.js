var opengraph = require('opengraph-io')({appId: '5999eabd07efcb0b00a71f16'});

opengraph.getSiteInfo('https://www.yummly.com/recipe/Spiced-rubbed-Chicken-979803', {cacheOk: false}, function(err, result){
   console.log('Site title is', result.hybridGraph);
});