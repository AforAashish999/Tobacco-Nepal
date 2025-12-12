
import CategoriesList from "./categories/page"
import ProductHeroSection from "./components/ProductHeroSection"


export default  function({children}){
   

    return(
        <div >
            <ProductHeroSection />
       
            <CategoriesList />

          {children}

        </div>
    )
}