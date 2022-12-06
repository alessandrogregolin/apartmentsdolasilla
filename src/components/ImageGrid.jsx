import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import variables from '../variables.json';

const images = [
    {
        "src": "img/grid/facciata.jpg",
        "thumbnail": "img/grid/facciata.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Il condominio"
    },
    {
        "src": "img/grid/salotto.png",
        "thumbnail": "img/grid/salotto.png",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Dolasilla Charme apartment"
    },
    {
        "src": "img/grid/salotto2.jpg",
        "thumbnail": "img/grid/salotto2.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "I dettagli fanno la differenza"
    },
    {
        "src": "img/grid/salotto3.jpg",
        "thumbnail": "img/grid/salotto3.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Un salotto dove rilassarsi o guardare un film"
    },
    {
        "src": "img/grid/cucina.jpg",
        "thumbnail": "img/grid/cucina.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Cucina"
    },
    {
        "src": "img/grid/cucina2.jpg",
        "thumbnail": "img/grid/cucina2.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Cucina"
    },
    {
        "src": "img/grid/cucina3.jpg",
        "thumbnail": "img/grid/cucina3.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Cucina com apio lavello"
    },
    {
        "src": "img/grid/tavoloCucina.jpg",
        "thumbnail": "img/grid/tavoloCucina.jpg",
        "thumbnailWidth": 400,
        "thumbnailHeight": 250,
        "caption": "Un comodo divano dove rilassarsi o guardare un film"
    },
    {
        "src": "img/grid/tavoloCucina3.jpg",
        "thumbnail": "img/grid/tavoloCucina3.jpg",
        "thumbnailWidth": 400,
        "thumbnailHeight": 500,
        "caption": "Ampio tavolo dove mangiare e bere in compagnia"
    },
    {
        "src": "img/grid/lampadine.jpg",
        "thumbnail": "img/grid/lampadine.jpg",
        "thumbnailWidth": 450,
        "thumbnailHeight": 174,
        "caption": "I dettagli sono importanti"
    },
    {
        "src": "img/grid/cameraMatrimoniale.jpg",
        "thumbnail": "img/grid/cameraMatrimoniale.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Camera matrimoniale"
    },
    {
        "src": "img/grid/tv_camera.jpg",
        "thumbnail": "img/grid/tv_camera.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Camera matrimoniale"
    },
    {
        "src": "img/grid/soppalco.jpg",
        "thumbnail": "img/grid/soppalco.jpg",
        "thumbnailWidth": 320,
        "thumbnailHeight": 174,
        "caption": "Soppalco con 2 letti singoli e finestra sui monti"
    },
    {
        "src": "img/grid/scala.jpg",
        "thumbnail": "img/grid/scala.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Scala per accedere al soppalco"
    },
    {
        "src": "img/grid/letto_salotto1.jpg",
        "thumbnail": "img/grid/letto_salotto1.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Letto aggiuntivo in salotto"
    },
    {
        "src": "img/grid/letto_salotto2.jpg",
        "thumbnail": "img/grid/letto_salotto2.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Letto aggiuntivo in salotto"
    },
    {
        "src": "img/grid/letto_salotto3.jpg",
        "thumbnail": "img/grid/letto_salotto3.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Letto aggiuntivo in salotto"
    },
    {
        "src": "img/grid/bagno_grande.jpg",
        "thumbnail": "img/grid/bagno_grande.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Bagno con ampia doccia"
    },
    {
        "src": "img/grid/bagno_grande2.jpg",
        "thumbnail": "img/grid/bagno_grande2.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Bagno con ampia doccia"
    },
    {
        "src": "img/grid/bagno_piccolo.jpg",
        "thumbnail": "img/grid/bagno_piccolo.jpg",
        "thumbnailWidth": 250,
        "thumbnailHeight": 320,
        "caption": "Bagno di servizio"
    }
];

class ImageGrid extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: images,
            currentImage: 0
        };        
    }

    render () {
        return (
        <Gallery images={this.state.images} enableLightbox={true} enableImageSelection={false} lightboxWidth={800} rowHeight={250} showImageCount={false} preloadNextImage={true} margin={5}/> 
        );
    };
};




export default ImageGrid;