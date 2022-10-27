

function LinkButtons({ refObj }) {


  return (
   <div className='linkButtonBox' >
        <div 
            className='linkButtonItem'
            onClick={() => refObj.skillsRef.current?.scrollIntoView({behavior: 'smooth'})}
        >
           Skills
        </div>
        <div 
            className='linkButtonItem'
            onClick={() => refObj.projectRef.current?.scrollIntoView({behavior: 'smooth'})}
        >
            Projects
        </div>
        <div 
            className='linkButtonItem'
            onClick={() => refObj.aboutRef.current?.scrollIntoView({behavior: 'smooth'})}
        >
            About
        </div>
        <div 
            className='linkButtonItem'
            onClick={() => refObj.contactRef.current?.scrollIntoView({behavior: 'smooth'})}
        >
            Contact
        </div>  
   </div>
  )
}

export default LinkButtons