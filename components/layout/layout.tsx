import Link from "next/link";
import { ReactElement } from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import Image from "next/image";
import classes from './layout.module.scss'
import { Path } from "../../core/path";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {
    children: ReactElement
}

export default function Layout({ children }: Props ) {
    const {pathname} = useRouter()
    return (
        <div className={classes.layout}>
            <Navbar bg="light" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Image src='/logo.png' alt='' width={'50px'} height={'50px'}/>
                    </Navbar.Brand>
                    <Nav variant='pills' defaultActiveKey="/" className={classes.layout__navbar}>
                        <div>
                            <div><Link href={Path.MAIN}>Main</Link></div>
                            <div  className={classNames(classes.layout__navbar_underline, Path.MAIN === pathname ? classes.layout__navbar_selected : '')}>
                            </div>
                        </div>
                        <div className={Path.BOOKS === pathname ? classes.layout__navbar_selected : ''}>
                            <div><Link href={Path.BOOKS}>Books</Link></div>
                            <div  className={classNames(classes.layout__navbar_underline, Path.BOOKS === pathname ? classes.layout__navbar_selected : '')}>
                            </div>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            <main className={classes.main}>{children}</main>
            <Navbar bg="light" className={classes.footer}>
                <Container>
                    <div className={classes.footer__links}>
                        <a href="https://github.com/vitoldi" target='_blank' rel='noreferrer'>
                            <div className={classes.footer__links_img}><Image src='/github-logo.png' alt="" width={'24px'} height={'24px'} /></div> 
                            <div className={classes.footer__links_text}>Github</div> 
                        </a>
                        <a href="https://www.linkedin.com/in/vitali-logvin-575001212/" target='_blank' rel='noreferrer'>
                            <div className={classes.footer__links_img}><Image src='/linkedin-logo.png' alt="" width={'24px'} height={'24px'} /></div>
                            <div className={classes.footer__links_text}>Linkedin</div> 
                        </a>
                    </div>
                    <div className={classes.footer__author}>Vitali Logvin</div>
                </Container>
            </Navbar>
        </div>
    )
}