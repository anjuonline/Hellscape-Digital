const ArchiveMusicAnjuFilter = ({ filterItem, menuItems }) => {
    return (
      <>
        <div className="flexColumn">
          <p onClick={() => filterItem('all')} key={"all"}>
            All Releases&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          {menuItems.map((Val, id) => {
            return (
              <p onClick={() => filterItem(Val)} key={id}>
                {Val}&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            );
          })}
        </div>
      </>
    );
  };
  
  export default ArchiveMusicAnjuFilter;