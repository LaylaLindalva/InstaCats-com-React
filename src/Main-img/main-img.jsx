import img01 from '/img-01.png'
import img02 from '/img-02.png'
import img03 from '/img-03.png'
import img04 from '/img-04.png'
import img05 from '/img-05.png'
import img06 from '/img-06.png'
import img07 from '/img-07.png'
import img08 from '/img-08.png'
import img09 from '/img-09.png'
import img10 from '/img-10.png'
import img11 from '/img-11.png'
import img12 from '/img-12.png'

const Main = () => {
    return(
        <main>
            <section>
                <div className="parte-1">
                    <img src={img01} alt="" />
                    <img src={img02} alt="" />
                    <img src={img03} alt="" />
                </div>
                <div className="segunda-coluna">
                    <img src={img04} alt="" />
                    <img src={img05} alt="" />
                </div>
                <div className='parte-2'>
                    <img src={img06} alt="" />
                    <img src={img07} alt="" />
                </div>
                <img src={img08} alt="" />
                <div className='parte-3'>
                    <img src={img09} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                </div>
                <img src={img12} alt="" />
            </section>
        </main>
    )
}

export default Main