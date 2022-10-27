import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

function IconCluster() {
  return (
    <div className='iconCluster'>
      <div className='icon'>
        <a href="https://www.linkedin.com/in/matthew-bernhardt-20315545/" target="_blank" rel="noreferrer">
            <FaLinkedin className='fa-icon' />
        </a>
      </div>
      <div className='icon'>
        <a href="https://github.com/mattbernhardt23" target="_blank" rel="noreferrer">
            <FaGithub className='fa-icon'/>
        </a>
      </div>
      <div className='icon'>
        <a href="https://drive.google.com/file/d/1XoPKum1mpnwGKSqBLuERJtW26l6nO3GY/view?usp=sharing" target="_blank" rel="noreferrer">
            <FaFileDownload className='fa-icon'/>
        </a>
      </div>  
    </div>
  )
}


export default IconCluster