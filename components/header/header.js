/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/images/logo.png'
import classes from '../header/header.module.css'
import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hasScrolled:false
        }
    }

    handleScroll = (event) =>{
        const scrollTop = window.pageYOffset
        if(scrollTop > 80){
            this.setState({hasScrolled:true})
        }else{
            this.setState({hasScrolled:false})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',
        this.handleScroll
        )
    }

   

    render(){
    
    return (

        
        <div className={this.state.hasScrolled ? 'Header HeadersScrolled':'Header'}>
            <div className="HeaderGroup">
                <Link href="/page2"><Image src={logo} width={200} height={100}/></Link>
                <Link href="/page2">Courses</Link>
                <Link href="/page2">downloads</Link>
                <Link href="/page2">workshops</Link>
                <Link href="/page2"><button>Buy</button></Link>
            </div>
        </div>
    )
}
}

export default Header;