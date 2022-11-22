import React from 'react'
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techy Star</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are you?</h1>
          <p>
            What am I? Alive. Homo sapiens. Old and, with luck, getting considerably older.
            If you're asking my place in society, I'm a father and a grandfather. A husband.
            If you're asking how I spend my time, either working or reading, watching movies, or playing games. Sometimes exercising.
            If you're asking my occupation, I spend my working time either writing or teaching.
            But I am not my career. The work I do for money is not “what I am” or even “who I am.” If I cease that work I do not cease to be who and what I am.
            It's a dangerous thing to believe you ARE your job. Because then if you lose your career, are “you” dead? YOU are still there, and you discover that your job was not “what you are” after all.
            Better if you never identify with your job in the first place. Then you'll live quite differently, keeping your work and your identity separate. Those who pay you will have far less power over you. They cannot kill you with a pink slip.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>



    </>
  )
}

export default Home;
