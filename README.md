PerfiLoader
===========

Simple and fast preloader (spinner) javascript library.

USING
=====

##Add PerfiLoader to your bower.json:


    "dependencies": {
        "PerfiLoader": "0.1.1",
    }

And install it:
    
    bower install
    
##Look into example file, how to use with js and css.

Also you can import less PerfiLoader.less and reassign @imgPath variable in your bootstrap less file.

##Using in js

Add preloader on element with defaults:


    $('.something').preloader();
    
Turning off preloader on element:


    $('.something').preloader(false);
    
Add preloader with options:

    .preloader(enable, size, fillParent)

For example:

    $('.something').preloader(true, 16);
 
Another method to pass options:

    $('.something').preloader({enable: true, size: 64, fillParent: true});
 
Existing options:

* **enable**: true|false - add or remove preloader, default: *true* (add).
* **size**: 16|32|64|128 - size of spinner image, default: *32*
* **fillParent**: true|false - block whole parent element (it must have position:relative), default: *false*
* **className**: class of created div element, default: *perfi-loader-preloader*

Author
======
Andrey Bezpalenko
[virtustilus@gmail.com](virtustilus@gmail.com)