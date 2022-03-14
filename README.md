# Pixie

A web based digital image editor.

The goals of this project include:
 * Maintain a strong focus on user friendly UX design, that ensures _'the simple tasks are easy, and the complex tasks are possible'_.
 * Provide the common tools users expect from an image editor.
 * Provide powerful and flexible non-destructive workflows through layers, filters and node based editors.
 * Provide powerful tools for automation of actions and batch file operation.
 * Maintain focus on it's core goals and not subject to feature creep.
 * Provide very wide platform, language, accessibility and input mode support.
 * Support mainstream desktop operating systems through native desktop applications.
 * Ensure high performance rendering and responsiveness through thoughtful design and optimisation.
 * Maintain a minimal and clean codebase with a high degree of test coverage.

The non-goals of the project include:
 * Providing workflows specific to the creation of print media or digital art. Workflows for both are already well served by other alternatives in the market.
 * To support every device and OS with a native application. Because Pixie is web based, all platforms that support standards compliant browsers will be supported by the web app.
 * To copy or mimic other software. Pixie will be thoughtfully designed from the ground up on it's own concepts and ideas to work in harmony with each other.
 * To add every possible feature imaginable, whether it's relevant to Pixie or not. Pixie does not need an MP3 player, or text editor. Pixie will focus on being a good image editor.
 * Providing any kind of paid service attached to Pixie, such as cloud based hosting or storage of image documents.

# Features

* **Web and Desktop**<br>
Available as a web app or desktop app. The web app supports all popular web browsers.
Desktop app available for Windows (as .exe installer) and Linux (as .AppImage) or via Steam,
and takes advantage of local file access for a smoother more desktop-like experience.<br>
* **Basic Image Editing Tools**<br>
All the things you would expect from a modern image editor. Move, Select, Crop, Draw,
Erase, Blur, Sharpen, Fill, Clone, etc..<br>
* **File Support**<br>
Pixie saves and loads image documents in it's own native format ".pix". It also 
can import and export files in common formats, including: JPEG, PNG, BMP, WEBP, SVG.<br>
* **Layer Based Image Editing**<br>
Edit documents with layers. Layers can be of many different types, including
Bitmap, Fill, Filter, Text, Vector, Group. Mask layers with any type of layer.
Control the blending mode and blending opacity of each layer. Individually
show and hide, lock and unlock layers.<br>
* **Embedded and Linked Documents within Documents**<br>
Use embedded or linked documents as layers in your document. Easily turn linked
documents into embedded documents, or embedded documents into linked documents,
or turn all instances of a document into group layers with the original layers
contained within.<br>
* **Non-destructive filters workflow**<br>
Add filter layers to perform image filters in your layer stack, add filters to
your layers, add filters to your mask layers, and more.<br>
* **Node based Editors**<br>
Create your own image filters, macros and batch file operations with a powerful
yet simple to use node based editor to create logic and chain actions together.<br>
* **Many User Inputs Supported**<br>
Pixie supports using traditional mouse and keyboard, touch only, and gamepad
input to support the broadest range of input devices and users.

# FAQ

### "Who is in charge of this project?"
I am, my name is Grady O'Neill, and this project was created by me.

### "Why did you create this?"
I felt the world is still lacking in great options when it comes to image editors,
I wanted to create a image editor that focuses on the areas of design which I feel the 
current options on the market are currently not serving well enough.

### "Why web based? Why Electron?"
For a number of reasons.

The first is, the web has become a universal platform for distributing applications that run everywhere and load within moments.

Almost every device, from a Windows 64bit desktop PC, to an Android smartphone, to a Raspberry Pi, or smart TV, has a standards compliant web based browser that can run HTML, CSS, JS and WebGL applications in a performant manner. To achieve this level of broadness of support with a traditional C++/OpenGL application, one would need to spend more time compiling their codebase for platforms than they spend coding. 

The second is, the web is a lot easier to develop for.

JS is simple to learn and very forgiving, the frameworks available (such as Vue) are fantastic, and creating beautiful animated interactive designs is far easier with HTML/CSS than any other platform. The web has been shaped by the needs of web developers, and the result is that now the web has everything one might need out of the box.

Considering the scope of this project and the size of my team (1), it makes sense to keep things as simple as possible for myself. A project like this with a traditional C++/OpenGL design, would involve many months of work creating the foundations required to even start at the same point one can start with on day 1 for a web based application. The result would also be a much larger codebase that would be harder to maintain.

The third is, this app was always going to be available on the web.

Strong consideration was given for a long time to creating this project in C++ and even using Vulkan for rendering the entire user interface and all image compositing for maximum performance on desktop. But the desire for a web based version of the editor kept cropping up on the list of desired features of the project.

To create both a C++ and web based version of the project, would mean even more work, an unnecessary amount of work, when the web based version can run perfectly well in Electron on desktop.

The final reason is, because this project does not need to be created as a C++/Vulkan based application to be successful. The performance gains would be minimal considering all this application will be doing is providing a simple user interface around a canvas compositing images that will be already getting rendered on a GPU anyway.

### "How can I help?"
For now, if you wish to help, all I require is lots of feedback, user testing, reproducible bug reports, and patience while I build on this project. The codebase will be small and rapidly changing in the early days of it's inception while I create the foundations.

Eventually once the project has reached a level of maturity, I will work out a plan for what areas of the project I need help with from other people, and outline how others can help me with this project.

### "Can I donate?"
Eventually that will be an option, but it isn't at the moment.

### "I'd like to build and modify this project, can I?"
Absolutely, it's open source and GPL licensed. Read the Application Structure and How to Build sections below for an understanding of how the application is structured and how the build process works.

# Application Structure

Pixie is a combination of web application and Electron based desktop application,
both contained with the same source code repository. 

The application is created primarily in client side Javascript, with optional
communication to the Electron process when running on a desktop.

The user interface is created using the Vue framework and .vue component files,
using pure CSS and HTML for most of the static elements of the user interface.

The viewport and editing tools are rendered using WebGL.

VueX is used to store global data in the application.

Source code for the application can be found in the `src` directory, with `main.js`
being the entry point for the web application itself.

The desktop application uses `electron.js` to control the Electron process
itself and provide an interface to the web app for additional functionality
on desktop.

Vue components are located in the same src directory under the 'components' folder.

GLSL shaders are located within the 'shaders' folder.

HTML files are located in the 'html' folder.

CSS files are located in the 'css' folder.

Within the project you will find a package.json file, which contains a list of
dependencies for the project and other important meta.

# Building Pixie

To create a build of pixie for the web:

1. **Install Dependencies**<br>
Pixie requires Node.js and NPM to be installed to get started.
