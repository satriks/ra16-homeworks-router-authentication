import { useEffect, useState } from "react"
import UserService from "./UserService"
import { v4 } from "uuid"


interface Props {
    token : string | null,
    setToken : React.Dispatch<React.SetStateAction<string | null>>
}

export default function Board({token, setToken} : Props){
    const [datas, setDatas] = useState<{image: string, title: string, content : string}[]>([])

    useEffect(() =>{
        const getData = async () => {
            const res = await UserService.getData(token).catch(() => {setToken(null)})
            res && setDatas(res.data)
        }
        if (token) {
            try {
                void getData()  
            } catch (error) {
                console.log("27 27 37");
                
            }
            
            }
    }, [token, setToken]);

    if (!token) {
        return (
            <div className="intro" >
                <h2>Neto Social</h2>
                <span>Facebook and VK killer.</span>

            </div> 
        )

    };

    return (
        <div className="news__wrapper">
            {datas && datas.map((data) => { return (
                <div className="news" key={v4()}>
                    <img src={data.image}/>
                    <h2>{data.title}</h2>
                    <span>{data.content}</span>
                </div>
                )   
            })
            }
        </div>
    )
}


