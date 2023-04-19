import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
    const twitterUsers = [
        {
            initialIsFollowing: true,
            username: "ferAstrozombie",
            name: "Fer Astrozombie"
        },
        {
            initialIsFollowing: false,
            username: "midudev",
            name: "Miguel Angel Duran"
        },
        {
            initialIsFollowing: true,
            username: "nirvana",
            name: "Nirvana"
        },
        {
            initialIsFollowing: true,
            username: "TheRamones",
            name: "The Ramones"
        }
    ]
    return(
        <section className="App">
            {
                twitterUsers.map(user => {
                    const {username, name, initialIsFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={username}
                            user={user}
                            username={username}
                            initialIsFollowing={initialIsFollowing}
                        />
                    )
                })
            }
        </section>
        
    )
}