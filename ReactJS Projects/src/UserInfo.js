function UserInfo(props)
{
    return(
        <div className="user-info">
            <h2>{props.username}</h2>
            <h2>{props.cnumber}</h2>
            <h2>{props.psize}</h2>

        </div>
    )
}
export default UserInfo