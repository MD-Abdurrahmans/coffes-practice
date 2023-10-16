import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffesCard from "../../components/coffesCard/CoffesCard";


const Home = () => {
    const loaderCoffes = useLoaderData();
    const [coffes,setCoffes] = useState(loaderCoffes);
    // console.log(loaderCoffes)

 
    return (
        <>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

{/* our products */}
<h1 className="text-center p-8 text-5xl">Add Coffes</h1>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

  
    {
        coffes?.map(coffe=>   <CoffesCard 
        
               key={coffe?._id}
              coffe={coffe}
              coffes={coffes}
              setCoffes={setCoffes}
              
            ></CoffesCard> )
    }

 </div>

   



        </>
    );
};

export default Home;