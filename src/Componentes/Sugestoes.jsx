export default function Sugestoes(){
    const sugestoes = [
    {
    img:"assets/img/bad.vibes.memes.svg", 
    nome:"bad.vibes.memes", 
    texto:"Segue você"
    },
    {
    img:"assets/img/chibirdart.svg", 
    nome:"chibirdart", 
    texto:"Segue você"
    },
    {
    img:"assets/img/razoesparaacreditar.svg",
    nome:"razoesparaacreditar",
    texto:"Novo no Instagram"
    },
    {
    img:"assets/img/adorable_animals.svg", 
    nome:"adorable_animals", 
    texto:"Segue você"
    },
    {
    img:"assets/img/smallcutecats.svg",
    nome:"smallcutecats", 
    texto:"Segue você"
    }
    ]
    function Sugestao(props) {
        const{img, nome, texto} = props
        return (
            <div className="sugestao">
                <div className="usuario">
                    <img src={img} />
                    <div className="texto">
                        <div className="nome">{nome}</div>
                        <div className="texto">{texto}</div>
                    </div>
                </div>
    
                <div className="seguir">Seguir</div>
            </div>
        )
    }

    return(
        <div>
        {sugestoes.map(dados => <Sugestao img={dados.img} nome={dados.nome} texto={dados.texto}/>)}
        </div>
    )
}