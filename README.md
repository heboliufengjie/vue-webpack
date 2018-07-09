# vue-webpack
Building a single page with Vue and webapck

1.安装依赖 
    npm install 或者 cnpm install


2.loader介绍
    babel-loader 
        babel-polyfill (提供低版本浏览器不支持的api),
            作用: babel只转换语法,不翻译api,我们可以使用babel-polyfill来转换

        transform-runtime  
            作用: 在打包过程中，babel会在某些包里提供一些工具函数，这些工具函数可能会重复出现在多个模块,这样会导致打包体积过大，所以babel提供babel-plugin-transform-runtime来解决打包体积过大的问题  (注意：还需要安装babel-runtime)
