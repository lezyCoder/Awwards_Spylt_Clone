import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { SplitText } from "gsap/all"

const MessageSections = () => {

  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    })

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    })

    const paragraphSplit = SplitText.create(".message-content p ", {
      type: "words lines",
      linesClass: "paragraph-line"
    })

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true
      }
    })

    gsap.to(secondMsgSplit.words, {

      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    })

    const revelTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      }
    })

    revelTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut"
    })

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      }
    })

    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300, 
      rotate: 3, 
      duration: 1,
      stagger:0.01,
      ease: "power1.inOut"
    })
  })



  return (
    <section className='message-content'>
      <div className="container mx-auto py-28 flex-center relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className='first-message'>Stir up your
              fearless past and</h1>
            <div className="msg-text-scroll" style={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            }}>
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className='text-red-brown'>Fuel up</h2>
              </div>
            </div>
            <h1 className='second-message'>your future with every
              gulp of Perfect Protein</h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 overflow-hidden flex-center">
              <p>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSections