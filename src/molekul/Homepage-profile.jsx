import ProfilePlaceholder from '../atom/profile-placeholder'
import { homePageProfil } from '../data/data'

function HomepageProfile() {
  return (
    <div className='homepage-profile'> 
      {homePageProfil.map((item) => (
        <ProfilePlaceholder className='profile-placeholder' key={item.id} path={item.path}/>
      ))}
    </div>
  )
}

export default HomepageProfile