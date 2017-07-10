process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.dev');
// const {dfPath} = require('./cfg/default');
const paths = require('../config/paths');
const OpenBrowser = require('open-browser-webpack-plugin');



let app = new ( require('express') )();

let port = 9000;

config.entry.unshift('webpack-hot-middleware/client?reload=true');

let args = process.argv;

if(args[args.length-1]==='open'){
    config.plugins.push(new OpenBrowser({url : `http://localhost:${port}`}));
}

let compiler = webpack(config);

app.use( webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats:{colors: true},
    headers: { "X-Custom-Header": "yes" },
    contentBase: paths.appPublic
}) );

app.use( webpackHotMiddleware(compiler) );

app.get('/*', (req, res)=> res.sendFile( path.resolve(__dirname, '../public/index.html') ) )

app.listen(port, (error)=>{
    if(!error){
        console.log('');
    }
});
