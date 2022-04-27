import { Typography } from 'antd'
import React, { ReactNode } from 'react'

const {Paragraph} = Typography;

function ParagraphText({
    children,
    fnt,
    weight,
    color,
    text_align,
    className
    }: {
    children?: string | ReactNode,
    fnt?: "fnt_18" | "fnt_16" | "fnt_20" | "fnt_24" | "fnt_36" | "fnt_48" | "fnt_50" | "fnt_14" | "fnt_10" | "fnt_12",
    weight?: "inter_regular" | "inter_medium" | "inter_semi_bold" | "inter_tiny",
    color?: string,
    text_align?: "left" | "right" | "center",
    className?: string
    }) {
        return (
            <Paragraph style={{
                color: typeof color == "undefined" ? "black" : color
            }} className={`
            ${typeof className == "undefined" ? "" : className} 
            ${
                typeof fnt == "undefined" ? "fnt_16" : fnt
            } ${
                typeof weight == "undefined" ? "inter_regular" : weight
            }  ${
                typeof text_align == "undefined" ? "text-left" : text_align == "right" ? "text-right" : text_align == "center" ? "text-center" : "text_left"
            }
            `}  >
                {children}
            </Paragraph>
        )
}

export default ParagraphText

