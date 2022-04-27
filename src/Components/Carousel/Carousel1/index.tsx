import React, { useState } from 'react'
import {AnimatePresence} from "framer-motion"
import { wrap } from 'popmotion'
import Element1 from './Element1'
import styled from 'styled-components'

function Carousel() {
    const variants  = {
        enter: (direction: number) =>{
            return {
                // x: direction > 0 ? -1000 : 1000,
                x: 3000,
                opacity: 0
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) =>{
            return {
                zIndex: 0,
                // x: direction < 0 ? -1000 : 1000,
                x: -1000,
                opacity: 0
            }
        }
    }
    const swipeConfidenceThreshold = 10000
    const swiperPower = (offset: number, velocity: number) =>{
        return Math.abs(offset) * velocity
    }
    const [[page, direction], setPage] = useState([0, 0])
    const imageIndex  = wrap(0, 5, page)

    const paginate = (newDirection: number) => {
        setPage([page+newDirection, newDirection])
    }
  return (<Container className='flex flex-row items-center justify-center' >
        <>
            <Element1  direction={direction} page={page} variants={variants} swipePower={swiperPower} paginate={paginate} swipeConfidenceThreshold={swipeConfidenceThreshold} />
            </>
        <div className="next" onClick={() => paginate(1)}>
            {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}    
        </div>
        </Container>
  )
}

export default Carousel

const Container  = styled.div`
    width: 1000px;
    height: 500px;
    overflow: hidden;
    position: relative;
`