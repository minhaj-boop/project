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

  const total = () => {
    return Number(room) + Number(food) + Number(transport)
  }

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
                <div className={`${utilStyles.card1}`}>
                  <div className={`${utilStyles.menu}`}>
                    <FaEllipsisV onClick={toggleModal}/>
                  </div>
                  <h5>Food: Included</h5>
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
                  <div>
                    <h3>{Number(10077 + total())} BDT</h3>
                    <h5>107290 BDT</h5>
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
                              <span><input type="radio" name="roomPrice" id="" onChange={e=>setRoom(e.target.value)} value='0'/> Shared Room + 0 BDT</span>
                              <span><input type="radio" name="roomPrice" id="" onChange={e=>setRoom(e.target.value)} value='500'/> Shared Room + 500 BDT</span>
                            </div>
                            <div className={`${utilStyles.updateFlex}`}>
                              <h3>Update Food</h3>
                              <span><input type="radio" name="foodPrice" id="" onChange={e=>setFood(e.target.value)} value='0'/> Included + 0 BDT</span>
                              <span><input type="radio" name="foodPrice" id="" onChange={e=>setFood(e.target.value)} value='50'/> Excluded - 50 BDT</span>
                              <span><input type="radio" name="foodPrice" id="" onChange={e=>setFood(e.target.value)} value='100'/> Caviar and Shrimps + 100 BDT</span>
                            </div>
                        </div>
                        <div>
                            <h3>Update Transport</h3>
                            <div className={`${utilStyles.updateFlex}`}>
                              <span><input type="radio" name="transportPrice" id="" onChange={e=>setTransport(e.target.value)} value='0'/> Chander Gari + 0 BDT</span>
                              <span><input type="radio" name="transportPrice" id="" onChange={e=>setTransport(e.target.value)} value='500'/> CNG + 500 BDT</span>
                              <span><input type="checkbox" name="" id="" value='1000' onChange={e=>setTransport(e.target.value)}/>Add Transfer to Khagrachori + 1000 BDT</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
  )
}

export default Homepage