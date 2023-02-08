import React, { useState } from 'react'
import utilStyles from '../../../styles/utils.module.css';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight, FaEllipsisV } from "react-icons/fa";
import Image from 'next/image';


const Homepage = () => {

  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [transfer, setTransfer] = useState('');
  const [activeRoom1, setActiveRoom1] =  useState(false);
  const [activeRoom2, setActiveRoom2] =  useState(false);
  const [activeFood1, setActiveFood1] =  useState(false);
  const [activeFood2, setActiveFood2] =  useState(false);
  const [activeFood3, setActiveFood3] =  useState(false);
  const [activeTransport1, setActiveTransport1] =  useState(false);
  const [activeTransport2, setActiveTransport2] =  useState(false);
  const [transferCheckbox, setTransferCheckbox] =  useState(false)
  // const [checkbox, setCheckbox] = useState(false)

  const total = () => {
    if(food==='50') {
      return (Number(room) + Number(transport) + Number(transfer)) - Number(food)  
    } else {
      return Number(room) + Number(food) + Number(transport) + Number(transfer)
    }
  }
  
  // const acivateDeactivate = (e: any) =>{
    
  // }
  // const checkActive = () =>{
  //     setActive(true)
  // }

  const toggleModal = () => {
      setModal(!modal);
  }

  return (
    <>
      <div className={`${utilStyles.container}` }>
          <div className={`${utilStyles.hotelName}`}>
              <h4 className={`${utilStyles.group1}`}>Group Package</h4>
              <div className={`${utilStyles.group2}`}>
                <div className={`${utilStyles.group2Flex}`}>
                  <i className={`${utilStyles.group2Icon}`}><BsFillPeopleFill/></i>
                  <h5 className={`${utilStyles.group2Text}`}>Suitable for 10</h5>
                </div>
              </div>
          </div>
          <div>
            <div className={`${utilStyles.imageBox}`}>
              <Image
                src="/assets/images/img.png"
                alt="An image"
                width={318}
                height={277}
              />
              <div className={`${utilStyles.labelTextCenter}`}>
                <p className={`${utilStyles.imageLabel}`}>-24% Off 24 Jan - 18 Feb</p>
              </div>
              <FaAngleLeft className={`${utilStyles.leftSlider}`}/>
              <FaAngleRight className={`${utilStyles.rightSlider}`}/>
            </div>
            <div>
                <div className={`${utilStyles.card1} px-[12px] py-[12px] border`}>
                  <div className={`${utilStyles.menu}`}>
                    <FaEllipsisV onClick={toggleModal}/>
                  </div>
                  <h5 className='color-[#fffff]'>Food: Included</h5>
                  <h5>Room Type: Shared</h5>
                  <h5>Transport: Chander gari</h5>
                </div>
                <div className={`${utilStyles.card2}`}>
                  <div className={`${utilStyles.menu}`}>
                    <FaEllipsisV />
                  </div>
                  <h5>Amenities: A lot of things included, ... <span>+ 5 more</span></h5>
                  <h5>Includes: A lot of things included, ... <span>+ 5 more</span></h5>
                  <h5>Excludes: Some things excluded, ... <span>+ 5 more</span></h5>
                </div>
                <div className={`${utilStyles.card3}`}>
                  <h5>Price per Person:</h5>
                  <div className={utilStyles.tempFlex}>
                    <h3>{Number(1000 + total())} BDT</h3>
                    <h5 className={utilStyles.strike}>107290 BDT</h5>
                  </div>
                </div>
                <div className={`${utilStyles.card4}`}>
                    <div className={`${utilStyles.card4Flex}`}>
                      <div><button className={`${utilStyles.btnSub}`}>-</button></div>
                      <div className={`${utilStyles.card4Package}`}>
                        <h4 className={`${utilStyles.card4PackageFirst}`}>Add Package</h4>
                        <h3 className={`${utilStyles.card4PackageSecond}`}>0 Selected</h3>
                      </div>
                      <div><button className={`${utilStyles.btnAdd}`}>+</button></div>
                    </div>
                </div>
            </div>
          </div>
      </div>

      {/* Popup box */}
      {modal && (
                <div className={`${utilStyles.modal}`}>
                    <div onClick={toggleModal} className={`${utilStyles.overlay}`}></div>
                    <div className={`${utilStyles.modalContent}`}>
                        <div>
                            <h3>Update Room</h3>
                            <div className={`${utilStyles.updateFlex}`}>
                              <span><input type="radio" name="roomPrice" id="" checked={activeRoom1} onChange={(e)=>{setRoom(e.target.value); setActiveRoom1(true); setActiveRoom2(false)}} value='0'/> Shared Room + 0 BDT</span>
                              <span><input type="radio" name="roomPrice" id="" checked={activeRoom2} onChange={(e)=>{setRoom(e.target.value); setActiveRoom2(true); setActiveRoom1(false)}} value='500'/> Shared Room + 500 BDT</span>
                            </div>
                            <div className={`${utilStyles.updateFlex}`}>
                              <h3>Update Food</h3>
                              <span><input type="radio" name="foodPrice" id="" checked={activeFood1} onChange={(e)=>{setFood(e.target.value); setActiveFood1(true); setActiveFood2(false); setActiveFood3(false)}} value='0'/> Included + 0 BDT</span>
                              <span><input type="radio" name="foodPrice" id="" checked={activeFood2} onChange={(e)=>{setFood(e.target.value); setActiveFood2(true); setActiveFood1(false); setActiveFood3(false)}} value='50'/> Excluded - 50 BDT</span>
                              <span><input type="radio" name="foodPrice" id="" checked={activeFood3} onChange={(e)=>{setFood(e.target.value); setActiveFood3(true); setActiveFood1(false); setActiveFood2(false)}} value='100'/> Caviar and Shrimps + 100 BDT</span>
                            </div>
                        </div>
                        <div>
                            <h3>Update Transport</h3>
                            <div className={`${utilStyles.updateFlex}`}>
                              <span><input type="radio" name="transportPrice" id="" checked={activeTransport1} onChange={(e)=>{setTransport(e.target.value); setActiveTransport1(true); setActiveTransport2(false)}} value='0'/> Chander Gari + 0 BDT</span>
                              <span><input type="radio" name="transportPrice" id="" checked={activeTransport2} onChange={(e)=>{setTransport(e.target.value); setActiveTransport2(true); setActiveTransport1(false)}} value='500'/> CNG + 500 BDT</span>
                              <span onClick={()=>{
                                setTransferCheckbox(false); setTransfer('')
                              }}><input type="checkbox" name="" id="" value='1000' checked={transferCheckbox} onChange={(e)=>{setTransfer(e.target.value); setTransferCheckbox(true)}}/>Add Transfer to Khagrachori + 1000 BDT</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
  )
}

export default Homepage