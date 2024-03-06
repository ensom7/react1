
import Card from '../../components/Card/Card';
import "./Catalog.css";
import {tovar} from '../../data';
import { useState } from 'react';
export default function Catalog(){
  const[searchQuery,setSearchQuery] = useState("");
  const searchTovar = tovar.filter((item) => item.name.toLowerCase().includes(searchQuery))
  // function search (e){
  //   setSearchQuery(e.target.value);
  // }
    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                  <div className="category">
                    <input type="submit" value="Все"/>
                    <input type="submit" value="Топ"/>
                    <input type="submit" value="Низ"/>
                    <input type="submit" value="Обувь"/>
                  </div>
                  <input type="search" className='btn_search' placeholder='Поиск' onChange={(e) => setSearchQuery(e.target.value)} />
                  <hr />
                  <div className="tovar_content">
                    
                  {
                  searchTovar.length ?
                  searchTovar.map((tovar,index) =>(
                    <Card key={index} {...tovar}/>
                ))
              :
              <p>По запросу {searchQuery} ничего не найдено</p>
              }
                  </div>
                </div>
            </div>
        </div>
    )
}