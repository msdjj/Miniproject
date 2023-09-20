import React, { useContext, useEffect, useState } from "react";
const Api_URL="http://www.omdbapi.com/?apikey=2fd76422&S=titanic";
const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [isLoading,SetLoading]=useState(true);
    const [movies,setmovies]=useState([]);
    const [err,seterr]=useState({show:"false",msg:""})
    const getmovies=async(url)=>{
        try{
            const res=await fetch(url);
            const data= await res.json();
            console.log(data);
            if(data.Response==="True"){
                SetLoading(false)
                setmovies(data.Search)
            }
            else{
                seterr({
                    show:true,
                    msg:data.err
                })
            }

        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getmovies(Api_URL);

    },[])
return (
<AppContext.Provider value={{isLoading,movies,err}}>
    {children}
</AppContext.Provider>
)
}
//  Global context hook
const Globalcontext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,Globalcontext};