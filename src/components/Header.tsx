import { useEffect, useState } from "react";
import UserService from "./UserService";


interface Props {
    token : string | null,
    setToken : React.Dispatch<React.SetStateAction<string | null>>
}

export default function Header({token, setToken} : Props){
    const [user, setUser] = useState<{name : string, avatar: string} | null>(null)

    useEffect(() =>{
        const getData = async () => {
            const res = await UserService.getInfo(token).catch(() => {setToken(null)})
            
            res && setUser(res.data)
        }
        try {
            void getData()
        }
        catch(err){
            console.log(err, "42 42 42 42");
            
        }
    }, [token, setToken])

    const onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        const target = evt.target as HTMLFormElement
        const respToken = async () => {
            const res = await UserService.getToken(target.login.value, target.password.value)
            setToken(res)
            
        }
        void respToken()

    }

    const onClick = () => {
        setToken(null)
        localStorage.setItem('token', '')
    }


    return (
        <div className="header__wrapper">
            <h2>Neto Social</h2>

            {user? ( <div className="user__info">
                        <span>{`Hello, ${user.name}`}</span>
                        <img src={user.avatar} />
                        <button onClick={onClick}>Logout</button>
                    </div>):
            <form className="header__form" onSubmit={onSubmit}>
                <input type="text" id="login" placeholder="Username"/>
                <input type="text" id="password" placeholder="Password"/>
                <button id="header__btn">Login</button>
            </form>}
        </div>
    )
}