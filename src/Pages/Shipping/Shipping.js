import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shipping.css'
import toast from 'react-hot-toast';

const Shipping = () => {
    const navigate = useNavigate()
    const handleForm = (e) => {
        e.preventDefault();
        navigate('/confirmOrder')
        toast.success('Order has beed placed!');
    }

    return (
        <div className='shipping'>
            <div className="form-container">
                <form onSubmit={handleForm}>
                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Name' />
                        </div>

                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Address' />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder='Phone' />
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Save & Continue" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipping;
