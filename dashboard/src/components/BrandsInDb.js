import React, {useState,useEffect} from 'react';
import Brand  from './Brand';


function BrandsInDb(){

    const [brands,setListGenres] = useState([]);
    

    useEffect( () =>{
        fetch('/api/brands')
        .then(response => {
            return response.json()
        })
        .then(generos =>{
            setListGenres(generos.data)
            
        })
        .catch(error => console.log(error))
    },[])

    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                brands.map((brand,index)=>{
                                    return  <Brand  {...brand}  key={brand + index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        
    </React.Fragment>
    )
}
export default BrandsInDb;