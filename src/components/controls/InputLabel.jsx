import React from "react";
import { Typography } from "@mui/material";

const InputLabel = (props) => {
    const { styleWrap, text } = props

    return (
        <Typography
            component='span'
            sx={{
                ...styleWrap,
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '12px',
                fontWeight: '600',
                fontStyle: 'normal',
                letterSpacing: '0',
                lineHeight: '28.8px',
                display: 'block'
            }}
        >
            {text}
        </Typography>
    )
}

export default InputLabel
