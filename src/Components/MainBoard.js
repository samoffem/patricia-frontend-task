import React from 'react'
import styled from 'styled-components'
import backarrow from '../assets/images/svg/back-arrow.svg'
import vcardLogo from '../assets/images/svg/virtual-card-logo.svg'
import smallArrow from '../assets/images/svg/small-arrow.svg'
import card1 from '../assets/images/jpeg-png/patricia-card.png'
import card2 from '../assets/images/jpeg-png/patricia-card-2.png'
import Activities from './Activities'

const MainBoard = ({toggleActivities, setToggleActivities, setToggle}) => {


    const handleClick = ()=>{
        setToggleActivities(true);
        setToggle(false)
    }
    return (
        <Wrapper showActivities={toggleActivities}>
            <div className="mainboard-container">
                <div className="cards-info">
                    <div className="header">
                        <div className="left-header">
                            <img src={backarrow} alt="" />
                            <h2>Cards</h2>
                        </div>
                        <div onClick={handleClick} className="right-header">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
                                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="virtual-card">
                            <div className="left-item">
                                <div className="vcardlogo-wrap">
                                    <img src={vcardLogo} alt="" />
                                </div>
                                
                                <div className="vcard-text">
                                    <h4>Virtual Card <img src={smallArrow} alt="" /></h4>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="right-item">
                                <button>Create New Card</button>
                            </div>
                        </div>
                        <div className="cards-wrapper">
                            <div className="left-card card">
                                <img src={card1} alt=""/>
                            </div>
                            <div className="right-card card">
                                <img src={card2} alt=""/>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="freeze-btn">Freeze Card</button>
                            <button className="delete-btn">Delete Card</button>
                        </div>

                        <div className="card-details">
                            <div className="card-details-wrap">
                                <div className="details-info">
                                    <ul>
                                        <li className="card-detail-item">
                                            <span>Card Balance:</span>
                                            <span>$3000.73</span>
                                        </li>
                                        <li className="card-detail-item">
                                            <span>Name:</span>
                                            <span>Netflix Card</span>
                                        </li>
                                        <li className="card-detail-item">
                                            <span>Card Satus:</span>
                                            <span>Active</span>
                                        </li>
                                        <li className="card-detail-item address">
                                            <span>Billing Address:</span>
                                            <span>Patricia HQ, SA 109827 
                                                <span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 8.75C3 5.57 5.57 3 8.75 3H15.76C16.17 3 16.51 3.34 16.51 3.75C16.51 4.16 16.17 4.5 15.76 4.5H8.75C6.4 4.5 4.5 6.4 4.5 8.75V15.86C4.5 16.27 4.16 16.61 3.75 16.61C3.34 16.61 3 16.27 3 15.86V8.75Z" fill="#9DA8B6"/>
                                                    <path d="M18.1502 6.53999C14.9102 6.17999 11.5902 6.17999 8.34016 6.53999C7.42016 6.64999 6.68016 7.36999 6.57016 8.29999C6.19016 11.59 6.19016 14.91 6.57016 18.19C6.68016 19.12 7.42016 19.85 8.34016 19.95C11.5802 20.31 14.9002 20.31 18.1502 19.95C19.0702 19.85 19.8202 19.12 19.9202 18.19C20.3002 14.9 20.3002 11.58 19.9202 8.29999C19.8202 7.36999 19.0802 6.64999 18.1502 6.53999Z" fill="#9DA8B6"/>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>
                                        <li className="card-detail-item">
                                            <span>Date Created:</span>
                                            <span>March 3rd 2020 9:48:35 am</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="fund-btn">
                                    <button>Fund Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recent-activities">
                    <Activities setToggleActivities={setToggleActivities} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: calc(100% - 240px);
    margin-left: 240px;
    background: #fff;

    .mainboard-container{
        position: relative
    }

    .cards-info{
        width: calc(100% - 450px);

        .header{
            padding: 30px 30px 30px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eff2f7;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
            background-color: #fff;
            z-index: 4;

            .left-header{
                display: flex;
                align-items: center;

                h2{
                    margin-left: 16px;
                    color: #9da8b6;
                    font-size: clamp(16px, 3.5vw, 32px);
                }
            }

            .right-header{
                cursor: pointer;
                display: none;
            }
    
           
        }

        .cards{
            padding: 30px;
            .virtual-card{
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                .left-item{
                    display: flex;
                    align-items: center;

                    .vcardlogo-wrap{
                        width: 40px;
                        height: 40px;

                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }
                    .vcard-text{
                        margin-left: 12px;
                        h4{
                            color: #444856;
                            display: flex;
                            align-items: center;
                            white-space: nowrap;
                            img{
                                margin-left: 4px;
                            }
                        }
                        p{
                            color: #9da8b6;
                            font-size: 14px;
                            margin-top: 4px;
                        }
                    }
                }
                .right-item{
                    button{
                        padding: 10px 28px;
                        background-color: #ffce00;
                        border: none;
                        border-radius: 8px;
                        color: #1d1e2c;
                        border: 1px solid #ffce00;
                        cursor: pointer;
                        transition: all .2s ease-in-out;

                        :hover{
                            background-color: #fff;
                    
                        }
                    }
                }
            }
            .cards-wrapper{
                display: flex;
                align-items: center;
                padding: 20px 0;

                .left-card{
                    width: 45%;
                }
                .right-card{
                    width: 40%;
                    position: relative;
                    z-index: 1;
                    margin-left: 20px;
                    
                    img{
                        filter: blur(1.1px);
                    }

                    :before{
                        content: '';
                        position: absolute;
                        top: 7%;
                        left: 32%;
                        width: 80%;
                        height: 80%;
                        background-color: #fff;
                        z-index: -1;
                        border-radius: 20px;
                        box-shadow: 0px 20px 20px rgba(0,0,0,0.06);
                    }
                    :after{
                        content: '';
                        position: absolute;
                        top: 11%;
                        left: 50%;
                        width: 70%;
                        height: 70%;
                        background-color: #fff;
                        z-index: -2;
                        border-radius: 20px;
                        box-shadow: 0px 20px 36px rgba(0,0,0,0.03);
                    }
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
            }
            .card-actions{
                button{
                    padding: 10px 25px;
                    background: none;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all .2s ease-in-out;

                    :hover{
                        color: #fff;
                    }
                }
                .freeze-btn{
                    color: #006156;
                    border: 1px solid #006156;

                    :hover{
                        background-color: #006156;
                    }
                }
                .delete-btn{
                    color: #cc4945;
                    border: 1px solid #cc4945;
                    margin-left: 12px;

                    :hover{
                        background-color: #cc4945;
                    }
                }
            }

            .card-details{
                margin-top: 55px;
                margin-left: auto;
                margin-right: auto;

                .card-details-wrap{
                    padding: 24px;
                    background-color: #f9fafc;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;

                    .details-info{
                        

                        ul{
                            list-style: none;
                        }
                        .card-detail-item{
                            padding: 15px 0;
                            color: #575A65;
                            white-space: nowrap;
                            display: flex;
                            align-items: center;

                            
                            :first-child span:last-child{
                                color: #006156;
                            }
                            >span:first-child{
                                display: inline-block;
                                width: 150px;
                                color: #9da8b6;
                            }
                        
                        }
                        .card-detail-item.address span:nth-child(2){
                            display: flex;
                            align-items: center;
                        }
                    }

                    .fund-btn{ 
                        padding-top: 15px;
                        button{
                            padding: 10px 15px;
                            background-color: #fff;
                            color: #006165;
                            border: 1px solid #006165;
                            border-radius: 6px;
                            cursor: pointer;
                            transition: all .2s ease-in-out;
                            white-space: nowrap;

                            :hover{
                                background-color: #006165;
                                color: #fff;
                            }


                        }
                    }
                }
            }
        }
    }

    .recent-activities{
        padding: 40px 20px 10px;
        width: 450px;
        height: 100vh;
        background-color: #f9fafc;
        position: fixed;
        top: 0;
        right:0;
        overflow: auto;
    }

    @media screen and (max-width: 1200px){
        width: calc(100% - 200px);
        margin-left: 200px;
        
        .cards-info{
            width: calc(100% - 350px);
        }

        .recent-activities{
            width: 350px;
        }
    }

    @media screen and (max-width: 1024px){
        width: calc(100% - 60px);
        margin-left: 60px;
    }

    @media screen and (max-width: 920px){

        .cards-info{
            width: calc(100% - 300px);
        }
        .recent-activities{
            width: 300px;
        }
    }
    @media screen and (max-width: 900px){
        
        .cards-info{
            width: 100%;

            .header{
                .right-header{
                    display: block;
                }
            }
        }
        .recent-activities{
            transform: ${props=> props.showActivities? 'translateX(0)':'translateX(500px)'};
            z-index: 6;
            transition: all .2s ease-in-out;
            box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.1);
            padding: 30px 20px 10px;
        }
    }

    @media screen and (max-width: 580px){
        .cards-info{
            .header{
                padding: 10px;
            }
            .cards{
                padding: 20px 15px;

                .virtual-card{
                    .right-item{
                        
                    }
                }

                .cards-wrapper{
                    flex-direction: column;
                    justify-content: initial;
                    align-items: initial;

                    .left-card{
                        width: 100%;
                    }
                    .right-card{
                        width: 100%;
                        margin-left: 0;
                        margin-top: 20px;

                        :before, :after{
                            display: none;
                        }
                    }
                }

                .card-actions{

                    display: flex;
                    justify-content: space-between;

                    button{
                        width: 50%;
                    }

                }

                .card-details{

                    .card-details-wrap{
                        flex-direction: column;
                    }
                }
            }
        }

        .recent-activities{
            padding: 10px 10px 0;
        }
    }

    @media screen and (max-width: 480px){
        width: calc(100% - 50px);
        margin-left: 50px;

        .cards-info{

            .cards{
                padding: 20px 10px;
                .virtual-card{
                    
                    .left-item{

                        .vcardlogo-wrap{
                            width: 24px;
                            height: 24px;
                        }
                        .vcard-text{
                            margin-left: 3px;
                            h4{
                                font-size: 12px;
                            }
                            p{
                                font-size: 8px;
                                margin-top: 0;
                            }
                        }
                    }

                    .right-item{
                        

                        button{
                            padding: 10px 4px;
                            font-size: 10px;
                        }
                    }
                }
               .card-actions{
                   flex-direction: column;
                   align-items: center;

                   button{
                       width: 100%;
                       padding: 10px 15px;
                       font-size: 12px;
                   }
                   .delete-btn{
                       margin-left: 0;
                       margin-top: 15px;
                   }
               } 

               .card-details{
                   margin-top: 40px;
                   font-size: 12px;

                   .card-details-wrap{
                       padding: 15px 10px;
                        .details-info{

                            .card-detail-item{

                                >span:first-child{
                                    width: 100px;
                                }
                            
                            }
                        }

                        .fund-btn{
                            button{
                                width: 100%;
                            }
                        }
                    }
               }    
            }
        }

        .recent-activities{
            width: 200px;
            
        }
    }

    @media screen and (max-width: 330px){

        .cards-info{
            .cards{
                .card-details{
                    .card-detail-item{
                        span:last-child{
                            font-size: 8px;
                        }
                    } 
                }
            }
        }

    }

    

    
`

export default MainBoard
