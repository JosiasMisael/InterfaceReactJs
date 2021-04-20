import React, {useRef, useEffect, useState} from 'react'

//import './dark';
const Switch = () => {
    const [checked ,setChecked] = useState(false);
    const ref = useRef(null);
    const handleChange = ()=>{
        setChecked(ref.current.checked)
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')

        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
        //console.log(event.target.checked);
    }
 function changeMedia(mq){
        setChecked(mq.matches);
        if(mq.matches){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')

        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
}

    useEffect(()=>{
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        //mq.addEventListener(changeMedia, true)
         mq.addListener(changeMedia);
        if (mq.matches) {
            setChecked(true);
          }
    },[]);
    return (
        <>
            <div className="dark-mode">
           <p className="dark-mode-title">Dark Mode</p>
           <input ref={ref} type="checkbox" className="checkbox" checked={checked} id="checkbox" onChange={handleChange}/>
           <label className="switch" htmlFor="checkbox"></label>
        </div>
        </>
    )
}
export default Switch
