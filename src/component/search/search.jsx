import { useEffect } from "react";
import { useRef } from "react";

function Search({onSearch}) {
    const bgnde = useRef();
    const endde = useRef();

    useEffect( ()=> {
       const today = new Date().toISOString().slice(0,10);
       endde.current.value = today;
    }, [])

    const searchHandle = (event) =>{
        event.preventDefault();
        
        onSearch(
        bgnde.current.value.replaceAll("-",""),
        endde.current.value.replaceAll("-","")
        );
    };


    return ( 
        <div>
            <form onSubmit={searchHandle}>
                <input type="date" ref={bgnde} />
                <input type="date" ref={endde} />
                <button type="submit">검색</button>
            </form>
        </div>
     );
}

export default Search;