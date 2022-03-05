import Link from "next/link";
import { ReactElement } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import classes from './layout.module.scss'

interface Props {
    children: ReactElement
}

export default function Layout({ children }: Props ) {
  return (
    <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <Image src='/logo.png' alt='' width={'50px'} height={'50px'}/>
                </Navbar.Brand>
                <Nav className={classes.layout__navbar}>
                    <Link href="/">Main</Link>
                    <Link href='/books'>Books</Link>
                </Nav>
            </Container>
        </Navbar>
        <main>{children}</main>
        <Navbar bg="light" fixed="bottom" className={classes.footer}>
            <Container>
                <div className={classes.footer__links}>
                    <a href="https://github.com/vitoldi" target='_blank' rel='noreferrer'>
                        <div className={classes.footer__links_img}><Image src='/github-logo.png' alt="" width={'24px'} height={'24px'} /></div> 
                        <div>Github</div> 
                    </a>
                    <a href="https://www.linkedin.com/in/vitali-logvin-575001212/" target='_blank' rel='noreferrer'>
                        <div className={classes.footer__links_img}><Image src='/linkedin-logo.png' alt="" width={'24px'} height={'24px'} /></div>
                        <div>Linkedin</div> 
                    </a>
                </div>
                <div className={classes.footer__author}>Vitali Logvin</div>
            </Container>
        </Navbar>
    </>
  )
}