import React from 'react'
import styles from '../styles/Home.module.css'
function Links() {
  return (
    <div className=' flex justify-center items-center flex-col text-center'>
    <h1 className={styles.code}>Programación</h1>
    <ul className=' w-[244px] sm:w-[320px] '>
      <li className='btn'><a className={styles.logo} href="https://nomadiix.github.io/Resume/" target={'_black'}>Resume</a></li>
      <li className='btn'><a className={styles.logo} href="https://fabianmartinez.vercel.app/" target={'_black'}>Portfolio</a></li>
      <li className='btn'><a className={styles.logo} href="https://fablogg.vercel.app/" target={'_black'}>Blog</a></li>    
    </ul>

    <h1 className={styles.code}>Redes</h1>
    <ul className=' w-[244px] sm:w-[320px] '>
        <li className='btn'><a className={styles.logo} href="https://github.com/NomaDiix" target={'_black'}>Github</a></li>
        <li className='btn'><a className={styles.logo} href="https://www.youtube.com/@NomaDiix/featured" target={'_black'}>Youtube</a></li>
        <li className='btn'><a className={styles.logo} href="https://www.linkedin.com/in/fabian-martinez-rincon/" target={'_black'}>Linkedin</a></li>    
        <li className='btn'><a className={styles.logo} href="https://www.instagram.com/nomadiixart/" target={'_black'}>Instagram NomaDiixArt</a></li>
        <li className='btn'><a className={styles.logo} href="https://www.instagram.com/nomadiixlogos/" target={'_black'}>Instagram NomaDiixLogos</a></li>
        <li className='btn'><a className={styles.logo} href="https://www.instagram.com/fabianm__11/" target={'_black'}>Instagram Fabianm__11</a></li>
        <li className='btn'><a className={styles.logo} href="https://opensea.io/NomaDiix" target={'_black'}>Opensea NFTS</a></li>
    </ul>
    
    <h1 className={styles.code}>Apuntes de Materias</h1>
    <ul className=' w-[244px] sm:w-[320px] '>
        <li className='btn'><a className={styles.logo} href="https://github.com/NomaDiix/CADP" target={'_black'}>CADP</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/Organizacion_de_Computadoras" target={'_black'}>OC</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/NomaDiix/Taller-de-Programacion" target={'_black'}>Taller de Programación</a></li>    
        <li className='btn'><a className={styles.logo} href="https://github.com/NomaDiix/Arquitectura-de-Computadoras" target={'_black'}>AC</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/FOD" target={'_black'}>FOD</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/Seminario-de-Lenguajes-Python" target={'_black'}>Seminarios Python</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/AyED" target={'_black'}>Ayed</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/OO1" target={'_black'}>OO1</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/ISO" target={'_black'}>ISO</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/DBD" target={'_black'}>DBD</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp/IS1" target={'_black'}>IS1</a></li>
    </ul>

    <h1 className={styles.code}>Organizaciónes</h1>
    <ul className=' w-[244px] sm:w-[320px] '>
        <li className='btn'><a className={styles.logo} href="https://github.com/FaboCorp" target={'_black'}>FaboCorp</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/MITH-arg" target={'_black'}>MITH-arg</a></li>
        <li className='btn'><a className={styles.logo} href="https://github.com/Cuestion-de-Espacio" target={'_black'}>Cuestion de Espacio</a></li>    

    </ul>

  </div>
    
  )
}

export default Links