import './Style/Dashboard.css'
import { Link } from 'react-router-dom';
import { products } from '../../data/localization'
import useGetAllUsers from '../../hooks/userGetAllUsers';
import Loader from '../Skeleton/Loader'
import axios from 'axios'
import toast from 'react-hot-toast'

const Customer = () => {
    const { allUsersData, isLoading } = useGetAllUsers();

    const deleteUser = async (id) => {

        try {
            const token = localStorage.getItem('token')
            if (!token) throw new Error('Token not found')
            const resp = await axios.delete(`${import.meta.env.VITE_SERVER}/api/v1/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('User deleted')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="dash-container">
                <div className="sidebar">
                    <Link className="sidebar-btn active" to={"/admin/dashboard/products"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Products</Link>
                    <p className="sidebar-btn active" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Users</p>
                    <Link className="sidebar-btn active" to={"/admin/dashboard/orders"} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Orders</Link>
                </div>
                <div className="content">
                    <div className='product-header'>
                        <h2>Customer</h2>
                    </div>
                    <div id="customer" >
                        <div className="row">
                            <div className="heading">Status</div>
                            <div className="heading">Name</div>
                            <div className="heading">Email</div>
                            <div className="heading">Role</div>
                            <div className="heading">Action</div>
                        </div>
                        {isLoading ?
                            <Loader /> :
                            allUsersData?.map(user => (
                                <div key={user?._id} className="row">
                                    <div className="subitem">{user?._id.slice(0, 10)}...</div>
                                    <div className="subitem">{user?.firstName}{" "}{user.lastName}</div>
                                    <div className="subitem">{user?.email}</div>
                                    <div className="subitem">{user?.isAdmin ? "Admin" : "User"}</div>
                                    <div className="subitem">
                                        <button onClick={() => deleteUser(user?._id)} className="user-delete-button">Delete</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Customer;