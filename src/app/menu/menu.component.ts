import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  artigo: string = '';
  artigos: any = ['O que é Lorem Ipsum?', 'De onde ele vem?', 'Porque nós o usamos?', 'Onde posso conseguí-lo?', 'Passagem padrão original de Lorem Ipsum, usada desde o século XVI.']
  tituloArtigo = '';
  textoArtigo = null;


  constructor() { }

  ngOnInit(): void {
  }
   public escolherArtigo (event)
   {
    console.log(event.target.value);
    let artigoEscolhido = event.target.value;

    if(artigoEscolhido === 'O que é Lorem Ipsum?')
    {
      this.tituloArtigo = 'O que é Lorem Ipsum?';
      this.textoArtigo = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker';
    }
    else if(artigoEscolhido === 'De onde ele vem?')
    {
      this.tituloArtigo = 'De onde ele vem?';
      this.textoArtigo = 'Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. Este livro é um tratado na teoria da ética, muito popular durante a Renascença. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..." aparece de uma linha na secção 1.10.32.';
    }
    else if (artigoEscolhido === 'Porque nós o usamos?')
    {
      this.tituloArtigo = 'Porque nós o usamos?';
      this.textoArtigo = 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).';
    }

    else if (artigoEscolhido === 'Onde posso conseguí-lo?')
    {
      this.tituloArtigo = 'Onde posso conseguí-lo?';
      this.textoArtigo = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
    }


    else if (artigoEscolhido === 'Passagem padrão original de Lorem Ipsum, usada desde o século XVI.')
    {
      this.tituloArtigo = 'Passagem padrão original de Lorem Ipsum, usada desde o século XVI.';
      this.textoArtigo = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
    }

   }

}
