import { SocialIcon } from 'react-social-icons'
import styles from '../styles/Home.module.css'

function Social() {
  return (
    <div className='flex justify-center '>
      <div className='hover:scale-110 ease-out duration-200'>
        <SocialIcon 
          className={styles.logo }
          url='https://www.instagram.com/nomadiixlogos/'
          fgColor='black'
          bgColor='transparent'
        />
      </div>
      <div className='hover:scale-110 ease-out duration-200'>
        <SocialIcon 
          className={styles.logo}
          url='https://www.youtube.com/@NomaDiix/featured'
          fgColor='black'
          bgColor='transparent'
        />
      </div>
      <div className='hover:scale-110 ease-out duration-200'>
        <SocialIcon 
          className={styles.logo}
          url='https://github.com/NomaDiix'
          fgColor='black'
          bgColor='transparent'
        />
      </div>
      <div className='hover:scale-110 ease-out duration-200'>
        <SocialIcon 
          className={styles.logo}
          url='https://www.linkedin.com/in/fabian-martinez-rincon/'
          fgColor='black'
          bgColor='transparent'
        />
      </div>
  </div>
  
  )
}

export default Social