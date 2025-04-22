# 🎨 Virtual Art Gallery

The **Virtual Art Gallery** is a simple static site designed to display digital artworks in a clean environment. It offers a responsive grid-based layout that adapts seamlessly across devices, providing a pleasant experience for visitors.

---

## 📁 Project Structure

The project is organized as follows:

artsphere
├── about.html
├── contact.html
├── gallery.html
├── index.html
├── package-lock.json
├── README.md
└── src
    ├── assets
    │   ├── icons
    │   │   ├── bars.svg
    │   │   ├── creativity-svgrepo-com.svg
    │   │   ├── download.svg
    │   │   ├── menu.svg
    │   │   ├── search.svg
    │   │   └── set-up-svgrepo-com.svg
    │   ├── images
    │   │   └── gallery
    │   └── resume
    ├── css
    │   ├── about.css
    │   ├── contact.css
    │   ├── gallery.css
    │   ├── main.css
    │   └── navbar.css
    ├── js
    │   ├── app.js
    │   └── gallery.js
    └── pages



## 🖼️ Adding Artworks

To add new artwork to the gallery, follow these steps:

### 1. Upload Image

Place your image file inside the following directory : src/assets/images/gallery/

### 2. Update JavaScript

Open `src/js/gallery.js` and add a new entry to the `artworks` list. Each artwork is represented as an object with the following properties:

- `image`: Path to the image file.
- `title`: Title of the artwork.
- `artist`: Name of the artist.
- `description`: Brief description of the artwork.
- `fullDescription`: Complete description of the artwork.

Example:
    {
        image: './src/assets/images/gallery/example.jpg',
        title: 'TITLE',
        artist: 'ARTIST',
        description: 'BRIEF DESCRIPTION',
        fullDescription: 'COMPLETE DESCRIPTION'
    }



## 🚀 Running the Project

To view the gallery:

1. Clone the repository:

    git clone https://github.com/Prajwal-Jagadeesh-Guliyavar/artsphere.git


2.  install `live-server` : npm install -g live-server
    navigate to the project directory and run a local server by :
                ```live-server --port={port number}```



## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to improve the gallery or add new features, Thank You.........