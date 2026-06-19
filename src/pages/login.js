import React,{useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom"


const Login=()=>{
    const [formData,setFormData]=useState({email:"",password:""});
    const [error,setError]=useState("");
    const navigate=useNavigate();
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }

    const handleSubmitLogin=async (e)=>{
    e.preventDefault();
    setError("");

    const url=" https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin"
    
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
    };


    try{
        const response=await fetch(url,options);
        const responseJson=await response.json();
        if(response.ok){
           const token=responseJson.data.token;
           Cookies.set("jwt_token",token);
           navigate("/");
        }
        else{
            setError(responseJson.message);
        }
    }
    catch(e){
        setError("Something went wrong. Please try again.");
    }
   };

    return(
        <>
        <section className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold  text-gray-800 text-blue-500 mb-2">Go Business</h1>
                <p className="text-gray-600  mb-6">Sign in to open your referral dashboard.</p>
                
                <form className="space-y-4" onSubmit={handleSubmitLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Sign in
                    </button>

                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}

                </form>
            </div>
        </section>
        </>
    )
}

export default Login;