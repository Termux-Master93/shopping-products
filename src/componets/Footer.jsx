import './Footer.css';
import { useFilters } from '../hook/useFilter';
import { useCart } from '../hook/usecart';
export function Footer() {
    const {cart}=useCart()
    const {filter}=useFilters();
    return (
        <footer className='footer'>
            {JSON.stringify(filter,null,2)}
            {/*
            <h4>Prueba tecnica de react <span>@DayWebSite</span></h4>

             <h5>Shopping card width useConext and useReducer</h5>*/}
             {JSON.stringify(cart,null,2)}
        </footer>
    )
}