# emeM Meme Generator
A meme generator that uses images and text to create custom memes.

## Tech Breakdown:
* Built component-based front end using React
* Built RESTful API using Ruby on Rails and the MVC pattern
* Utilized Semantic UI React components and custom CSS to format and style front end
* Used react-dropzone to accept image from user, superagent to transfer the image, and Cloudinary to store the image

![upload](https://media.giphy.com/media/OrdkIZnSq8hIQ/giphy.gif)
### Upload an image through drag-and-drop or select by file

![add text](https://media.giphy.com/media/5HYwWn2zd7QZO/giphy.gif)
### Add text to top and bottom of the image uploaded

![create meme](https://media.giphy.com/media/vohWmmRxioIZa/giphy.gif)
### Create a meme in an instant!

A snippet of task list for different tracks of work: 

- uploaded image sent to cloudinary through help from superagent √
- include text_top, text_bottom properties inside constructor as "" (for initial state) √
- use URL from image to render on page √
- include input fields for 2 text (put inside upload form, functional components) √
- [backend] onClick, send a POST request through axios (upload form container component) √
(url is saved in state) √
  - install axios √
  - include import axios √
- add a "preview meme" link (disguised as button) for preview image with text √
- [frontend] render newly created meme for preview √
  - either used the url from state or response from backend API √

- Show '/preview' with meme (this also includes 2 buttons: 'edit' and 'create meme') - s-bruce, liz
- Show 'memes/index' with meme shown below image upload form - sylee

