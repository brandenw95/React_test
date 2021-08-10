import Button from './Button'


const Header = ({ title }) => {

    const onClick = () =>{
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='Blue' text='ADD' onClick={onClick}/>


        </header>
    )
}



export default Header
