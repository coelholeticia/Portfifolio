import eu from '../../assets/eu.png'
import'./sobre.css'

function Sobre (){
    return(
        <div className="conteudo-sobre">
            <div className="text-sobre">
            <p className="tag-sobre">
                Sobre Mim
            </p>
            <p className="text-cont-sobre">
            Olá! muito bom te ver por aqui, sou desenvolvedora front-end a mais ou menos um ano e meio. Fiz uma transição de carreira de moda para tecnologia, então sempre busco querer inovar o desing. Estou sempre ligado em projetos socias educação e ensino, sou monitora e fui Instrutora para desenvolvimento 
            Front-end. 
            Atualmente venho estudando analise de dados meus apredizados tem sido bastante insteressante.
            </p>
            <p className="habilidade">
                Habilidades
            </p>
            <p className="cont-habilidade">
                <span className="impact">FRONT-END:</span>
                HTML, CSS, JS, REACTJS
            </p>
            <p className="cont-habilidade">
                <span className="impact">DADOS:</span>
                EXCEL,PHYTON, SQL, PANDAS, R
            </p>

            </div>
            <div className="image">
                <img className="eu" src={eu} alt='Desenvolvedora Letícia Coelho' />
            </div>


        </div>
    )
}

export default Sobre