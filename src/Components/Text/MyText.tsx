import { Typography } from 'antd'
import React, { ReactNode } from 'react'
import styled from 'styled-components';

const {Text} = Typography;

function MyText({
    children,
    fnt,
    weight,
    color,
    text_align,
    className,
    ellipsis
    }: {
    children?: string | ReactNode,
    fnt?: "fnt_18" | "fnt_16" | "fnt_20" | "fnt_24" | "fnt_36" | "fnt_48" | "fnt_50" | "fnt_14" | "fnt_12" | "fnt_10",
    weight?: "inter_regular" | "inter_medium" | "inter_semi_bold" | "inter_tiny",
    color?: string,
    text_align?: "left" | "right" | "center",
    className?: string,
    ellipsis?: boolean,
    }) {
        return (
            <Text ellipsis={ellipsis == true ? true : false}  style={{
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
            </Text>
        )
}

export default MyText



