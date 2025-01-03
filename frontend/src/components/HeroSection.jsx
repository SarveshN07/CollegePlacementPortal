import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Connecting Students to Their Future Careers</span>
                <h1 className='text-5xl font-bold'>Find the Perfect Opportunity to Start Your  <br /> <span className='text-[#6A38C2]'>Career </span></h1>
                <p>Welcome to the KLE College Placement Portal – your gateway to exclusive career opportunities, connecting students with top recruiters and industries for a successful future.</p>
            
            </div>
        </div>
    )
}

export default HeroSection