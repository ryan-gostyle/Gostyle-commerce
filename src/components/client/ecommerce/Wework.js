import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import ShowMore from 'react-show-more';
import '../landingv3/Nutshell.css';
import './FeaturedWorks.css';
import { Anchor, Tree, Icon } from 'antd';

const { TreeNode } = Tree;
const { Link } = Anchor;
export default class Wework extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Let's Build Online Store</h2>
                        </Col>
                        <Col lg={12}>
                            <p style={{ textAlign: "center", wordBreak: "break-word" }}>From Premium Packages to Custom eCommerce Solutions, we tailor fit based on your business objectives.</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 " style={{ background: "#FAFAFAFA" }}>
                                        <div className="item  fade-in-bottom-1 ">
                                            <img alt="no ecom1.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" />
                                            <p>ECOMMERCE Website Development</p>
                                            <ul>
                                                <li>3 Months FREE of Technical Support</li>
                                                <li>Upload of up to unlimited products & unlimited categories</li>
                                                <li>Setup of newsletter form with pop-up and/or top bar</li>
                                                <li>Shipping settings</li>
                                                <li>Redirect domain and point nameservers</li>
                                                <li>Social media links and share links</li>
                                                <li>Instagram widgets</li>
                                                <li>Install Google Analytics tracking snippet</li>
                                                <Tree showIcon switcherIcon={<Icon type="down" />}>
                                                    <TreeNode title="See more" key="0-0" >
                                                        <TreeNode title="Submission of sitemap to Google Search Console" key="0-0-0" selectable={false} />
                                                        <TreeNode title="SEO: Search engine optimisation for up to 50 products, collection pages, and homepage" key="0-0-1" selectable={false} />
                                                        <TreeNode title="Setup of shopping cart" key="0-0-2" selectable={false} />
                                                        <TreeNode title="Setup of up to twelve (12) info pages & one contact form" key="0-0-3" selectable={false} />
                                                        <TreeNode title="Custom responsive, desktop, mobile & tablet friendly web design" key="0-0-4" selectable={false} />
                                                        <TreeNode title="Two (2) rounds of major revisions" key="0-0-5" selectable={false} />
                                                        <TreeNode title="Setup of navigation, homepage and footer" key="0-0-6" selectable={false} />
                                                        <TreeNode title="Access to eCommerce Partners" key="0-0-7" selectable={false} />
                                                        <TreeNode title="Custom Website Application" key="0-0-8" selectable={false} />

                                                    </TreeNode>
                                                </Tree>
                                            </ul>
                                            {/* <ShowMore
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass='showmore'
                                            >
                                                <ul>
                                                    <li>3 Months FREE of Technical Support</li>
                                                    <li> Upload of up to unlimited products & unlimited categories</li>
                                                    <li> Setup of newsletter form with pop-up and/or top bar</li>
                                                    <li> shipping settings</li>
                                                    <li> Redirect domain and point nameservers</li>
                                                    <li> Social media links and share links</li>
                                                    <li> Instagram feed or shop Instagram widget</li>
                                                    <li> Install Google Analytics tracking snippet</li>
                                                    <li> Submission of sitemap to Google Search Console</li>
                                                    <li> SEO: Search engine optimisation for up to 50 products, collection pages, and homepage</li>
                                                    <li> Setup of shopping cart</li>
                                                    <li> Setup of up to twelve (12) info pages & one contact form</li>
                                                    <li> Custom responsive, desktop, mobile & tablet friendly web design</li>
                                                    <li> Two (2) rounds of major revisions</li>
                                                    <li> Setup of navigation, homepage and footer</li>
                                                    <li> Access to eCommerce Partners</li>
                                                    <li> Custom Website Application</li>
                                                </ul>
                                            </ShowMore> */}
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item  fade-in-bottom-2">
                                            <img alt="no inbounmarketing" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png" />
                                            <p>ECOMMERCE Inbound Marketing</p>
                                            {/* <ShowMore
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass='showmore'
                                            > */}
                                            <ul>
                                                <li>Dedicated Graphic Designer</li>
                                                <li>Social Media Posts</li>
                                                <li>Facebook Ads Optimization</li>
                                                <li>Copywriting</li>
                                                <li>Social Media Optimization</li>
                                                <li>SEO: for up to 50 oriducts,collection,page, and homepage</li>
                                                <li>Google Ads</li>
                                                <li>Product Optimization</li>
                                            </ul>
                                            {/* </ShowMore> */}
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 " style={{ background: "#FAFAFAFA" }}>
                                        <div className="item   fade-in-bottom-3">
                                            <img alt="no mobile" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mobile.png" />
                                            <p>ECOMMERCE Virtual Assistant</p>
                                            <ul>
                                                <li>Perfect for drop shippers</li>
                                                <li>Product research</li>
                                                <li>Product description writing</li>
                                                <li>Image editing</li>
                                                <li>Product listing and optimization</li>
                                                <li>Managing inventory</li>
                                                <li>Handling order processing</li>
                                                <li>Assistance in returns and exchanges</li>
                                                <li>Customer support</li>
                                            </ul>
                                            {/* <ShowMore
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass='showmore'
                                            ><ul>
                                                    <li>Perfect for drop shippers</li>
                                                    <li> Product research</li>
                                                    <li> Product description writing</li>
                                                    <li> Image editing</li>
                                                    <li> Product listing and optimization</li>
                                                    <li> Managing inventory</li>
                                                    <li> Handling order processing</li>
                                                    <li> Assistance in returns and exchanges</li>
                                                    <li> Customer support</li>
                                                </ul>
                                            </ShowMore> */}
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item  fade-in-bottom-4">
                                            <img alt="no multichannel" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/multichannel-management.png" />
                                            <p>MultiChannel Management</p>
                                            {/* <ul>
                                            <li>3 Months FREE of Technical Support</li>
                                                <li>Upload of up to unlimited products & unlimited categories</li>
                                                <li>Setup of newsletter form with pop-up and/or top bar</li>
                                                <li>Shipping settings</li>
                                                <li>Redirect domain and point nameservers</li>
                                                <li>Social media links and share links</li>
                                                <li>Instagram widgets</li>
                                                <li>Install Google Analytics tracking snippet</li>
                                                <Tree showIcon switcherIcon={<Icon type="down" />}>
                                                    <TreeNode title="See more" key="0-0" >
                                                        <TreeNode title="Submission of sitemap to Google Search Console" key="0-0-0" selectable={false}/>
                                                        <TreeNode title="SEO: Search engine optimisation for up to 50 products, collection pages, and homepage" key="0-0-1" selectable={false}/>
                                                        <TreeNode title="Setup of shopping cart" key="0-0-2" selectable={false}/>
                                                        <TreeNode title="Setup of up to twelve (12) info pages & one contact form" key="0-0-3" selectable={false}/>
                                                        <TreeNode title="Custom responsive, desktop, mobile & tablet friendly web design" key="0-0-4" selectable={false}/>
                                                        <TreeNode title="Two (2) rounds of major revisions" key="0-0-5" selectable={false}/>
                                                        <TreeNode title="Setup of navigation, homepage and footer" key="0-0-6" selectable={false}/>
                                                        <TreeNode title="Access to eCommerce Partners" key="0-0-7" selectable={false}/>
                                                        <TreeNode title="Custom Website Application" key="0-0-9" selectable={false}/>
                                                        <TreeNode title="All in one dashboard to manage your lazada, Shopee, website and Zilingon" key="0-0-8" selectable={false}/>
                                                    </TreeNode>
                                                </Tree>
                                            </ul> */}
                                            <ul>
                                                <li>eCommerce Website Full Package</li>
                                                <li> All in one dashboard to manage your lazada, Shopee, website and Zilingo</li>
                                            </ul>
                                            {/* <ShowMore
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass='showmore'>
                                               
                                            </ShowMore> */}
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

