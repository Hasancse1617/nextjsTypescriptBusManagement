import { NextPage } from "next";
import Link from "next/link";

const AllUser: NextPage = () =>{
    return(
        <div className="content-wrapper">
        {/* <Toaster position="top-right" reverseOrder={false}/> */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="float-left">All Admin</h4>
                    <h3><Link href="/admin/user/create"><a><button type="button" className="btn btn-primary float-right text-bold">Add Admin</button></a></Link></h3>
                  </div>
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                      <tr>
                        <th>ID.</th>
                        <th>Admin Name</th>
                        <th>Admin Type</th>
                        <th>Admin Image</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                    {/* {
                      !loading?
                        users.length > 0 ?
                        users.map((user)=>(
                          <tr key={user._id}>
                          <td>{ user._id }</td>
                          <td>{ user.name }</td>
                          <td><span className="badge bg-success">{ user.user_type }</span></td>
                          <td><img width="100" width="100" src={`${process.env.REACT_APP_API_PATH}/images/user_images/${user.image}`}/></td>
                          <td>
                            { user._id !== _id? <button onClick={() => deleteUser(user._id)} className="text-danger"><i className="fas fa-trash"></i></button> : ''}
                          </td>
                        </tr>
                        ))
                        :'No Admins found'
                      :(<Loader/>)
                    } */}
                      </tbody>
                    </table>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
           {/* {!loading ? <Pagination page={page} perPage={perPage} count={count} pageLink={pageLink} /> : ''} */}
        </section>
        </div>
    );
}
export default AllUser;