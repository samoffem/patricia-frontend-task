import React from 'react'
import styled from 'styled-components'
import bell from '../assets/images/svg/bell.svg'
import more from '../assets/images/svg/more.svg'
import placeholder from '../assets/images/jpeg-png/placeholder.png'
import {activities} from './menu'

const Activities = ({setToggleActivities}) => {
    return (
        <ActivitiesWrapper>
            <div className="container">
                <div className="user-info">
                    <div onClick={()=>setToggleActivities(false)} className="close-icon">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                            viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 
                            1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 
                            4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="user-info-wrap">
                        <div className="bell-wrap wrap">
                            <img src={bell} alt="" />
                        </div>
                        <div className="profile-pic-wrap wrap">
                            <img src={placeholder} alt="" />
                        </div>
                        <div className="more wrap">
                            <img src={more} alt="" />
                        </div>
                    </div>
                </div>
                <div className="activities">
                    <div className="header">
                        <p>Recent activities</p>
                        <div className="calendar">
                            <div className="date">
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 11.2466V6.17126H14V11.2873C14 13.3799 12.6828 14.6666 10.5752 14.6666H5.41822C3.33041 14.6666 2 13.3533 2 11.2466ZM5.30626 9.60662C5.00329 9.62062 4.75302 9.37996 4.73985 9.07396C4.73985 8.76729 4.97695 8.51396 5.27991 8.49996C5.57629 8.49996 5.81998 8.73396 5.82656 9.03329C5.83974 9.34062 5.60263 9.59396 5.30626 9.60662ZM8.01318 9.60662C7.71021 9.62062 7.45994 9.37996 7.44676 9.07396C7.44676 8.76729 7.68387 8.51396 7.98683 8.49996C8.28321 8.49996 8.5269 8.73396 8.53348 9.03329C8.54665 9.34062 8.30955 9.59396 8.01318 9.60662ZM10.7003 12.0599C10.3974 12.0533 10.1537 11.7999 10.1537 11.4933C10.1471 11.1866 10.3908 10.9339 10.6937 10.9273H10.7003C11.0099 10.9273 11.2602 11.1806 11.2602 11.4933C11.2602 11.8066 11.0099 12.0599 10.7003 12.0599ZM7.44676 11.4932C7.45994 11.7999 7.71021 12.0406 8.01318 12.0266C8.30955 12.0139 8.54666 11.7606 8.53348 11.4539C8.5269 11.1539 8.28321 10.9199 7.98683 10.9199C7.68387 10.9339 7.44676 11.1866 7.44676 11.4932ZM4.73326 11.4932C4.74643 11.7999 4.99671 12.0406 5.29967 12.0266C5.59605 12.0139 5.83315 11.7606 5.81998 11.4539C5.81339 11.1539 5.56971 10.9199 5.27333 10.9199C4.97036 10.9339 4.73326 11.1866 4.73326 11.4932ZM10.1603 9.0673C10.1603 8.76063 10.3974 8.51396 10.7003 8.5073C10.9967 8.5073 11.2338 8.74663 11.247 9.04063C11.2536 9.3473 11.0165 9.60063 10.7201 9.60663C10.4171 9.6133 10.1668 9.37996 10.1603 9.07396V9.0673Z" fill="#006156"/>
                                    <path d="M2.00195 6.17121C2.01052 5.77987 2.04345 5.0032 2.10536 4.7532C2.42149 3.3472 3.49504 2.45387 5.02961 2.32654H10.9703C12.4917 2.46054 13.5785 3.35987 13.8946 4.7532C13.9558 4.99654 13.9888 5.77921 13.9973 6.17121H2.00195Z" fill="#97D3CA"/>
                                    <path d="M5.53643 4.39331C5.82622 4.39331 6.04357 4.17398 6.04357 3.87998V1.84731C6.04357 1.55331 5.82622 1.33331 5.53643 1.33331C5.24664 1.33331 5.0293 1.55331 5.0293 1.84731V3.87998C5.0293 4.17398 5.24664 4.39331 5.53643 4.39331Z" fill="#006156"/>
                                    <path d="M10.4632 4.39331C10.7464 4.39331 10.9703 4.17398 10.9703 3.87998V1.84731C10.9703 1.55331 10.7464 1.33331 10.4632 1.33331C10.1734 1.33331 9.95605 1.55331 9.95605 1.84731V3.87998C9.95605 4.17398 10.1734 4.39331 10.4632 4.39331Z" fill="#006156"/>
                                    </svg>
                                </span>
                                <span>Start date: 01/02/01</span>
                            </div>
                            <span className="download">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.554 5.2962C18.005 5.2962 20 7.356 20 9.88764V14.9199C20 17.4454 18.01 19.5 15.564 19.5L4.448 19.5C1.996 19.5 0 17.4413 0 14.9096V9.87731C0 7.35187 1.991 5.2962 4.438 5.2962H5.378L15.554 5.2962Z" fill="#C0CCDA"/>
                                <path d="M10.5459 14.0374L13.4549 11.0695C13.7549 10.7627 13.7549 10.2691 13.4529 9.96338C13.1509 9.65867 12.6639 9.65968 12.3639 9.96541L10.7709 11.5905L10.7709 1.2821C10.7709 0.85042 10.4259 0.5 9.99994 0.5C9.57494 0.5 9.23094 0.85042 9.23094 1.2821L9.23094 11.5905L7.63694 9.96541C7.33694 9.65968 6.84994 9.65867 6.54794 9.96338C6.39694 10.1168 6.32094 10.3168 6.32094 10.518C6.32094 10.717 6.39694 10.9171 6.54594 11.0695L9.45494 14.0374C9.59994 14.1847 9.79594 14.268 9.99994 14.268C10.2049 14.268 10.4009 14.1847 10.5459 14.0374Z" fill="#30324B"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="recent-activities-items">
                        <ul>
                            {activities.map((item, index)=>(
                                <li key={index} className="activity-item">
                                    <div className="item-left">
                                        <div className="item-img"><img src={item.logo} alt=""/></div>
                                        <div className="item-name">
                                            <span>{item.label}</span>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                    <span>{item.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </ActivitiesWrapper>
    )
}

const ActivitiesWrapper = styled.div`
    
    height: 100vh;
    .container{
        color: #9da8b6;

        .user-info{
            display: flex;
            justify-content: flex-end;

            .close-icon{
                cursor: pointer;
                display: none;
            }

            .user-info-wrap{
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: space-around;

                .wrap{
                    width: 25px;
                    height: 25px;
                    padding: 2px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .bell-wrap{
                    padding: 4px;
                    background-color: #fff;
                    border-radius: 3px;
                }
               
            }
        }

        .activities {
            background-color: #fff;
            margin-top: 40px;
            padding: 20px 0;
            border-radius: 8px;
            font-size: 14px;
            

            .header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 15px;

                .calendar{
                    display: flex;
                    align-items: center;

                    .date{
                        display: flex;
                        align-items: center;
                        margin-right: 8px;
                        background-color:#f9fafc;
                        padding: 2px 4px;
                        font-size: 12px;
                        border-radius: 8px;

                        span:first-child{
                            margin-right: 6px;
                        }
                    }
                    .download{
                        cursor: pointer;
                    }
                }
            }

            .recent-activities-items{
                
                ul{
                    list-style: none;
                }
                .activity-item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 15px;

                    .item-left{
                        display: flex;
                        align-items: center;

                        .item-img{
                            width: 46px;
                            height: 46px;

                            img{
                                width: 100%;
                                object-fit: contain;
                            }
                        }

                        .item-name{
                            display: flex;
                            flex-direction: column;
                            margin-left: 6px;

                             span:first-child{
                                 color: #575a65;
                             }
                             span:nth-child(2){
                                 font-size: 12px;
                             }
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 900px){
            .user-info{
                justify-content: space-between;

                .close-icon{
                    display: block;
                }
            }

            .activities{
                padding: 10px 0;
                .header{
                    p{
                        font-size: 10px;
                    }
                    .calendar{
                        .date{
                            font-size: 8px;
                        }
                        
                    }
                }
            }
        }

        @media screen and (max-width: 480px){
            .activities{
                font-size: 10px;
                .recent-activities-items{
                    .activity-item{
                        padding: 10px;

                        .item-left{

                            .item-img{
                                width: 25px;
                                height: 25px;
                            }

                            .item-name{
                                span:nth-child(2){
                                    font-size: 8px;
                                }
                            }
                        }
                    }
                }

                .header{
                    p{
                        font-size: 6px;
                    }
                    .calendar{
                        .date{
                            font-size: 4px;
                        }
                        
                    }
                }
            }
        }
    }

`

export default Activities
