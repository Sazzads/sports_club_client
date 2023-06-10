import React from 'react';
import useCourseCart from '../../hooks/useCourseCart';

const MySelectedClasses = () => {
    const [cart, refetch] = useCourseCart()
    console.log(cart);
    return (
        <div>
            <h2>my Selected classes</h2>
            <h4>{cart?.length || 0}</h4>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;