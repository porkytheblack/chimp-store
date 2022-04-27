import { EyeIcon } from '@heroicons/react/outline'
import { FavoriteOutlined, ShoppingBag, Star } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Button2 from '../../Buttons/Button2'
import Button4 from '../../Buttons/Button4'
import MyText from '../../Text/MyText'
import test_image from "./test_image.png"

function Element1({page, direction, variants, swipeConfidenceThreshold, paginate, swipePower}:{page: number, direction: number, variants: any, swipeConfidenceThreshold: number, paginate: (a:number)=>void, swipePower: (a:number, b:number)=>number}) {
  return (<>
    <AnimatePresence  initial={false} presenceAffectsLayout={false} custom={direction} >
    <Container key={page} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"  transition={{
        x: {
            type: "spring",
            stiffness: 100, 
            damping: 30,
            opacity: {
                duration: 0.2
            }
        }
    }}
    drag="x"
    dragConstraints= {{right: 0, left: 0}}
    dragElastic = {1}
    onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    className="flex flex-row items-center justify-between" >
        <div className="flex flex-col items-center justify-start w-1/2 ">
            <ImageContainer className='mb-1' src={test_image} />
            <TextContainer fnt="fnt_16"  text_align='center' ellipsis={true} weight="inter_semi_bold" color="white" >
                Introverts Unite Separately in your own homes
            </TextContainer>
        </div>
       <div className="flex flex-col items-center h-full justify-center w-1/2 ">
            <MyText fnt="fnt_20" color="white" weight="inter_semi_bold" >
                Introverts Unite Sticker
            </MyText>
            <div className="flex flex-row items-center mt-3 justify-center w-full">
                <MyText fnt="fnt_16" color="white" className='mr-2' >
                    designed and sold by    
                </MyText>
                <MyText fnt="fnt_16" color="#e3e1e3" >
                    don
                </MyText>
            </div>
            <MyText fnt="fnt_36" weight="inter_medium" color="white" >
                $3.6
            </MyText>
            <div className="flex flex-row items-center mt-3 justify-start w-full">
                <Button4 text_colors={["#DB1c82","#DF47be"]} Icon={FavoriteOutlined} >
                    98 likes
                </Button4>
                <Button4 text_colors={["#DB1c82","#DF47be"]} Icon={ShoppingBag} >
                    56 buys  
                </Button4>
                <Button4 text_colors={["#DB1c82","#DF47be"]} Icon={EyeIcon} >
                    300 views
                </Button4>
            </div>
            <div className="flex flex-row items-center justify-start">
                <MyText fnt="fnt_24" weight="inter_medium" color="white" >
                    4.6
                </MyText>
                <Star className="ticon ml-2"  />
            </div>
            <MyText fnt="fnt_16" color="#DB1c82" >307 reviews</MyText>
            <div className="flex flex-row items-center justify-center w-full pt-14 pb-14 ">
                <Button2>
                    BUY    
                </Button2> 
            </div>
       </div>  
    </Container>
    </AnimatePresence>
    </>
  )
}

export default Element1

const Container  = styled(motion.div)`  
    border-radius: 10px;
    height: 450px;
    width: 700px;
    border: 1px solid #fd7014;
    padding: 10px;
    .ticon{
        height: 24px;
        width: 24px;
        color: white !important;
    }
`
const ImageContainer  = styled.img`
    height: 400px;
    width: 300px;
`

const TextContainer  = styled(MyText)`
    width: 300px;
`