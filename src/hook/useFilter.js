import { useContext } from "react"
import { FiltersContext } from "../context/Filters"
//caston Hooks
export function useFilters(){
    /*const [filter, setFilter] = useState({
      category: 'all',
      minPrice: 20
    })*/
    const {filter,setFilter} =useContext(FiltersContext) //extrat the status of useContext
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filter.minPrice &&
          (
            filter.category === 'all' ||
            product.category === filter.category
          )
        )
      })
    }
    return {filter,filterProducts,setFilter}
  }