import Carta from "./carta";
import NavBar from "./navbar";


const ImageGallery = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/photos/?client_id=I8Hi9XEoJX032J3KYB2g9OgHFYylEmSgv6cKD7wqI_Q&per_page=30');
    if (!response.ok) {
      throw new Error('Error en la solicitud de la API');
    }
    const images = await response.json();
    

    return (

      <main className="mx-auto max-w-7xl p-4">
         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
          {images.map(image => {
            const totalPhotos = image.sponsorship && image.sponsorship.sponsor 
              ? image.sponsorship.sponsor.total_photos 
              : image.user.total_photos;

            return (
              
            
              <Carta 
                image={image.urls.small} 
                initialLikes={image.likes} 
                key={image.id} 
                visto={totalPhotos}
                profPhoto={image.user.profile_image.small} 
                name={image.user.name}
              />
              
              
            );
          })}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    return <div>Error al cargar las imágenes</div>;
  }
};

export default ImageGallery;