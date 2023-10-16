import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseContext from "../../firebase/useContext";


const Users = () => {

    const loadUsers = useLoaderData();
    const [users,setUsers] = useState(loadUsers);
    const {user,deleteUserFirebase,userUid} = UseContext();
console.log(user?.auth?.currentUser)
// const firebaseDelete = user?.auth?.currentUser;
    let count =0;

    // function for users remove
// console.log('cool',userUid)
    const handleUserRemove =(id)=>{

      // deleteUserFirebase()
      // .then(()=>{
      //   alert('user account deleted')
      // })
      // .catch((error)=>{console.error(error)})

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

             
                fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/users/${id}`,{
                    method:"DELETE",
    
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                if(data.deletedCount>0){
                      Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }

                                const remainingUsers =  users?.filter(user=>user._id!== id );

                                  setUsers(remainingUsers);                                

            })
            .catch((error)=>console.error(error))

            
            }
          })
  
    }



    return (
        <div>
          
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>S.NO</th>
        <th>Email</th>
        <th>CreationTime</th>
        <th>LastSignInAt</th>
        <th>Name</th>
        <th>UID</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

 {
       users?.map(user=>
        
        <tr key={user._id} >
        <th>{count+=1}</th>
     

        <td>{user?.email}</td>
        <td>{user?.creationAt}</td>
        <td>{user?.lastSignInAt}</td>
        <td>{user?.name}</td>
        <td>{user?.uid}</td>
        <td>
        <button  className="btn mr-3">Edit</button>
        <button onClick={()=>handleUserRemove(user?._id,user?.email)}  className="btn">Delete</button>

        </td>
      </tr>
        )
    
 }
    

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;