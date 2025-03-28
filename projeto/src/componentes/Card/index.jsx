import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import Icone from './assets/icone.png'

export default function Card(){
    return(
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt='imagem do post' />
            </div>
            <div className=''card__conteudo>
                <div className='conteudo__texto'>
                    <h3>Título do post</h3>
                    <p>Resumo do post</p>
                </div>

                <div className='conteudo__rodape'>
                    <ul>
                        <li>
                            <img src={Code} alt="códigos" />
                            100
                        </li>
                        <li>
                            <img src={Share} alt="compartilhamentos" />
                            12
                        </li>
                        <li>
                            <img src={Chat} alt="comentários" />
                        </li>
                    </ul>

                    <div className='rodape__usuario'>
                        <img src={Icone} alt="imagem do usuario" />,
                        @moni
                    </div>
                </div>
            </div>
        </article>
    )
}