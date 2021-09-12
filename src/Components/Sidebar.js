import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/svg/logo.svg'
import logoSmall from '../assets/images/jpeg-png/patriciaLogo.png'
import helpcenter from '../assets/images/svg/help-center-icon.svg'
import {sidebarMenu} from './menu'

const Sidebar = ({toggle, setToggle, setToggleActivities}) => {
    //const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle(prev => !prev)
        setToggleActivities(false);
    }
    return (
        <Container expand={toggle}>
            <div className={`sidebar-wrap ${toggle? '':'small'}`}>
                <div className="sidebar-header">
                    <span onClick={handleToggle} className="sidebar-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                        viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
                        <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z">
                        </path>
                        </svg>
                    </span>
                    <div className="logo-small">
                        <img src={logoSmall} alt=""/>
                    </div>
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    
                    
                </div>

                <div className="sidebar-menu">
                    <ul>
                        {sidebarMenu.map((item, index)=>(
                            <li key={index} className="menu-item">
                                    <div className="menu-item-icon">
                                        <img src={item.icon} alt="" className="svg"/>
                                    </div>
                                    
                                    <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 
                <div className="help-center">
                    <img src={helpcenter} alt="" />
                    <span>Help Center</span>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 240px;
    height: 100vh;
    background-color: #fff;
    position: fixed;


    .sidebar-wrap{
        width: 100%;
        height: 100%;
        border-right: 1px solid #eff2f7;
        border-left: 1px solid #eff2f7;
        display: flex;
        flex-direction: column;
        color: #979aa5;

        .sidebar-header{
            padding: 30px;

            .logo-small{
                width: 24px;
                height: 24px;
                display: none;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .sidebar-toggle{
                display: none;
            }
        }

        .sidebar-menu{
            width: 100%;
            margin-top: 80px;
            padding-right: 25px;
            .menu-item{
                width: 100%;
                display: flex;
                align-items: center;
                padding: 15px 30px;
                cursor: pointer;

                :hover{
                    background-color: #ffeea7;
                    border-radius: 0 8px 8px 0;
                    color: #006156;

                    .svg{
                        filter: invert(100%) sepia(90%) saturate(2587%) hue-rotate(161deg) brightness(91%) contrast(102%);
                    }
                }

                .menu-item-icon{
                    width: 24px;
                    height: 24px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                span{
                    margin-left: 14px;
                    white-space: nowrap;
                }
            }
        }

        .help-center{
            padding: 0 30px 40px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: auto;
            cursor: pointer;

            span{
                margin-left: 16px;
                white-space: nowrap;
            }
        }
    }

    @media screen and (max-width: 1200px){
        width: 200px;
    }
    @media screen and (max-width: 1024px){
        width: ${props=> props.expand? '200px': '60px'};
        transition: all .2s ease-in-out;
        z-index: 5;


        .sidebar-wrap{
            overflow: hidden;
            .sidebar-header{
                display: flex;
                flex-direction: column;
                padding: 30px 0 0 30px;

                .sidebar-toggle{
                    display: inline-block;
                    align-self: flex-start;
                    cursor: pointer;
                    
                }

                .logo{
                    margin-top: 30px;
                }
            }
            .sidebar-menu{

            }
        }

        .sidebar-wrap.small{
            .sidebar-header{
                padding-left: 0;
                align-items: center;
                .logo{
                    display: none;
                }
                .logo-small{
                    display: block;
                    margin-top: 30px;
                }
                .sidebar-toggle{
                    align-self: initial;
                }
                
               
            }

            .sidebar-menu{
                padding-right: 0;
                .menu-item{
                    padding: 15px 0;
                    justify-content: center;
                    span{
                        display: none;
                        transition: all .3s ease-in;
                    }
                }
            }

            .help-center{
                padding: 0 0 40px;
                justify-content: center;
                
                span{
                    display: none;
                }
            }
        }
       
    }

    @media screen and (max-width: 580px){
        .sidebar-wrap{
            .sidebar-header{
                padding-top: 10px;
            }
        }
    }

    @media screen and (max-width: 480px){
        width: ${props=> props.expand? '200px': '50px'};
    }
`

export default Sidebar
