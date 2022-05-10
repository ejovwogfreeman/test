import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setisPendnig] = useState(true);

    useEffect(()=> {

        // const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setisPendnig(false);
                });
                // .catch(err => {
                //   console.log(err.message);
                // })
    }, 1000);

    // return () => abortCont.abort();

  }, [url]);

  return {data, isPending}

}
 
export default useFetch;


// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIspending] = useState(true);
//     const [error, setError] useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch(url)
//                 .then(res => {
//                     if(!res.ok) {
//                         throw Error('could not fetch data for this resource');
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     setData(data);
//                     setIspending(false);
//                     setError(null);
//                 })
//                 .catch(err => {
//                     setIspending(false);
//                     setError(err.message);
//                 })
//         }, 1000);
//     }, [url]);
// }