export const UserGreeting = () => {
    const isLoggedIn = true
    return <div> Welcome { isLoggedIn ? 'Andrew' : 'Guest'} </div>
}