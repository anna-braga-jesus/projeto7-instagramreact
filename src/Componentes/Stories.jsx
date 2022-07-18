export default function Stories() {
  const stories = [
    {
      img: "assets/img/9gag.svg",
      nome: "9gag",
    },
    {
      img: "assets/img/meowed.svg",
      nome: "meowed",
    },
    {
      img: "assets/img/barked.svg",
      nome: "barked",
    },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      nome: "nathanwpylestrangeplanet",
    },
    {
      img: "assets/img/wawawicomics.svg",
      nome: "respondeai",
    },
    {
      img: "assets/img/respondeai.svg",
      nome: "9gag",
    },
    {
      img: "assets/img/filomoderna.svg",
      nome: " filomoderna",
    },
    {
      img: "assets/img/memeriagourmet.svg",
      nome: "memeriagourmet",
    },
  ];


  return (
    <>
    <div className="stories">

        { stories.map(dados =>
            <div className="story">
                <div className="imagem">
                    <img src={dados.img} />
                </div>
                <div className="usuario">
                    {dados.nome}
                </div>
            </div>
        )}

    <div className="setinha">
    <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
</div>
</>
)
}

