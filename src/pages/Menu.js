import { useState } from 'react';
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu Restoran Ranskyyy";
    const [menus, setMenu] = useState(
        [
            {
            idmenu : 1, 
            idkategori : 1, 
            menu : "Apel", 
            gambar : "apel.jpg", 
            harga : 10000,
            },

            {
            idmenu : 2, 
            idkategori : 1, 
            menu : "Jeruk", 
            gambar : "jeruk.jpg", 
            harga : 10000,
            },

            {
            idmenu : 3, 
            idkategori : 2, 
            menu : "Ayam Geprek", 
            gambar : "ayamgeprek.jpg", 
            harga : 20000,
            },

            {
            idmenu : 4, 
            idkategori : 2, 
            menu : "Udang Keju", 
            gambar : "udangkeju.jpg", 
            harga : 25000,
            },

            {
            idmenu : 5, 
            idkategori : 3, 
            menu : "Es teh", 
            gambar : "esteh.jpg", 
            harga : 5000,
            },

            {
            idmenu : 6, 
            idkategori : 3, 
            menu : "Cappucino Chocolate", 
            gambar : "cappucinochocolate.jpg", 
            harga : 15000,
            },
        ]
    )
    return (
        <div className="App">
            <Tabel menu={menus} titel={titel}/>
        </div>
    );
}

export default Menu;