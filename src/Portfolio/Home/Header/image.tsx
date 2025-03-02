import Profile from '/image/men clothes.jpg'
const Image:React.FC=()=>{
    const customize={
        width:"80%",
        height:"20vh",
        borderRadius:"50px"
    }
    return(
        <>
        <img src={Profile}alt="profile-image"style={customize}/>
        </>
    )
}
export default Image