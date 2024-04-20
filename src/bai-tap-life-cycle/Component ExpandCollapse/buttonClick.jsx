import { useState } from "react"
import GioiThieu from "./gioithieu"

export default function ButtonClick() {
    const [checkButton, setCheckButton] = useState(false)
    const handleButton = () => {
        setCheckButton(!checkButton)
    }
    return (
        <div>
            <button
                onClick={handleButton}
            >{checkButton ? 'đóng giói thiệu' : 'xem giới thiệu'}</button>
            {checkButton && <GioiThieu />}
        </div>

    )
}