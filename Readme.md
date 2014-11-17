# Material WebApp Template

## About
The main reason why I'm doing this is to have a look at the Android material guidelines and get them into the world of web with a simple and easy to customize markup and style.

## Screenshot's
![Closed Sidebar](http://adtime.at/projects/github/mwat-closed-sidebar-small.png)
![Open Sidebar](http://adtime.at/projects/github/mwat-open-sidebar-small.png)

## What is material design [@google]
> We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design. This spec is a living document that will be updated as we continue to develop the tenets and specifics of material design.

## Customization
I'm using a lot of `SCSS` variables so you can simply customize this web app template and make it to your own. Center the main-headline or disable shadows, setting new background colors and primary colors simply changing the `variables.scss`.

    $left-nav-bg:#f9f9f9;			    // left nav default background color
    $left-nav-element-bg:#f9f9f9;		// left nav background color of <a>s
    $left-nav-element-bg-hover:#ECECEC; // left nav background hover color of <a>s
    $left-nav-font-color:#000;			// left nav font color
    $left-nav-seperator-color:#e5e5e5;	// left nav seperator color between elements (<a>'s)
    $left-nav-allow-scroll:true !default;
    
    $main-header-bg:#E67E22;				// main header background color
    $main-header-font-color:#ffffff;		// main header font color
    $main-header-text-align:center;		    // main header text align (supported: left & center)
    
    $shadows:true !default;					// enables 'materials' shadow design

## Installation

After checkout, execute the following steps `npm install` & `bower install` to install third party libraries and development environment.

## Development environment

Run `grunt server` to boot up a local server

## Thanks to:
[@ddprrt] for the [Netural Generator]

[@google]:http://www.google.com/design/spec/material-design/introduction.html
[@ddprrt]:https://github.com/ddprrt
[Netural Generator]:https://github.com/ddprrt/generator-netural
