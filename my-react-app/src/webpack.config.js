const gtmId = process.env.REACT_APP_OPTIMIZE_NEXT_ID;
   const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: 'index.js',
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: './public/list/cp03/apply/completion_thanks01.html',

          // Pass the full url with the key!
          gtmId: gtmId,

        })
      ]
    }