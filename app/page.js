 "use client";
import {useState} from "react";
import {ArrowRight,BadgeCheck,Building2,Check,ChevronDown,Globe2,GraduationCap,Menu,Plane,ShieldCheck,Sparkles,Users,X} from "lucide-react";

const countries=[
{name:"United Kingdom",short:"UK",image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",desc:"Study · Visit · Business"},
{name:"Canada",short:"CA",image:"https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85",desc:"Study · Visit · Immigration"},
{name:"Australia",short:"AU",image:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d7?auto=format&fit=crop&w=1200&q=85",desc:"Study · Skilled · Visit"},
{name:"United States",short:"US",image:"https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=85",desc:"Study · Visit · Business"}];

const services=[
["01","Student Visa","University shortlisting, application preparation and visa guidance.","study"],
["02","Tourist Visa","Structured document and application guidance for your visit.","travel"],
["03","Business Visa","Professional support for meetings, conferences and business travel.","business"],
["04","Family Visa","Guidance for family visits and supporting documents.","family"]];

export default function Home(){
const[menu,setMenu]=useState(false),[faq,setFaq]=useState(0),[sent,setSent]=useState(false);
return <main>
<header className="header"><nav className="nav container">
<a href="#home" className="logo"><span className="logo-orb">N</span><span>NEXORA<span>GLOBAL</span></span></a>
<div className={"navlinks "+(menu?"show":"")}><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#destinations" onClick={()=>setMenu(false)}>Destinations</a><a href="#about" onClick={()=>setMenu(false)}>Why Nexora</a><a href="#faq" onClick={()=>setMenu(false)}>FAQ</a></div>
<a className="navbutton" href="#contact">Book Consultation <ArrowRight size={16}/></a><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
</nav></header>

<section className="hero" id="home"><div className="hero-image"/><div className="hero-glow"/><div className="bd-pattern"/>
<div className="container hero-content"><div className="location-pill"><span/> UTTARA · DHAKA · BANGLADESH</div>
<h1>Go beyond<br/><em>borders.</em></h1>
<p>Strategic visa guidance for Bangladeshis who are ready to study, travel, work and build their next chapter abroad.</p>
<div className="hero-buttons"><a className="primary" href="#contact">Get your visa roadmap <ArrowRight size={18}/></a><a className="secondary" href="#destinations">Explore destinations</a></div>
<div className="hero-proof"><div><strong>01</strong><span>Profile<br/>assessment</span></div><div><strong>02</strong><span>Document<br/>strategy</span></div><div><strong>03</strong><span>Application<br/>guidance</span></div></div></div>
<div className="hero-side">NEXORA<br/><span>GLOBAL MOBILITY</span></div></section>

<section className="ticker"><div>🇧🇩 BANGLADESH → <b>THE WORLD</b></div><div>VISA CONSULTATION</div><div>STUDY ABROAD</div><div>TRAVEL SMART</div><div>GLOBAL OPPORTUNITIES</div></section>

<section className="section intro"><div className="container intro-grid"><div><div className="kicker"><i/> THE NEXORA APPROACH</div><h2>Local insight.<br/><em>Global direction.</em></h2></div>
<div className="intro-right"><p>We understand the questions Bangladeshi applicants face. Nexora Global combines local, practical guidance with a clear view of international visa processes.</p>
<div className="mini-stats"><div><b>01</b><span>Uttara<br/>based</span></div><div><b>04+</b><span>Core visa<br/>pathways</span></div><div><b>1:1</b><span>Profile-led<br/>consultation</span></div></div></div></div></section>

<section className="section services" id="services"><div className="container"><div className="heading-row"><div><div className="kicker"><i/> WHAT WE DO</div><h2>Built around<br/><em>your destination.</em></h2></div><p>One team for the important decisions before you submit.</p></div>
<div className="service-grid">{services.map(([num,title,text,type])=><article className="service" key={num}><span className="num">{num}</span><div className="service-icon">{type==="study"?<GraduationCap/>:type==="travel"?<Plane/>:type==="business"?<Building2/>:<Users/>}</div><h3>{title}</h3><p>{text}</p><a href="#contact"><ArrowRight/></a></article>)}</div></div></section>

<section className="section destinations" id="destinations"><div className="container"><div className="heading-row"><div><div className="kicker light"><i/> POPULAR ROUTES</div><h2>From Dhaka<br/><em>to anywhere.</em></h2></div><p>Start with a destination. We'll help you understand the route.</p></div>
<div className="country-grid">{countries.map(c=><a className="country" href="#contact" key={c.short}><img src={c.image} alt={c.name}/><div className="country-shade"/><div className="country-code">{c.short}</div><div className="country-info"><small>{c.desc}</small><h3>{c.name}</h3><span>Explore route <ArrowRight size={16}/></span></div></a>)}</div></div></section>

<section className="section about" id="about"><div className="container about-grid"><div className="about-card"><div className="map-circle"><span>ঢাকা</span><small>UTTARA</small></div><div className="card-tag">BASED IN BANGLADESH<br/><b>CONNECTED TO THE WORLD</b></div></div>
<div className="about-copy"><div className="kicker"><i/> WHY NEXORA GLOBAL</div><h2>Your journey deserves<br/><em>a better starting point.</em></h2><p>Our approach is simple: understand your profile first, explain your options clearly, and help you prepare with purpose.</p>
<div className="benefits"><div><BadgeCheck/><span><b>Profile-first</b> consultation tailored to your goals.</span></div><div><ShieldCheck/><span><b>Clear guidance</b> without unrealistic promises.</span></div><div><Globe2/><span><b>Global perspective</b> with Bangladesh-focused support.</span></div></div>
<a className="dark-btn" href="#contact">Talk to an advisor <ArrowRight size={17}/></a></div></div></section>

<section className="section contact" id="contact"><div className="contact-orb"/><div className="container contact-grid"><div className="contact-copy"><div className="kicker light"><i/> START HERE</div><h2>Tell us where<br/><em>you want to go.</em></h2><p>Give us a few details. We'll help you identify the next sensible step for your visa journey.</p><div className="contact-points"><span>📍 Uttara, Dhaka, Bangladesh</span><span>🕙 Sat – Thu · 10:00 AM – 7:00 PM</span><span>🌐 Online consultations available</span></div></div>
<form className="form" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><div><Check/></div><h3>Request received.</h3><p>Thank you for contacting Nexora Global. Our team will get back to you soon.</p><button type="button" className="dark-btn" onClick={()=>setSent(false)}>Send another request</button></div>:<>
<div className="form-title">BOOK A CONSULTATION <Sparkles size={15}/></div><div className="two"><label>Full name<input required placeholder="Your full name"/></label><label>Phone / WhatsApp<input required placeholder="+880 1XXX XXX XXX"/></label></div>
<div className="two"><label>Email<input type="email" placeholder="you@example.com"/></label><label>Destination<select defaultValue=""><option value="" disabled>Select country</option>{countries.map(c=><option key={c.short}>{c.name}</option>)}<option>Other</option></select></label></div>
<label>Visa purpose<select defaultValue=""><option value="" disabled>Select visa type</option><option>Student Visa</option><option>Tourist Visa</option><option>Business Visa</option><option>Family Visa</option><option>Not sure</option></select></label>
<label>Briefly tell us about your plan<textarea rows="4" placeholder="For example: I want to study in Canada..."/></label><button className="submit" type="submit">Request my consultation <ArrowRight size={18}/></button><small>Consultation guidance does not guarantee visa approval. Final decisions are made by the relevant authorities.</small></>}</form></div></section>

<section className="section faq" id="faq"><div className="container faq-grid"><div><div className="kicker"><i/> COMMON QUESTIONS</div><h2>Before you<br/><em>take off.</em></h2><p>Not sure what you need? Start with the questions applicants ask us most.</p></div>
<div className="faqs">{[
["Can I consult Nexora if I haven't chosen a country yet?","Yes. A consultation can start with your goals and profile. We can discuss suitable destinations and visa pathways before you decide."],
["Does Nexora guarantee visa approval?","No. Visa decisions belong to the relevant embassy, immigration authority or government department. We focus on responsible guidance and preparation."],
["Do you support online consultations outside Dhaka?","Yes. Nexora Global is based in Uttara, Dhaka, and consultations can also be arranged online."],
["What should I bring to my first consultation?","Bring whatever you already have: passport details, education or employment information, travel history and a basic idea of your destination and purpose."]
].map(([q,a],i)=><div className={"faq-item "+(faq===i?"open":"")} key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>{q}</span><ChevronDown/></button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>

<footer><div className="container footer-main"><div><a className="logo" href="#home"><span className="logo-orb">N</span><span>NEXORA<span>GLOBAL</span></span></a><p>Bangladesh-based visa consultation<br/>for a more connected world.</p></div>
<div className="footer-cols"><div><b>EXPLORE</b><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#about">Why Nexora</a></div><div><b>LOCATION</b><span>Uttara, Dhaka</span><span>Bangladesh</span><span>Sat – Thu</span></div><div><b>CONNECT</b><a href="#contact">Book consultation</a><a href="mailto:hello@nexoraglobal.example">hello@nexoraglobal.example</a><span>+880 1XXX XXX XXX</span></div></div></div>
<div className="container footer-bottom"><span>© 2026 Nexora Global. All rights reserved.</span><span>Visa consultation · Independent private agency</span></div></footer>
</main>}