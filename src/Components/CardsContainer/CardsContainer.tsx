import CardItem from './CardItem'

const CardsContainer = () => {
    return (
        <div className='flex items-center justify-center sm:pl-[16rem] py-10 sm:pr-8 min-w-full'>
            <span className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-10 place-items-center justify-items-center mx-auto'>
                <CardItem title={"DAILY MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/hero-card-complete.jpeg' />
                <CardItem title={"JAZZ MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover2.jpg' />
                <CardItem title={"TECHNO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover3.jpg' />
                <CardItem title={"TRANCE MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover4.jpg' />
                <CardItem title={"HAPPY MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover5.jpg' />
                <CardItem title={"ROBOTRAP MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover6.jpg' />
                <CardItem title={"ROCKnROLL MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover7.jpg' />
                <CardItem title={"DARK MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover8.jpg' />
                <CardItem title={"DIGITAL HOUSE MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover9.jpg' />
                <CardItem title={"SUMMER MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover10.jpg' />
                <CardItem title={"ELECTRO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover11.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/musicCover12.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/13.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/14.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/15.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/16.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/17.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/18.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/19.jpg' />
                <CardItem title={"PSYCHO MIX"} count={"12 TRACKS"} album={"FRONTEND RADIO"} img='/images/20.jpg' />
            </span>
        </div>
    )
}

export default CardsContainer