import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./Faq.css"
const Faq = () => {
  return (
    <>
    <section className='faq pt-[112px] pb-[96px]'>
      <div className="container flex justify-between">

        <div className="faq_left">
          <h2 className='font-Manrope font-extrabold text-[32px]'>Any questions?<br />Check out the FAQs</h2>
          <p className='w-[416px] pt-[32px] font-Manrope font-normal text-[18px] text-[#585C7B]'>Still have unanswered questions and need to get in touch?</p>
          <button>Contact us now</button>
        </div>

        <div className="faq_right w-[746px] ">
          <Accordion>
              <AccordionItem className={AccordionItem} header="Is any of my personal information stored in the App?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>

              <AccordionItem header="What formats can I download my transaction history in?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae, accumsan auctor mi.
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>

              <AccordionItem header="Can I schedule future transfers?">
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>

              <AccordionItem header="When can I use Banking App services?">
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>

              <AccordionItem header="Can I create my own password that is easy for me to remember?">
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra 
              et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh 
              Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia 
              posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc
               purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
              </AccordionItem>

              <AccordionItem header="What happens if I forget or lose my password?">
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra 
              et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh 
              Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia 
              posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc
               purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
              </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
    </>
  )
}

export default Faq