module.exports = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      option:{
        vueLoaderConfig,
        postcss:[
          require('autoprefixer')({
            browsers:[
              "ie >= 8",
              "Firefox >= 20",
              "Safari >= 5",
              "Android >= 4",
              "Ios >= 6",
              "last 4 version",
            ]
          })
        ]
      }
    }
    // {
    //   test: /\.css$/,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //     {
    //       loader: "postcss-loader",
    //       options: {
    //         plugins: [
    //           require("autoprefixer")({
    //             browsers: [
    //               "ie >= 8",
    //               "Firefox >= 20",
    //               "Safari >= 5",
    //               "Android >= 4",
    //               "Ios >= 6",
    //               "last 4 version",
    //             ],
    //           }),
    //         ],
    //       },
    //     },
    //   ],
    // },
  ],
};
