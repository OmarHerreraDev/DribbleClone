
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import NavBarl from "@/components/navbarl";
import NavSearchl from "@/components/NavSearchl";



export default function Home (){


    
   
    return(
        <>
         <NavBarl />
         <NavSearchl initialVisible= {false}
         />
         <Header/>
        <ImageGallery/>
        
        </>
       

    )


}
 