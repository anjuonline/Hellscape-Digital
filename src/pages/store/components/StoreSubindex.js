import { NavLink } from 'react-router-dom';

const StoreSubindex = () => {
    return (
      <>           
            <div class="containedText">
                <h3>
                    By Brand
                </h3>  
                <p>   
                    <div class="subindexFont">
                        <NavLink to={"/merch"}>Hellscape Digital</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/anjusupplyco"}>Anju Supply Co.</NavLink>
                    </div>  
                </p>        
            </div>
      </>
    );
  };
  export default StoreSubindex;