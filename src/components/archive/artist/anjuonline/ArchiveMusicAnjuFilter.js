import MusicAnjuData from 'data/music/MusicAnjuData';

const ArchiveMusicAnjuFilter = ({ filterItem, setItem, menuItems }) => {
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
          <p onClick={() => setItem(MusicAnjuData)}>
            All Releases
          </p>
        </div>
      </>
    );
  };
  
  export default ArchiveMusicAnjuFilter;