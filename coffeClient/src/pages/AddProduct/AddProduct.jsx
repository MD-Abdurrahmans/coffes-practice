
import Swal from 'sweetalert2'

const AddProduct = () => {


    // function add product

    const handleAddProduct =(event)=>{

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
        const coffes = {name,chief,supplier,taste,category,details,photo}
console.log(coffes)
        fetch('https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes',{

         method:"POST",
         headers:{
         'content-type':'application/json' 
        },
        body:JSON.stringify(coffes)
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
         
         <form onSubmit={handleAddProduct}  className="space-y-16 mt-5 mb-6">
             <h1 className="text-5xl text-center">Add New Coffee</h1>
             <p className="mx-auto w-1/2 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
         <div className="flex flex-wrap">
          

          {/* Name */}
          
                      <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group w-full">
              <span>Name</span>
              <input type="text" name='name' placeholder="Name" className="input w-full md:mr-4 input-bordered" />
            </label>
          </div>
          {/*  Chief */}
                      <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Your Chief</span>
            </label>
            <label className="input-group">
              <span>Chief</span>
              <input type="text" name='chief' placeholder="Enter coffee chef" className="input w-full input-bordered" />
            </label>
          </div>
          
          {/* Supplier */}
          
                      <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group w-full">
              <span>Name</span>
              <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input w-full md:mr-4 input-bordered" />
            </label>
          </div>
          {/* Taste */}
                      <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input type="text" name='taste' placeholder="Enter coffee taste" className="input w-full input-bordered" />
            </label>
          </div>
          
          {/* Category */}
          
                      <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group w-full">
              <span>Category</span>
              <input type="text" name='category' placeholder="Enter coffee category" className="input w-full md:mr-4 input-bordered" />
            </label>
          </div>
          {/* Details */}
                      <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input type="text" name='details' placeholder="Enter coffee details" className="input w-full input-bordered" />
            </label>
          </div>
          {/* Photo */}
                      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <span>Photo</span>
              <input type="text" name='photo' placeholder="Enter photo URL" className="input w-full input-bordered" />
            </label>
          </div>
          {/* Submit */}
                      <div className="form-control w-full mt-9">
           
            <label className="input-group">
           
              <input type="submit"  value='ADD PRODUCTS' className="btn  w-full bg-[#D2B48C]" />
            </label>
          </div>
          
          
          
     
                  </div>

         
                

         </form>
         </div>

    );
};

export default AddProduct;