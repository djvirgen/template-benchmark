# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.7 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [HTMLing](https://github.com/codemix/htmling) v0.0.6
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.5.0 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.0

## Results (Update)

### Performance report for 100000 templates (linux):

    Gaikan               (  934ms) - fastest
    ECT                  ( 1017ms) - 9% slower
    HTMLing              ( 1096ms) - 17% slower
    doT                  ( 1431ms) - 53% slower
    Dust                 ( 1437ms) - 54% slower
    Fest                 ( 1564ms) - 67% slower
    Hogan.js             ( 1835ms) - 96% slower
    Jade without `with`  ( 2211ms) - 137% slower
    EJS without `with`   ( 2266ms) - 143% slower
    Underscore           ( 2545ms) - 172% slower
    Handlebars.js        ( 2706ms) - 190% slower
    Swig                 ( 2991ms) - 220% slower
    Eco                  ( 3262ms) - 249% slower
    EJS                  ( 4032ms) - 332% slower
    CoffeeKup            ( 7599ms) - 714% slower
    Jade                 ( 9458ms) - 913% slower


## Usage

	git clone git://github.com/Deathspike/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
