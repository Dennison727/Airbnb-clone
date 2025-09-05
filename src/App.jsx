import Navbar from "./components/Navbar" 
import PropertyCard from "./components/PropertyCard";
import AllButton from "./components/allbutton";
import Image from "./components/image";
import Showmore from './components/showmore';
import Footer from "./components/Footer"; 

function App() {
  return (
    <div>
        <div>
            <Navbar />
            <Image/>
            <AllButton/>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
            <PropertyCard image="/public/image/home.png"/>
            <PropertyCard image="/public/image/image 3.png"/>
            <PropertyCard image="/public/image/image 4.png"/>
            <PropertyCard image="/public/image/List 4.png"/>
            <PropertyCard image="/public/image/image 6.png"/>
            <PropertyCard image="/public/image/image 7.png"/>
            <PropertyCard image="/public/image/image 8.png"/>
            <PropertyCard image="/public/image/image 9.png"/>
            <PropertyCard image="/public/image/List 9.png"/>
            <PropertyCard image="/public/image/List 10.png"/>
            <PropertyCard image="/public/image/image 12.png"/>
            <PropertyCard image="/public/image/List 12.png"/>
            <PropertyCard image="/public/image/List 13.png"/>
            <PropertyCard image="/public/image/List 14.png"/>
            <PropertyCard image="/public/image/image 17.png"/>
            <PropertyCard image="/public/image/image 18.png"/>
        </div>
        <div>
          <Showmore />
        </div>
        <div>
          <Footer />
        </div>
    </div>

  )
}
export default App;
