import { PostThing } from './PostThing'
import { Header } from './AppSTHeader'
import { Body } from './AppSTBody'
import { SarahPost } from './AppSTSarahPost'
import { Articlem } from './ArticleAppST'
const multifunc = (a: number) => (b: number) => {
  return a + b
}
multifunc(12)(23)
const marticle: any = [
  {
    Maintext: "Best practices don't actually work.",
    Starttext: "I've written ",
    BlueThing: 'a few thousand words ',
    SecondText: 'on why traditional “semantic class names” are the',
    ThirdText:
      'reason CSS is hard to maintain, but the truth is you’re never going to believe me until you',
    FourthText:
      'actually try it. If you can suppress the urge to retch long enough to give it a chance, I',
    FifthText:
      'really think you’ll wonder how you ever worked with CSS any other way.',
    Name: 'Adam Wathan',
    Job: 'Creator of Tailwind CSS',
    Picture: 'https://tailwindcss.com/_next/static/media/adam.26d0119c.jpg'
  }
]
const mbody = [
  {
    mainHeading:
      'Rapidly build modern websites without ever leaving your HTML.',
    SmainHeading: 'A utility-first CSS framework packed with classes like',
    SmainHeading2:
      'that can be composed to build any design, directly in your markup.',
    BlueWord1: ' flex,',
    BlueWord2: ' pt-4,',
    BlueWord3: 'text-center,',
    BlueWord4: 'and',
    BlueWord5: 'rotate-90'
  }
]
const { title } = { title: 'HEELO' }
console.log(title)
const postSarah = [
  {
    imageSarah:
      'https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg',
    line1: 'Tailwind CSS is the only',
    line2: "framework that I've seen scale on",
    line3: "large teams. It's easy to customize,",
    line4: 'adapts to any design, and the build',
    line5: 'size is tiny',
    author: 'Sarah Dayan',
    authorJob: 'Staff Engineer, Algolia'
  }
]
const data = { title: 'HEELO' }
console.log(data.title)

const clients = [
  {
    title: 'Ryan Florence',
    job: 'DeveloperRemix & React Training',
    line: 'i feel like an idiot for not using Tailwind CSS until now',

    image:
      '	https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg'
  },
  {
    title: "Debbie o'Brien",
    job: 'Senior Program Manager at Microsoft',
    line: 'Have been working with CSS for over ten years and use flex, grid, etc. but just quicker to write and maintain',

    image:
      '	https://tailwindcss.com/_next/static/media/debbie-obrien.69d3104d.jpg'
  },
  {
    title: 'Kent C.Dodds',
    job: 'Developer',
    line: 'Skip to the end use tailwind@',
    image: '	https://tailwindcss.com/_next/static/media/kentcdodds.90894efe.jpg'
  },

  {
    title: 'Guillermo Rauch',
    job: 'Vercel',
    line: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.',
    image:
      '	https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg'
  },
  {
    title: 'Ben Furfie',
    job: 'Developer',
    line: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincedence Tailwind was released the same a coincedence Tailwind was released the same and you'll realize semantic CSS was a 20 year mistake",
    image: '		https://tailwindcss.com/_next/static/media/frontendben.7c4b54bd.jpg'
  },
  {
    title: 'Shruti Balasa',
    job: 'Full Stack Web Developer & Tech Educator',
    line: 'I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind.Creating web pages is 5x faster now',
    image:
      'https://tailwindcss.com/_next/static/media/shrutibalasa.8c3514ba.jpg'
  },
  {
    title: 'Sara Vieira',
    job: 'CodeSandbox',
    line: "I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.",
    image: '		https://tailwindcss.com/_next/static/media/sara-vieira.e2bfc631.jpg'
  },
  {
    title: 'Didier Catz',
    job: 'Co-Founder @StyptApp',
    line: "Tailwind makes writing  code feel like I'm using a design tool",
    image: '	https://tailwindcss.com/_next/static/media/didiercatz.5a884729.jpg'
  },
  {
    title: 'Pieter Levels',
    job: 'Maker',
    line: "I don't use it but if I would use something I'd use Tailwind",
    image: 'https://tailwindcss.com/_next/static/media/levelsio.a3935ad1.jpg'
  },
  {
    title: 'Bret "The Hitman" Hart',
    job: 'Former WWE Champion',
    line: 'Tailwind CSS is the greatest CSS framework on the plantet',
    image: '	https://tailwindcss.com/_next/static/media/bret-hart.e3eb132d.jpg'
  },
  {
    title: 'Sarah Dayan',
    job: 'Staff Sofware Engineer @Algolia',
    line: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling",
    image:
      '	https://tailwindcss.com/_next/static/media/frontstuff_io.b46365eb.jpg'
  },
  {
    title: 'Greg Sulivan',
    job: 'Greg Sulivan',
    line: 'With Tailwind I can offer my clients faster turnaround times on custom WordPress themes, both for initial builds and for future revisions.',
    image: '	https://tailwindcss.com/_next/static/media/gregsvn.71ec2ec2.jpg'
  }
]

export const App = () => (
  <div className="s">
    <Header />
    {mbody.map(
      ({
        mainHeading,
        SmainHeading,
        SmainHeading2,
        BlueWord1,
        BlueWord2,
        BlueWord3,
        BlueWord4,
        BlueWord5
      }) => (
        <Body
          mainHeading={mainHeading}
          SmainHeading={SmainHeading}
          SmainHeading2={SmainHeading2}
          BlueWord1={BlueWord1}
          BlueWord2={BlueWord2}
          BlueWord3={BlueWord3}
          BlueWord4={BlueWord4}
          BlueWord5={BlueWord5}
        />
      )
    )}
    {postSarah.map(
      ({
        imageSarah,
        line1,
        line2,
        line3,
        line4,
        line5,
        author,
        authorJob
      }) => (
        <SarahPost
          imageSarah={imageSarah}
          line1={line1}
          line2={line2}
          line3={line3}
          line4={line4}
          line5={line5}
          author={author}
          authorJob={authorJob}
        />
      )
    )}
    {marticle.map(
      ({
        Maintext,
        Starttext,
        BlueThing,
        SecondText,
        ThirdText,
        FourthText,
        FifthText,
        Name,
        Job,
        Picture
      }: any) => (
        <Articlem
          Maintext={Maintext}
          Starttext={Starttext}
          BlueThing={BlueThing}
          SecondText={SecondText}
          ThirdText={ThirdText}
          FourthText={FourthText}
          FifthText={FifthText}
          Name={Name}
          Job={Job}
          Picture={Picture}
        />
      )
    )}

    <div className=" justify-center flex ">
      <div className="text-white grid grid-cols-3 gap-8 w-[1300px] justify-center font-sans">
        {clients.map(({ title, job, image, line }) => (
          <PostThing title={title} job={job} line={line} image={image} />
        ))}
      </div>
    </div>
    <div className="">
      <div className=" text-xl pt-32 w-[1300px]  mx-auto">
        <img
          className="h-32"
          src="data:image/jpeg;base64,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"
        ></img>
        <h1 className="text-xl text-indigo-500 font-semibold py-2">
          Constrain-based
        </h1>
        <div className="text-5xl text-white font-extrabold">
          <div className="py-4">
            An API for your<h1>design system.</h1>
          </div>
          <div className=" text-gray-400 font-medium text-xl">
            Utility classes help you work within the constraints of a system
            instead of littering your stylesheets
            <p>
              with arbitrary values. They make it easy to be consistent with
              color choices, spacing, typography,
              <p>
                shadows, and everything else that makes up a well-engineered
                design system.
              </p>
            </p>
          </div>
        </div>
        <div className="text-white bg-gray-700 p-3 rounded-full w-max font-semibold text-base hover:bg-gray-600 cursor-pointer mt-10">
          Learn more {'>'}{' '}
        </div>
      </div>
    </div>
    <div>Testing Github</div>
  </div>
)
