import React, { useEffect } from 'react'
import axios from 'axios'
const Listcategories = () => {
    const [categorie, setCategories] = useState([]);
    const fetchCategories = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/categories")
            setCategories(res.data)
            console.log("tesrt",res)

        } catch (error) {
            console.log("error")
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div>
            liste des categories
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Image categorie</th>
                        <th>nom categorie</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        categorie.map((cat,index)=>

                        )             }
                </tbody> */}
            </table>
                
        </div>
    )

}
export default Listcategories
