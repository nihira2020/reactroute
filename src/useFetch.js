import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, dataupdate] = useState(null);
    const [errordata, errorupdate] = useState(null);
    const [isloaded, loadchange] = useState(true);


    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok){
                throw new Error("API call has issue");
            }
            return res.json();            
        }).then(result => {
            setTimeout(() => {
                dataupdate(result);
                errorupdate(null);
                loadchange(false);
            }, 20);
        }).catch(err => {
            errorupdate(err.message);
            loadchange(false);
        })
    }, [url])
    return { data, errordata, isloaded }
}

export default useFetch;