const fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
]

/*async*/ function getFortune() {
  const idx = Math.floor(Math.random()*fortuneCookies.length)
  return fortuneCookies[idx]
/*  нужно попробовать с асинхронной функцией
try {
            const posts = await PostService.getAll(req);
            return res.json(posts);
        } catch (e) { 
            res.status(500).json(e.message);
        }*/
}

export default getFortune()