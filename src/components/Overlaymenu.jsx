import Navbar from "../molekul/Navbar";

const Overlaymenu = () => {
  return (
    <div className='overlay-container'>
      <div className='overlay-top'>
        <div className='overlay-top-left'>
       
        </div>
        <div className='overlay-top-right'>
          <a href="https://github.com/OnyanPokon" className="github">/ BY OnyanKonpon</a>
        </div>
      </div>
      <div className='overlay-bottom'>
        <div className='overlay-bottom-left'>

        </div>
        <Navbar />
        <div className='overlay-bottom-right'>

        </div>
      </div>
    </div>
  )
}

export default Overlaymenu;
