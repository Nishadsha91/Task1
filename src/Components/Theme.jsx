import { useState } from "react"


function Theme1()
{
    const [color , setColor] = useState('light');

    const changeColor = () => {

                if(color === 'light'){

                    setColor('Dark')

                }else{

                    setColor('light')
                }

    }


      return(
        <>
        <div className="body">
        <div className={color === 'Dark' ? 'body Dark' : 'body light'}>
        {/* <button onClick={changeColor} className="but"></button> */}
        <h1 className="font">Change Mode</h1>
        <img src="/dark.png" onClick={changeColor} className="but" style={{width: '40px' , height: '40px'}}></img>
        </div>
        </div>
        
        </>
      )


}

export default Theme1

