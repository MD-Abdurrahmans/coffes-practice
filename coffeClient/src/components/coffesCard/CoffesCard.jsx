import { Link } from "react-router-dom";
import { HiTrash,HiEye,HiPencil } from "react-icons/hi2";
import Swal from 'sweetalert2'

const CoffesCard = ({coffe,setCoffes,coffes}) => {

    const  {_id,name,chief,supplier,taste,category,details,photo} = coffe;


    // function remove

    const handleRemove =()=>{
  
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {   

          fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes/${_id}`,{

          method:"DELETE",
   
          })
          .then(res=>res.json())
          .then(data=>{
            
           if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
  
               const remainingCoffes =  coffes?.filter(coffe=>coffe._id !== _id );
   
                setCoffes(remainingCoffes)
               // console.log(remainingCoffes)
               
           }
    
          })

        }
      })

      


    // console.log(_id)

    }



    return (
        <div>
               

        
     <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="w-1/2  shadow-2xl" />
  
   <div className="flex items-center justify-between border w-full "> 

   <div className="">
    
      <h1 className="">Name: {name}</h1>
      <h1 className="">Chief: {chief}</h1>
   
    </div>
   <div className="flex flex-col  space-y-4">

   <button className="btn bg-[#D2B48C]"> <HiEye className="text-white"></HiEye></button>
   
    <Link to={`/editProduct/${_id}`}>
   <button className="btn  bg-[#3C393B]"> <HiPencil className="text-white"/> </button>

    </Link>
   <button onClick={handleRemove}  className="btn bg-[#EA4744]"> <HiTrash className="text-white"/> </button>
   
    </div>
    
   </div>
  </div>
</div>


        </div>
    );
};

export default CoffesCard;