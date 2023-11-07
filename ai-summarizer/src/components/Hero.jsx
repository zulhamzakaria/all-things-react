import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 objet-contain"/>
        <button type="button" onClick={()=> window.open('https://github.com/zulhamzakaria/all-things-react/tree/main/ai-summarizer/')} 
          className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarise Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Tis to summarize the articles (powered by GPT-4)
      </h2>
    </header>
  )
}

export default Hero