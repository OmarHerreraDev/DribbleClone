
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import NavBar from "@/components/navbar";
import NavSearch from "@/components/NavSearch";



export default function Home (){


    
   
    return(
        <>
         <NavBar />
         <NavSearch initialVisible= {false}
         />
         <Header/>
        <ImageGallery/>
        
        </>
       

    )


}
 

