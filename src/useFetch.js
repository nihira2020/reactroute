import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, dataupdate] = useState(null);
    const [errordata, errorupdate] = useState(null);
    const [isloaded, loadchange] = useState(true);


    useEffect(() => {
        const abortcont = new AbortController();
        fetch(url, { signal: abortcont.signal }).then(res => {
            if (!res.ok) {
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
            if (err.name === 'AbortError') {
              //  console.log('Abort error');
            } else {
                errorupdate(err.message);
                loadchange(false);
            }
        })
        return () => abortcont.abort();

    }, [url])
    return { data, errordata, isloaded }
}

export default useFetch;