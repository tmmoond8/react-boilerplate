require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const { PHASE_DEVELOPMENT_SERVER } = require('next-server/constants');

const plugins = [
  [ withImages ],
  [ withCSS, {
    importLoader: 1
  }],
  [ withFonts ],
]
const nextAppConfig = ({
  webpack(config, options) {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      })
    ]
    return config;
  },
  ['!' + PHASE_DEVELOPMENT_SERVER]: {
    assetPrefix: process.env.REACT_APP_STATIC_URL || '',
  },
})

module.exports = withPlugins(plugins, nextAppConfig);