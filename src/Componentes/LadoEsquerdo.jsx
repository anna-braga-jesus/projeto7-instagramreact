import Posts from "./Posts";
import Stories from "./Stories";
import React, { useState } from "react";




export default function LadoEsquerdo() {
  return (
    <div>
      <div className="esquerda">
        <Stories />

        <Posts  src_usuario= "assets/img/meowed.svg"
    alt_usuario= "meowed"
    nome_usuario= "meowed"
    src_post= "assets/img/gato-telefone.svg"
    alt_post= "gato-telefone"
    src_curtidas= "assets/img/respondeai.svg"
    alt_curtidas= "respondeai"
    curtido_por= "respondeai"
    qtd_curtidas= "101.523" />
        <Posts src_usuario= "assets/img/barked.svg"
    alt_usuario= "barked"
    nome_usuario= "barked"
    src_post= "assets/img/dog.svg"
    alt_post= "dog"
    src_curtidas= "assets/img/adorable_animals.svg"
    alt_curtidas= "adorable_animals"
    curtido_por= "adorable_animals"
    qtd_curtidas= "99.159"/>
       

      </div>
    </div>
  );
}
