import { useState, useEffect, useRef } from 'react'
import { heroBgUrl, waveBgUrl, testimonialBgUrl, darkBgUrl, cssGradients } from './backgrounds'
import './index.css'

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const [ref, vis] = useReveal()
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* NAVBAR */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = ['Home','About','Services','Pricing','Blog','Contact']
  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:1000,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(124,58,237,0.12)' : 'none',
      transition:'all 0.35s ease', padding:'0 5%',
    }}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <a href="#home"><img src="/logo.svg" alt="Softy Pinko" style={{height:44}} /></a>
        <ul style={{display:'flex',gap:36,listStyle:'none',margin:0,padding:0}}>
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} style={{
              color: scrolled ? '#4C1D95' : 'white',
              textDecoration:'none', fontWeight:500, fontSize:15,
              transition:'color 0.2s',
            }}
            onMouseEnter={e=>e.target.style.color='#EC4899'}
            onMouseLeave={e=>e.target.style.color=scrolled?'#4C1D95':'white'}
            >{l}</a></li>
          ))}
        </ul>
        <a href="#contact" style={{
          background:cssGradients.button,color:'white',
          padding:'10px 24px',borderRadius:50,textDecoration:'none',
          fontWeight:600,fontSize:14,
          boxShadow:'0 4px 15px rgba(124,58,237,0.4)',
          transition:'transform 0.2s,box-shadow 0.2s',
        }}
        onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 25px rgba(124,58,237,0.5)'}}
        onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 15px rgba(124,58,237,0.4)'}}
        >Get Started</a>
      </div>
    </nav>
  )
}

/* HERO */
function Hero() {
  return (
    <section id="home" style={{
      minHeight:'100vh',
      backgroundImage:`url("${heroBgUrl}")`,
      backgroundSize:'cover',backgroundPosition:'center',
      display:'flex',alignItems:'center',
      padding:'120px 5% 80px',
      position:'relative',overflow:'hidden',
    }}>
      <div style={{position:'absolute',top:'20%',right:'15%',width:300,height:300,borderRadius:'50%',background:'rgba(236,72,153,0.15)',filter:'blur(60px)',animation:'float 6s ease-in-out infinite'}}/>
      <div style={{position:'absolute',bottom:'20%',right:'30%',width:200,height:200,borderRadius:'50%',background:'rgba(167,139,250,0.2)',filter:'blur(50px)',animation:'float 8s ease-in-out infinite reverse'}}/>
      <div style={{maxWidth:1200,margin:'0 auto',width:'100%',display:'flex',alignItems:'center',gap:60,flexWrap:'wrap'}}>
        <div style={{flex:'1 1 480px',color:'white'}}>
          <div style={{display:'inline-block',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(10px)',padding:'6px 18px',borderRadius:50,fontSize:13,fontWeight:600,marginBottom:24,letterSpacing:'0.08em',border:'1px solid rgba(255,255,255,0.25)',animation:'fadeInDown 0.8s ease'}}>🚀 GROW YOUR BUSINESS WITH US</div>
          <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.15,margin:'0 0 24px',fontFamily:"'Playfair Display',Georgia,serif",animation:'fadeInDown 0.8s ease 0.1s both'}}>
            Elevate Your<br/>
            <span style={{background:'linear-gradient(90deg,#F9A8D4,#FDE68A)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Brand&nbsp;</span>
            With<br/>Innovation
          </h1>
          <p style={{fontSize:18,opacity:0.85,lineHeight:1.7,maxWidth:440,margin:'0 0 40px',animation:'fadeInDown 0.8s ease 0.2s both'}}>We craft modern digital strategies that transform businesses. Partner with us to unlock your full potential.</p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap',animation:'fadeInDown 0.8s ease 0.3s both'}}>
            <a href="#about" style={{background:'white',color:'#7C3AED',padding:'14px 32px',borderRadius:50,fontWeight:700,fontSize:15,textDecoration:'none',boxShadow:'0 8px 30px rgba(0,0,0,0.2)',transition:'transform 0.2s,box-shadow 0.2s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.25)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 8px 30px rgba(0,0,0,0.2)'}}
            >Discover More</a>
            <a href="#work-process" style={{background:'rgba(255,255,255,0.15)',color:'white',padding:'14px 32px',borderRadius:50,fontWeight:600,fontSize:15,textDecoration:'none',border:'2px solid rgba(255,255,255,0.4)',backdropFilter:'blur(10px)',transition:'background 0.2s'}}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.25)'}
            onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.15)'}
            >Our Process</a>
          </div>
          <div style={{display:'flex',gap:40,marginTop:56,flexWrap:'wrap',animation:'fadeInDown 0.8s ease 0.4s both'}}>
            {[['250+','Projects'],['500+','Clients'],['35','Awards'],['850K+','Lines of Code']].map(([n,l])=>(
              <div key={l} style={{textAlign:'center'}}>
                <div style={{fontSize:28,fontWeight:800}}>{n}</div>
                <div style={{fontSize:13,opacity:0.7,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{flex:'1 1 360px',display:'flex',justifyContent:'center',animation:'fadeInRight 1s ease 0.3s both'}}>
          <div style={{width:'100%',maxWidth:480,background:'rgba(255,255,255,0.1)',backdropFilter:'blur(20px)',borderRadius:24,border:'1px solid rgba(255,255,255,0.2)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:40,gap:20}}>
            <div style={{width:'100%',background:'rgba(255,255,255,0.15)',borderRadius:12,padding:16}}>
              <div style={{display:'flex',gap:8,marginBottom:12}}>{['#FF6B6B','#FFD93D','#6BCB77'].map(c=><div key={c} style={{width:10,height:10,borderRadius:'50%',background:c}}/>)}</div>
              <div style={{height:8,background:'rgba(255,255,255,0.3)',borderRadius:4,marginBottom:8}}/>
              <div style={{height:8,background:'rgba(255,255,255,0.2)',borderRadius:4,width:'70%',marginBottom:8}}/>
              <div style={{display:'flex',gap:8,marginTop:16}}>
                {[60,40,80,55,70].map((h,i)=><div key={i} style={{flex:1,height:h,background:`rgba(249,168,212,${0.4+i*0.1})`,borderRadius:4,alignSelf:'flex-end'}}/>)}
              </div>
            </div>
            <div style={{display:'flex',gap:12,width:'100%'}}>
              {['🎯 Strategy','💡 Innovation','🚀 Launch'].map(t=>(
                <div key={t} style={{flex:1,background:'rgba(255,255,255,0.15)',borderRadius:8,padding:'8px 4px',textAlign:'center',fontSize:12,color:'white',fontWeight:500}}>{t}</div>
              ))}
            </div>
            <div style={{width:'100%',background:'rgba(255,255,255,0.1)',borderRadius:12,padding:14}}>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.7)',marginBottom:8}}>Growth Rate</div>
              <div style={{fontSize:28,fontWeight:800,color:'white'}}>+127%</div>
              <div style={{height:4,background:'rgba(255,255,255,0.2)',borderRadius:4,marginTop:10,overflow:'hidden'}}>
                <div style={{height:'100%',width:'72%',background:'linear-gradient(90deg,#F9A8D4,#FDE68A)',borderRadius:4}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* FEATURES */
function Features() {
  const items = [
    {icon:'🚀',title:'Modern Strategy',desc:'We craft cutting-edge digital strategies tailored to your business objectives and target audience.'},
    {icon:'🤝',title:'Best Relationship',desc:'Building lasting partnerships through transparency, communication, and mutual respect at every step.'},
    {icon:'📣',title:'Ultimate Marketing',desc:'Data-driven marketing campaigns that amplify your reach and convert audiences into loyal customers.'},
  ]
  return (
    <section style={{padding:'80px 5%',background:'#fff'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'flex',gap:24,flexWrap:'wrap'}}>
        {items.map((item,i)=>(
          <Reveal key={item.title} delay={i*120} style={{flex:'1 1 280px'}}>
            <div style={{background:'white',borderRadius:20,padding:32,boxShadow:'0 4px 30px rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.08)',transition:'transform 0.3s,box-shadow 0.3s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(124,58,237,0.16)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 30px rgba(124,58,237,0.08)'}}
            >
              <div style={{width:56,height:56,borderRadius:16,background:cssGradients.hero,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,marginBottom:20}}>{item.icon}</div>
              <h3 style={{fontSize:18,fontWeight:700,color:'#1E1B4B',margin:'0 0 12px'}}>{item.title}</h3>
              <p style={{color:'#6B7280',lineHeight:1.7,margin:0,fontSize:15}}>{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ABOUT */
function About() {
  const [r1,v1] = useReveal()
  const [r2,v2] = useReveal()
  return (
    <section id="about" style={{padding:'100px 5%',backgroundImage:`url("${waveBgUrl}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',gap:80,flexWrap:'wrap'}}>
        <div ref={r1} style={{flex:'1 1 380px',opacity:v1?1:0,transform:v1?'translateX(0)':'translateX(-40px)',transition:'all 0.8s ease'}}>
          <div style={{background:cssGradients.hero,borderRadius:24,padding:40,boxShadow:'0 20px 60px rgba(124,58,237,0.3)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'rgba(255,255,255,0.1)'}}/>
            <div style={{position:'relative',zIndex:1}}>
              <div style={{fontSize:48,marginBottom:16}}>💼</div>
              <h3 style={{color:'white',fontSize:22,fontWeight:700,margin:'0 0 12px'}}>About Our Company</h3>
              <p style={{color:'rgba(255,255,255,0.8)',lineHeight:1.7,margin:0}}>We are a team of passionate professionals dedicated to delivering exceptional digital solutions that drive real business growth.</p>
              <div style={{display:'flex',gap:24,marginTop:28}}>
                {[['10+','Years'],['200+','Clients'],['50+','Team']].map(([n,l])=>(
                  <div key={l} style={{textAlign:'center'}}>
                    <div style={{fontSize:22,fontWeight:800,color:'white'}}>{n}</div>
                    <div style={{fontSize:12,color:'rgba(255,255,255,0.7)'}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div ref={r2} style={{flex:'1 1 380px',opacity:v2?1:0,transform:v2?'translateX(0)':'translateX(40px)',transition:'all 0.8s ease 0.2s'}}>
          <div style={{display:'inline-block',background:'rgba(124,58,237,0.1)',color:'#7C3AED',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>ABOUT US</div>
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.8rem)',fontWeight:800,color:'#1E1B4B',margin:'0 0 20px',lineHeight:1.2,fontFamily:"'Playfair Display',Georgia,serif"}}>We Provide the Best<br/>Services for Your Business</h2>
          <p style={{color:'#6B7280',lineHeight:1.8,fontSize:16,marginBottom:24}}>With over a decade of experience, we have helped hundreds of businesses achieve their digital transformation goals. Our holistic approach combines strategy, design, and technology.</p>
          <p style={{color:'#6B7280',lineHeight:1.8,fontSize:16,marginBottom:36}}>We believe in building long-term relationships with our clients, understanding their unique needs and delivering tailored solutions that exceed expectations every time.</p>
          <div style={{display:'flex',gap:20,marginBottom:36,flexWrap:'wrap'}}>
            {['✅ Expert Team','✅ Proven Results','✅ 24/7 Support'].map(t=>(
              <span key={t} style={{color:'#7C3AED',fontWeight:600,fontSize:14}}>{t}</span>
            ))}
          </div>
          <a href="#contact" style={{display:'inline-block',background:cssGradients.button,color:'white',padding:'14px 36px',borderRadius:50,textDecoration:'none',fontWeight:700,fontSize:15,boxShadow:'0 8px 25px rgba(124,58,237,0.4)',transition:'transform 0.2s,box-shadow 0.2s'}}
          onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 12px 35px rgba(124,58,237,0.5)'}}
          onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 8px 25px rgba(124,58,237,0.4)'}}
          >Learn More</a>
        </div>
      </div>
    </section>
  )
}

/* WORK PROCESS */
function WorkProcess() {
  const steps = [
    {icon:'💡',title:'Ideas',desc:'Brainstorm creative concepts'},
    {icon:'✏️',title:'Sketch',desc:'Wireframe & prototype'},
    {icon:'💬',title:'Discuss',desc:'Refine with your feedback'},
    {icon:'🔄',title:'Revise',desc:'Polish every detail'},
    {icon:'✅',title:'Approve',desc:'Final review & sign-off'},
    {icon:'🚀',title:'Launch',desc:'Deploy & go live'},
  ]
  return (
    <section id="work-process" style={{padding:'100px 5%',background:'#fff'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <Reveal>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div style={{display:'inline-block',background:'rgba(124,58,237,0.1)',color:'#7C3AED',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>HOW WE WORK</div>
            <h2 style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'#1E1B4B',margin:'0 0 16px',fontFamily:"'Playfair Display',Georgia,serif"}}>Our Work Process</h2>
            <p style={{color:'#6B7280',fontSize:16,maxWidth:500,margin:'0 auto'}}>A proven methodology that delivers exceptional results, every single time.</p>
          </div>
        </Reveal>
        <div style={{display:'flex',gap:0,flexWrap:'wrap',position:'relative'}}>
          {steps.map((step,i)=>(
            <Reveal key={step.title} delay={i*100} style={{flex:'1 1 140px',textAlign:'center',padding:'0 12px',position:'relative'}}>
              <div>
                {i<steps.length-1 && <div style={{position:'absolute',top:36,left:'75%',right:'-25%',height:2,background:'linear-gradient(90deg,#7C3AED,#EC4899)',zIndex:0}}/>}
                <div style={{width:72,height:72,borderRadius:'50%',background:cssGradients.hero,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,margin:'0 auto 16px',boxShadow:'0 8px 25px rgba(124,58,237,0.35)',position:'relative',zIndex:1,transition:'transform 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.15)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                >{step.icon}</div>
                <div style={{fontWeight:700,color:'#1E1B4B',fontSize:15,marginBottom:6}}>{step.title}</div>
                <div style={{color:'#9CA3AF',fontSize:13,lineHeight:1.5}}>{step.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* TESTIMONIALS */
function Testimonials() {
  const [active,setActive] = useState(0)
  const testimonials = [
    {name:'Sarah Thompson',role:'Marketing Manager',text:'Softy Pinko transformed our entire online presence. The team was professional, creative, and delivered beyond our expectations. Fantastic service!'},
    {name:'James Oliver',role:'Startup Founder',text:'Highly professional team that truly understands what modern businesses need. They exceeded every expectation and delivered on time.'},
    {name:'David Martin',role:'Website Manager',text:'Working with Softy Pinko was a game-changer. Their innovative approach and attention to detail set them apart from everyone else in the industry.'},
  ]
  return (
    <section id="testimonials" style={{padding:'100px 5%',backgroundImage:`url("${testimonialBgUrl}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <div style={{maxWidth:900,margin:'0 auto',textAlign:'center'}}>
        <Reveal>
          <div style={{display:'inline-block',background:'rgba(255,255,255,0.2)',color:'white',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>TESTIMONIALS</div>
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'white',margin:'0 0 60px',fontFamily:"'Playfair Display',Georgia,serif"}}>What Our Clients Say</h2>
        </Reveal>
        <Reveal delay={200}>
          <div style={{background:'rgba(255,255,255,0.12)',backdropFilter:'blur(20px)',borderRadius:24,padding:'48px 56px',border:'1px solid rgba(255,255,255,0.2)'}}>
            <div style={{fontSize:56,color:'rgba(255,255,255,0.4)',lineHeight:1,marginBottom:16}}>"</div>
            <p style={{color:'white',fontSize:18,lineHeight:1.8,fontStyle:'italic',margin:'0 0 36px'}}>{testimonials[active].text}</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16}}>
              <div style={{width:52,height:52,borderRadius:'50%',background:cssGradients.hero,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,color:'white'}}>{testimonials[active].name[0]}</div>
              <div style={{textAlign:'left'}}>
                <div style={{color:'white',fontWeight:700,fontSize:16}}>{testimonials[active].name}</div>
                <div style={{color:'rgba(255,255,255,0.7)',fontSize:13}}>{testimonials[active].role}</div>
              </div>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:10,marginTop:28}}>
            {testimonials.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} style={{width:i===active?28:10,height:10,borderRadius:5,background:i===active?'white':'rgba(255,255,255,0.4)',border:'none',cursor:'pointer',transition:'all 0.3s ease',padding:0}}/>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* PRICING */
function Pricing() {
  const plans = [
    {name:'Starter',price:'$19',features:['60 GB Storage','600 GB Transfer','Pro Design Panel','15-min Support','Unlimited Emails','24/7 Security'],popular:false},
    {name:'Premium',price:'$49',features:['120 GB Storage','1200 GB Transfer','Pro Design Panel','Priority Support','Unlimited Emails','24/7 Security'],popular:true},
    {name:'Advanced',price:'$79',features:['250 GB Storage','5000 GB Transfer','Pro Design Panel','Dedicated Support','Unlimited Emails','24/7 Security'],popular:false},
  ]
  return (
    <section id="pricing" style={{padding:'100px 5%',background:'#F9FAFB'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <Reveal>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div style={{display:'inline-block',background:'rgba(124,58,237,0.1)',color:'#7C3AED',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>PRICING</div>
            <h2 style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'#1E1B4B',margin:'0 0 16px',fontFamily:"'Playfair Display',Georgia,serif"}}>Flexible Pricing Plans</h2>
            <p style={{color:'#6B7280',fontSize:16}}>Choose the plan that fits your business needs perfectly.</p>
          </div>
        </Reveal>
        <div style={{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          {plans.map((plan,i)=>(
            <Reveal key={plan.name} delay={i*120} style={{flex:'1 1 280px',maxWidth:340}}>
              <div style={{background:plan.popular?cssGradients.hero:'white',borderRadius:24,padding:'40px 36px',boxShadow:plan.popular?'0 20px 60px rgba(124,58,237,0.4)':'0 4px 30px rgba(0,0,0,0.07)',border:plan.popular?'none':'1px solid rgba(124,58,237,0.1)',position:'relative',overflow:'hidden',transform:plan.popular?'scale(1.05)':'scale(1)',transition:'transform 0.3s,box-shadow 0.3s'}}
              onMouseEnter={e=>{if(!plan.popular){e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.12)'}}}
              onMouseLeave={e=>{if(!plan.popular){e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 30px rgba(0,0,0,0.07)'}}}
              >
                {plan.popular&&<div style={{position:'absolute',top:16,right:20,background:'rgba(255,255,255,0.25)',color:'white',fontSize:11,fontWeight:700,padding:'4px 12px',borderRadius:50}}>MOST POPULAR</div>}
                <div style={{marginBottom:24}}>
                  <div style={{fontSize:14,fontWeight:600,color:plan.popular?'rgba(255,255,255,0.8)':'#7C3AED',marginBottom:8}}>{plan.name}</div>
                  <div style={{display:'flex',alignItems:'baseline',gap:4}}>
                    <span style={{fontSize:48,fontWeight:800,color:plan.popular?'white':'#1E1B4B'}}>{plan.price}</span>
                    <span style={{color:plan.popular?'rgba(255,255,255,0.7)':'#9CA3AF',fontSize:16}}>/mo</span>
                  </div>
                </div>
                <ul style={{listStyle:'none',margin:'0 0 32px',padding:0,display:'flex',flexDirection:'column',gap:12}}>
                  {plan.features.map(f=>(
                    <li key={f} style={{display:'flex',alignItems:'center',gap:10,color:plan.popular?'rgba(255,255,255,0.9)':'#4B5563',fontSize:14}}>
                      <span style={{color:plan.popular?'#FDE68A':'#10B981',fontSize:16}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{display:'block',textAlign:'center',background:plan.popular?'white':cssGradients.button,color:plan.popular?'#7C3AED':'white',padding:'13px',borderRadius:50,fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:plan.popular?'0 4px 15px rgba(0,0,0,0.15)':'0 4px 15px rgba(124,58,237,0.35)',transition:'transform 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
                >Choose Plan</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* BLOG */
function Blog() {
  const posts = [
    {tag:'Business',date:'April 12, 2022',title:'Boost Your Business with Modern Digital Strategies',excerpt:'Discover how modern digital strategies can revolutionize your business growth and help you stay ahead of the competition.',emoji:'📈'},
    {tag:'Design',date:'March 23, 2022',title:"Creative Solutions for Tomorrow's Challenges",excerpt:'Explore creative approaches to solving complex business challenges through innovative design thinking and methodology.',emoji:'🎨'},
    {tag:'Technology',date:'March 15, 2022',title:'Tech Trends Shaping the Future of Business',excerpt:'Stay ahead of the curve with the latest technology trends that are transforming how modern businesses operate and grow.',emoji:'💻'},
  ]
  const colors=['#7C3AED','#EC4899','#6366F1']
  return (
    <section id="blog" style={{padding:'100px 5%',background:'#fff'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <Reveal>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div style={{display:'inline-block',background:'rgba(124,58,237,0.1)',color:'#7C3AED',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>BLOG</div>
            <h2 style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'#1E1B4B',margin:'0 0 16px',fontFamily:"'Playfair Display',Georgia,serif"}}>Latest Blog Posts</h2>
            <p style={{color:'#6B7280',fontSize:16}}>Insights and ideas from our team of experts.</p>
          </div>
        </Reveal>
        <div style={{display:'flex',gap:28,flexWrap:'wrap'}}>
          {posts.map((post,i)=>(
            <Reveal key={post.title} delay={i*120} style={{flex:'1 1 280px'}}>
              <div style={{background:'white',borderRadius:20,boxShadow:'0 4px 30px rgba(0,0,0,0.07)',border:'1px solid rgba(124,58,237,0.08)',overflow:'hidden',transition:'transform 0.3s,box-shadow 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(124,58,237,0.15)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 30px rgba(0,0,0,0.07)'}}
              >
                <div style={{height:180,background:`linear-gradient(135deg,${colors[i]}22,${colors[i]}44)`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:56}}>{post.emoji}</div>
                <div style={{padding:28}}>
                  <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                    <span style={{background:`${colors[i]}18`,color:colors[i],padding:'3px 12px',borderRadius:50,fontSize:11,fontWeight:700}}>{post.tag}</span>
                    <span style={{color:'#9CA3AF',fontSize:12}}>{post.date}</span>
                  </div>
                  <h3 style={{fontSize:17,fontWeight:700,color:'#1E1B4B',margin:'0 0 12px',lineHeight:1.4}}>{post.title}</h3>
                  <p style={{color:'#6B7280',fontSize:14,lineHeight:1.7,margin:'0 0 20px'}}>{post.excerpt}</p>
                  <a href="#" style={{color:colors[i],fontWeight:600,fontSize:14,textDecoration:'none'}}
                  onMouseEnter={e=>e.currentTarget.style.textDecoration='underline'}
                  onMouseLeave={e=>e.currentTarget.style.textDecoration='none'}
                  >Read More →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* CONTACT */
function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:''})
  const [sent,setSent] = useState(false)
  function handleSubmit() {
    if(form.name&&form.email&&form.message){setSent(true);setTimeout(()=>setSent(false),4000);setForm({name:'',email:'',subject:'',message:''})}
  }
  const inp = {width:'100%',padding:'14px 20px',borderRadius:12,fontSize:15,border:'2px solid rgba(124,58,237,0.15)',outline:'none',fontFamily:'inherit',boxSizing:'border-box',color:'#1E1B4B',transition:'border-color 0.2s',background:'white'}
  return (
    <section id="contact" style={{padding:'100px 5%',backgroundImage:`url("${waveBgUrl}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <div style={{maxWidth:1100,margin:'0 auto',display:'flex',gap:80,flexWrap:'wrap',alignItems:'flex-start'}}>
        <Reveal style={{flex:'1 1 320px'}}>
          <div style={{display:'inline-block',background:'rgba(124,58,237,0.1)',color:'#7C3AED',padding:'4px 14px',borderRadius:50,fontSize:12,fontWeight:700,letterSpacing:'0.1em',marginBottom:16}}>CONTACT</div>
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:800,color:'#1E1B4B',margin:'0 0 20px',fontFamily:"'Playfair Display',Georgia,serif"}}>Get In Touch</h2>
          <p style={{color:'#6B7280',lineHeight:1.8,marginBottom:36}}>Ready to transform your business? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
          {[['📍','Address','110–220 Business Ave, Suite 500, New York, NY 10260'],['📧','Email','hello@softypinko.com'],['📞','Phone','+1 (555) 123-4567']].map(([icon,label,val])=>(
            <div key={label} style={{display:'flex',gap:16,marginBottom:24,alignItems:'flex-start'}}>
              <div style={{width:44,height:44,borderRadius:12,background:cssGradients.hero,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{icon}</div>
              <div>
                <div style={{fontWeight:700,color:'#1E1B4B',fontSize:14,marginBottom:4}}>{label}</div>
                <div style={{color:'#6B7280',fontSize:14}}>{val}</div>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={200} style={{flex:'1 1 360px'}}>
          <div style={{background:'white',borderRadius:24,padding:40,boxShadow:'0 8px 40px rgba(124,58,237,0.12)'}}>
            {sent&&<div style={{background:'linear-gradient(135deg,#10B981,#059669)',color:'white',borderRadius:12,padding:'14px 20px',marginBottom:24,textAlign:'center',fontWeight:600}}>✅ Message sent! We'll be in touch soon.</div>}
            <div style={{display:'flex',gap:16,marginBottom:16}}>
              <input value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} placeholder="Your Name" style={inp} onFocus={e=>e.target.style.borderColor='#7C3AED'} onBlur={e=>e.target.style.borderColor='rgba(124,58,237,0.15)'}/>
              <input value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} placeholder="Your Email" style={inp} onFocus={e=>e.target.style.borderColor='#7C3AED'} onBlur={e=>e.target.style.borderColor='rgba(124,58,237,0.15)'}/>
            </div>
            <input value={form.subject} onChange={e=>setForm(p=>({...p,subject:e.target.value}))} placeholder="Subject" style={{...inp,marginBottom:16}} onFocus={e=>e.target.style.borderColor='#7C3AED'} onBlur={e=>e.target.style.borderColor='rgba(124,58,237,0.15)'}/>
            <textarea value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} placeholder="Your Message" rows={5} style={{...inp,resize:'vertical',marginBottom:24}} onFocus={e=>e.target.style.borderColor='#7C3AED'} onBlur={e=>e.target.style.borderColor='rgba(124,58,237,0.15)'}/>
            <button onClick={handleSubmit} style={{width:'100%',background:cssGradients.button,color:'white',border:'none',padding:'15px',borderRadius:12,fontWeight:700,fontSize:16,cursor:'pointer',fontFamily:'inherit',boxShadow:'0 8px 25px rgba(124,58,237,0.4)',transition:'transform 0.2s,box-shadow 0.2s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 12px 35px rgba(124,58,237,0.5)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 8px 25px rgba(124,58,237,0.4)'}}
            >Send Message →</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* FOOTER */
function Footer() {
  return (
    <footer style={{backgroundImage:`url("${darkBgUrl}")`,backgroundSize:'cover',backgroundPosition:'center',padding:'64px 5% 32px',color:'white'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'flex',gap:48,flexWrap:'wrap',marginBottom:48}}>
          <div style={{flex:'2 1 280px'}}>
            <img src="/logo.svg" alt="Softy Pinko" style={{height:44,marginBottom:20,filter:'brightness(0) invert(1)'}}/>
            <p style={{color:'rgba(255,255,255,0.65)',lineHeight:1.8,fontSize:14,maxWidth:280}}>We help businesses grow with innovative digital strategies and creative solutions.</p>
            <div style={{display:'flex',gap:12,marginTop:24}}>
              {['𝕏','in','f','▶'].map(s=>(
                <a key={s} href="#" style={{width:38,height:38,borderRadius:'50%',background:'rgba(255,255,255,0.1)',color:'white',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',fontSize:14,fontWeight:600,transition:'background 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(236,72,153,0.6)'}
                onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}
                >{s}</a>
              ))}
            </div>
          </div>
          {[
            {title:'Quick Links',links:['Home','About','Services','Pricing','Blog','Contact']},
            {title:'Services',links:['Web Design','Digital Marketing','SEO Optimization','Brand Strategy','App Development']},
            {title:'Company',links:['Our Team','Careers','Press Kit','Privacy Policy','Terms of Service']},
          ].map(col=>(
            <div key={col.title} style={{flex:'1 1 150px'}}>
              <h4 style={{color:'white',fontWeight:700,fontSize:15,marginBottom:20}}>{col.title}</h4>
              <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:10}}>
                {col.links.map(l=>(
                  <li key={l}><a href="#" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',fontSize:14,transition:'color 0.2s'}}
                  onMouseEnter={e=>e.target.style.color='#F9A8D4'}
                  onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.6)'}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:13,margin:0}}>© 2024 Softy Pinko. All rights reserved.</p>
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:13,margin:0}}>Designed with ❤️ for modern businesses</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <WorkProcess/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}
