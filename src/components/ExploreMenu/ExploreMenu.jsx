import './ExploreMenu.css';
import {menu_list} from '../../assets/assets'
const ExploreMenu=({category,setCategory})=>{
    return(
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore the Menu</h1>
            <p className="explore-menu-text"> Dive into a wide range of gourmet selections from our multi-cuisine restaurant.</p>
        <div className='explore-menu-list'>
        {menu_list.map((item,index)=>
            {
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
        <hr/>
        </div>
    );
}

export default ExploreMenu;