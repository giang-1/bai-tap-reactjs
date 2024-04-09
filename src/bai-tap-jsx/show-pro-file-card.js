import './card.css'
function ShowProFile() {
    return (
        <div className="container">
            <div className="card">
                <div className="card--header" />
                <img
                    className="avatar"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="avatar"
                />
                <div className="card--body">
                    <div>
                        <p className="text-header">giang đẹp trai</p>
                        <p className="text-sub">
                            tui đang học reactjs
                        </p>
                        <button className="btn third">FOLLOW</button>
                        <p style={{
                            color: "red"
                        }}>follow tui để biết thêm chi tiết nhé</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowProFile