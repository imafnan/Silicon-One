import React from 'react'
import "./Features.css"
import fu from '../../assets/img/appFeatures.png'
import v from '../../assets/img/Vector.png'
import v1 from '../../assets/img/Vector1.png'
import v2 from '../../assets/img/Vector2.png'
import v3 from '../../assets/img/Vector3.png'
import v4 from '../../assets/img/Vector4.png'
import v5 from '../../assets/img/Vector5.png'


const Features = () => {
  return (
    <>
    <section className='Features pb-[112px]'>
        <div className="container flex justify-between">
            <div className="Features_left">
                <img src={fu} alt="" />
            </div>
            <div className="Features_right">
                <div className='App_Features'>
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    
                    <div className='main flex justify-between'>
                    {/*======  main left ======== */}
                        <div className='main_left'>

                            <div className='Easy_Payments'>
                                <div className="image">
                                    <img src={v} alt="" sizes='30px'/>
                                </div>
                                <div className='w-[261px]'>
                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>

                            <div className='Easy_Payments'>
                                <div className="image">
                                    <img src={v2} alt="" sizes='30px'/>
                                </div>
                                <div className='w-[261px]'>
                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>

                            <div className='Easy_Payments'>
                                <div className="image">
                                    <img src={v4} alt="" sizes='30px'/>
                                </div>
                                <div className='w-[261px]'>
                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                        </div>

                    {/*========= main right =========*/}
                    <div className='main_right'>

                        <div className='Easy_Payments'>
                            <div className="image">
                                <img src={v1} alt="" sizes='30px'/>
                            </div>
                            <div className='w-[261px]'>
                                <h3>Data Security</h3>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                            </div>
                        </div>

                        <div className='Easy_Payments'>
                            <div className="image">
                                <img src={v3} alt="" sizes='30px'/>
                            </div>
                            <div className='w-[261px]'>
                                <h3>Support 24/7</h3>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                            </div>
                        </div>

                        <div className='Easy_Payments'>
                            <div className="image">
                                <img src={v5} alt="" sizes='30px'/>
                            </div>
                            <div className='w-[261px]'>
                                <h3>Top Standards</h3>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                            </div>
                        </div>
                    </div>
                        

                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features