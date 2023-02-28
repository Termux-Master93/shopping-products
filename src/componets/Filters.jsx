import {useId } from 'react'
import './Filter.css'
import { useFilters } from '../hook/useFilter';
export function Filters() {
    const { filter, setFilter } = useFilters()
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label
                    htmlFor={minPriceFilterId}
                    className="price">Price</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min={0}
                    max={1000}
                    onChange={handleChangeMinPrice}
                    value={filter.minPrice}
                />
                <span>{filter.minPrice}</span>
            </div>
            <div>
                <label
                    htmlFor={categoryFilterId}
                    className="category">Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} >
                    <option value='all'>Todos</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}