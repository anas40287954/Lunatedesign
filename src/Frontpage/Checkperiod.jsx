import { useEffect } from "react"
import { useRef } from "react"
import { forwardRef } from "react"

function Checkperiod(period,ref){
    const h1Ref=useRef(null)
       
    useEffect(() => {
          if (h1Ref.current) {
            const h1text = h1Ref.current.textContent;
            if (h1text.includes('.')) {
              const splits=h1text.split()
              console.log(splits)
      
            } else {
              console.log('dsa')
            }
          }
      
        }, [])
      
}
export default forwardRef(Checkperiod)