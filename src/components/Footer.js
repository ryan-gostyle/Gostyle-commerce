import React, { Component } from 'react'
import './Footer.css'
import Newsletter from './Newsletter'
import { Icon } from 'antd';

export default class Footer extends Component {
	render() {
		return (
			<div className="section bg-dark footer">
				<div className="container">
					<div className="row">

						<div className="col-12 col-md-3">
							<ul>
								<li className="list-header">About</li>
								<li><a href="/how-we-work/">How we work</a></li>
								<li><a href="/services/">Services</a></li>
								<li><a href="/inspiration/">Get inspired</a></li>
								<li><a href="/book-a-specialist/">Book a specialist</a></li>
								<li><a href="/articles">Blog</a></li>
								<li><a href="/events">Events</a></li>
								<li><a href="/work-with-us">Careers</a></li>
							</ul>
						</div>
						<div className="col-12 col-md-3">
							<ul>
								{/* <li className="list-header">Marketing Services</li>
						<li><a href="/service/branding/">Branding</a></li>
						<li><a href="/service/web-development/">Web development</a></li>
						<li><a href="/service/video/">Video</a></li>
						<li><a href="/service/photography/">Photography</a></li>
						<li><a href="/service/graphic-design/">Graphic design</a></li>
						<li><a href="/service/social-media/">Social media</a></li>
						<li><a href="/service/digital-copy/">Digital copy</a></li>
						<li><a href="/service/marketing-strategy/">Marketing strategy</a></li> */}
								<li className="list-header">Our Services</li>
								<li><a href="/commerce">Ecommerce Solutions</a></li>
								<li><a href="/web-development/">Web development</a></li>
								<li><a href="/inbound">Inbound Marketing</a></li>
								<li><a href="/custom">Custom Solutions</a></li>
							</ul>
						</div>
						<div className="col-12 col-md-3">
							<ul>
								<li className="list-header"><a href="https://www.gostyle.studio/contact">Contact</a></li>
								<li><a href="mailto:Support@gostyle.studio">Support@gostyle.studio</a></li>
								<li><a href="tel:02039280900">09* **** ****</a></li>
								<li><a href="/#booking">My account</a></li>
								<li><a href="/privacy-policy">Privacy policy</a></li>
								<li><a href="/terms-and-conditions">Terms &amp; conditions</a></li>
							</ul>
						</div>
						<div className="col-12 col-md-3 text-left text-md-right">
							<div id="mc_embed_signup">
								<ul>
									<li className="list-header">Keep up to date with the <br />latest news</li>
								</ul>
								<Newsletter />
							</div>
						</div>
					</div>
					<div className="row mt-5 align-items-center">
						<div className="col-12 col-md">
							<a href="/" className="social-icon" aria-label="Instagram"><Icon type="instagram" /></a>
							<a href="/" className="social-icon" aria-label="Facebook"><Icon type="facebook" theme="filled" /></a>
							<a href="/" className="social-icon" aria-label="Twitter"><Icon type="twitter" /></a>
							<a href="/" className="social-icon" aria-label="Linkedin"><Icon type="linkedin" theme="filled" /></a>
						</div>
						<div className="col-12 col-md text-left text-md-center">
							{/* <a href="https://w3w.co/vocal.teach.wishes" className="social-icon" style={{fontSize:"16px !important;"}}>///vocal.teach.wishes</a> */}
						</div>
						<div className="col-12 col-md text-left text-md-right">
							<span className="capitalize" style={{ color: "#fff" }}>© Gostyle Studio 2019</span>
						</div>
					</div>
				</div>
			</div>

		)
	}
}
