import "./Posts.css"
import React, {useState} from 'react' 


//Componente Toggle
 function Toggle (){
  // this.state = {nome:"heart-outline"}
  
 const[name,setName]= useState('heart-outline');

	 function Mudando(){

       if(name==="heart-outline"){
         setName("heart")
      }else{
        setName("heart-outline")
       }
       console.log(name)
    }
    
     return(
	 	 <>
	 	 <ion-icon name={name} onClick={Mudando}></ion-icon>
      
	 	</>
    
      )
}

function Video(props){
  
  const [checked, setChecked] = useState("visivel");
      
  function Socorro(){
    
        if(checked==="visivel"){
          setChecked("invisivel");
        }
        else{
          setChecked("visivel");
                }
      }
      
  return (
    <>
    <div className="video_reproduzir" onClick={Socorro}> 
    <video className="video-video" controls>
      <source src={props.video} type="video/mp4"/>
    </video> 
  
      <img className={"video-imagem "  + checked} src={props.img} /> </div>
      
    </>
  )
 
}

    

function Posts(props) {
  return (
    <div>
      <div className="posts">
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={props.src_usuario} />
              {props.nome_usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          {/* Clique na imagem que aparece o vídeo */}
          <div className="conteudo">
            <Video video=".//assets/video/video.mp4"  img={props.src_post} />
          
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <Toggle />

				
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={props.src_curtidas} alt={props.alt_curtidas}/>
              <div className="texto">
                Curtido por <strong>{props.curtido_por}</strong> e {" "}
                <strong>outras {props.qtd_curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Posts;
