import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";


const WallDetailsTextIcon = (props) => {
    const { styleWrap, iconImageSrc, text } = props

    return (
        <Box
            sx={{
                ...styleWrap,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center'
            }}
        >
            <CardMedia
                component='img'
                image={iconImageSrc}
                sx={{
                    width: {
                        xs: '16px',
                        md: '24px'
                    },
                    height: {
                        xs: '16px',
                        md: '24px'
                    },
                    flex: '0 1 auto'
                }}
            />

            <Typography
                component='h4'
                sx={{
                    color: '#D8D8D8',
                    fontFamily: 'var(--font-family-montserrat)',
                    fontSize: {
                        xs: '12px',
                        md: '16px'
                    },
                    fontWeight: '300',
                    fontStyle: 'normal',
                    flex: '0 1 auto',
                    padding: {
                        xs: '0 0 0 12px',
                        md: '0 0 0 24px'
                    }
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}

export default WallDetailsTextIcon
