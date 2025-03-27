
import ImageGallery from "@/components/ImageGallery";
import NavSearch from "@/components/NavSearch";

export default function Shots() {


    return (
        <>
            <NavSearch initialVisible={true} />
            <ImageGallery />
           
        </>
    )

}