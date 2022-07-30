const ArchiveMusicAnjuFilter = ({ filterItem, menuItems }) => {
    return (
      <>
        <div className="d-flex justify-content-center">
          {menuItems.map((Val, id) => {
            return (
              <p onClick={() => filterItem(Val)} key={id}>
                {Val}<br/>
              </p>
            );
          })}
          <p onClick={() => filterItem('all')} key={"all"}>
            All Releases
          </p>
        </div>
      </>
    );
  };
  
  export default ArchiveMusicAnjuFilter;