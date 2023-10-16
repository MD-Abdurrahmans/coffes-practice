import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const updateCoffes = useLoaderData();
//   console.log(updateCoffes)

    const  {_id,name,chief,supplier,taste,category,details,photo} = updateCoffes;

    const handleUpdateProduct =(event)=>{

        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const chief = form.chief.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name,chief,supplier,taste,category,details,photo)
        const updateCoffes = {name,chief,supplier,taste,category,details,photo}
console.log(updateCoffes)
        fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes/${_id}`,{

         method:"PUT",
         headers:{
         'content-type':'application/json' 
        },
        body:JSON.stringify(updateCoffes)
        })
        .then(res=>res.json())
        .then(data=>{

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Coffes added ',
                    // icon: 'Success',
                    confirmButtonText: 'Ok'
                  })
            }

        })
     
    } 

    return (
        <div className="container mx-auto">
         
        <form onSubmit={handleUpdateProduct}  className="space-y-16 mt-5 mb-6">
            <h1 className="text-5xl text-center">Update Existing Coffee Details</h1>
            <p className="mx-auto w-1/2 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <div className="flex flex-wrap">
         

         {/* Name */}
         
                     <div className="form-control w-1/2 ">
           <label className="label">
             <span className="label-text">Name</span>
           </label>
           <label className="input-group w-full">
             <span>Name</span>
             <input type="text" name='name' defaultValue={name}   className="input w-full md:mr-4 input-bordered" />
           </label>
         </div>
         {/*  Chief */}
                     <div className="form-control w-1/2">
           <label className="label">
             <span className="label-text">Your Chief</span>
           </label>
           <label className="input-group">
             <span>Chief</span>
             <input type="text" name='chief'   defaultValue={chief}  className="input w-full input-bordered" />
           </label>
         </div>
         
         {/* Supplier */}
         
                     <div className="form-control w-1/2 ">
           <label className="label">
             <span className="label-text">Supplier</span>
           </label>
           <label className="input-group w-full">
             <span>Supplier</span>
     <input type="text" name='supplier'  defaultValue={supplier}  className="input w-full md:mr-4 input-bordered" />
           </label>
         </div>
         {/* Taste */}
                     <div className="form-control w-1/2">
           <label className="label">
             <span className="label-text">Taste</span>
           </label>
           <label className="input-group">
             <span>Taste</span>
             <input type="text" name='taste' defaultValue={taste}   className="input w-full input-bordered" />
           </label>
         </div>
         
         {/* Category */}
         
                     <div className="form-control w-1/2 ">
           <label className="label">
             <span className="label-text">Category</span>
           </label>
           <label className="input-group w-full">
             <span>Category</span>
             <input type="text" name='category' defaultValue={category}  className="input w-full md:mr-4 input-bordered" />
           </label>
         </div>
         {/* Details */}
                     <div className="form-control w-1/2">
           <label className="label">
             <span className="label-text">Details</span>
           </label>
           <label className="input-group">
             <span>Details</span>
             <input type="text" name='details' defaultValue={details}  className="input w-full input-bordered" />
           </label>
         </div>
         {/* Photo */}
                     <div className="form-control w-full">
           <label className="label">
             <span className="label-text">Photo</span>
           </label>
           <label className="input-group">
             <span>Photo</span>
             <input type="text" name='photo' defaultValue={photo}  className="input w-full input-bordered" />
           </label>
         </div>
         {/* Submit */}
                     <div className="form-control w-full mt-9">
          
           <label className="input-group">
          
             <input type="submit"  value='Update Coffes' className="btn  w-full bg-[#D2B48C]" />
           </label>
         </div>
         
         
         
    
                 </div>

        
               

        </form>
        </div>
    );
};

export default UpdateProduct;