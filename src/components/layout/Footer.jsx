import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useInput } from '@mui/core/';
import { styled as muiStyled } from '@mui/system';
import { WxllspaceFullLogo } from './../icons';

import useStyles from './styles';

const ProxyComponent = (props) => {
  const theme = useTheme();
  const largerThanSm = useMediaQuery(theme.breakpoints.up('md'));
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('md'));

  if (props.hideFooterOn) return null;

  if (largerThanSm) {
    return <LargeFooter {...props} />;
  }

  if (smallerThanSm) {
    return <SmallFooter {...props} />;
  }

  return null;
};

function LargeFooter(props) {
  const classes = useStyles();

  const { onClick } = props;

  return (
    <Footer1>
      <FlexRow>
        <FlexCol>
          <WxllspaceFullLogo />

          <SocialMediaLinks>
            <Box
              sx={{
                marginBottom: '20px',
                justifyContent: 'space-between !important',
                display: 'flex',
              }}
            >
              <IconButton
                aria-label="WXLLSPACE Twitter"
                size="small"
                className={classes.socialButtons}
              >
                <a
                  style={{ color: '#FFF' }}
                  href="https://twitter.com/WXLLSPACE"
                >
                  <TwitterIcon className={classes.socialIcon} />
                </a>
              </IconButton>

              <IconButton
                aria-label="WXLLSPACE Facebook"
                className={classes.socialButtons}
                size="small"
              >
                <a
                  style={{ color: '#FFF' }}
                  href="https://www.facebook.com/wxllspace"
                >
                  <FacebookIcon className={classes.socialIcon} />
                </a>
              </IconButton>

              <IconButton
                aria-label="WXLLSPACE Instagram"
                className={classes.socialButtons}
                size="small"
              >
                <a
                  style={{ color: '#FFF' }}
                  href="https://www.instagram.com/wxll.space/"
                >
                  <InstagramIcon className={classes.socialIcon} />
                </a>
              </IconButton>

              <IconButton
                aria-label="WXLLSPACE LinkedIn"
                className={classes.socialButtons}
                size="small"
              >
                <a
                  style={{ color: '#FFF' }}
                  href="https://www.linkedin.com/company/wxllspace"
                >
                  <LinkedInIcon className={classes.socialIcon} />
                </a>
              </IconButton>
            </Box>
          </SocialMediaLinks>

          <Box
            sx={{
              mt: '30px',
            }}
          >
            <ProductHuntBadgeContainer>
              <a
                href="https://www.producthunt.com/posts/wxllspace?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wxllspace"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290024&theme=dark"
                  alt="WXLLSPACE - Marketplace platform connecting muralists to wall-space | Product Hunt"
                  width="250"
                  height="54"
                />
              </a>
            </ProductHuntBadgeContainer>
          </Box>

          <Box
            sx={{
              pt: '20px',
            }}
          >
            <iframe
              src="https://wxllspace.instatus.com/embed-status/dark-sm"
              width={230}
              height={61}
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none' }}
            ></iframe>
          </Box>
        </FlexCol>

        {/* explore */}
        <Box
          sx={{
            maxWidth: '200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
          }}
        >
          <ColumnHeading>explore</ColumnHeading>
          <FooterLink to="/about">mission</FooterLink>
          <FooterLink to="/marketplace">marketplace</FooterLink>
          <FooterLink to="/real-estate">real estate</FooterLink>
          <FooterLink to="/creatives">creatives</FooterLink>
          <FooterLink href="https://community.wxllspace.com">
            community
          </FooterLink>
          <FooterLink href="https://anchor.fm/wxllspace">
            The WXLLSPACE.Station
          </FooterLink>
        </Box>

        {/* support */}
        <Box
          sx={{
            maxWidth: '200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ColumnHeading>support</ColumnHeading>
          <FooterLink href="/privacy-policy">privacy policy</FooterLink>
          <FooterLink href="/cookies-policy">cookies policy</FooterLink>
          <FooterLink to="/contact">contact</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink href="https://wxllspace.instatus.com/">status</FooterLink>
          <FooterLink href="/terms-of-use">Terms & Conditions</FooterLink>
        </Box>

        {/* get in touch */}
        <Box
          sx={{
            marginLeft: '32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ColumnHeading>get in touch</ColumnHeading>
          <Text1>
            Curious about where we’re heading? Introduce yourself here 👇🏼
          </Text1>
          <OverlapGroup>
            <FullNameTextField />

            <EmailTextField onClick={onClick} />
          </OverlapGroup>
        </Box>
      </FlexRow>

      <CopyrightContainer>
        <CopyrightText>
          Designed in New York Copyright © 2022 WXLLSPACE 🚀 All Rights
          Reserved.
        </CopyrightText>
      </CopyrightContainer>
    </Footer1>
  );
}

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratNormalIron14px = css`
  color: var(--iron);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

export const MontserratLightIron14px = css`
  color: var(--iron);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 300;
  font-style: normal;
`;

export const MontserratExtraBoldWhite18px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xl);
  font-weight: 800;
  font-style: normal;
`;

export const MontserratLightWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 300;
  font-style: normal;
`;

export const MontserratLightWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 300;
  font-style: normal;
`;

export const Border1pxWhite2 = css`
  border: 1px solid var(--white);
`;

const StyledFullNameInputElement = muiStyled('input')(`
  ${Border1pxWhite2}
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 266px;
  border-radius: 8px;
  font-weight: 500;
  width: 100%;
  line-height: 1.4375em;
  background: transparent;
  transition: width 300ms ease;
  white-space: nowrap;
  letter-spacing: 0;
  padding: 1em;

  ${MontserratLightWhite14px}

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`);

const FullNameCustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledFullNameInputElement {...props} {...getInputProps()} />
    </div>
  );
});

export const FullNameTextField = (props) => {
  return (
    <FullNameCustomInput
      disabled={false}
      aria-label="Full Name"
      placeholder="Full Name"
      {...props}
    />
  );
};

const StyledEmailInputElement = muiStyled('input')(`
  ${Border1pxWhite2}
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 266px;
  border-radius: 8px;
  font-weight: 500;
  width: 100%;
  line-height: 1.4375em;
  background: transparent;
  transition: width 300ms ease;
  white-space: nowrap;
  letter-spacing: 0;
  padding: 1em;
  margin-top: 20px;

  ${MontserratLightWhite14px}

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`);

const EmailCustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledEmailInputElement {...props} {...getInputProps()} />
    </div>
  );
});

export const EmailTextField = (props) => {
  return (
    <>
      <EmailCustomInput
        disabled={false}
        aria-label="Email"
        placeholder="Email"
      />
      <Submit onClick={props.onClick}>
        <TelegramIcon sx={{ color: '#0e1b41' }} />
      </Submit>
    </>
  );
};

const Footer1 = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '520px',
        backgroundColor: 'var(--tangaroa)',
      }}
    >
      {props.children}
    </Box>
  );
};

const FlexRow = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '282px',
        marginTop: '81px',
        display: 'flex',
        alignItems: 'flex-start',
        width: {
          [`${theme.breakpoints.up('md')} and (orientation: portrait)`]: '80vw',
          md: '90vw',
          lg: '90vw',
          xl: '70vw',
        },
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      {props.children}
    </Box>
  );
};
const FlexCol = styled.div`
  width: 214px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 178px;
  flex-grow: 1;
`;

const SocialMediaLinks = styled.div`
  width: 194px;
  height: 37px;
  margin-top: 31px;
  margin-left: 0;
`;

const ProductHuntBadgeContainer = styled.div`
  height: 46px;
`;

const ColumnHeading = (props) => {
  return (
    <Box
      sx={{
        height: '22px',
        letterSpacing: 0,
        marginBottom: '1rem',
        color: 'var(--white)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 800,
        fontStyle: 'normal',
        textTransform: 'capitalize',
      }}
    >
      {props.children}
    </Box>
  );
};

const SocialMediaLink = (props) => {
  return (
    <a href={props.href} alt="Link to social media">
      {props.children}
    </a>
  );
};

const FooterLink = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.to && (
        <Link to={props.to} className={classes.footerLink}>
          {props.children}
        </Link>
      )}
      {props.href && (
        <a href={props.href} className={classes.footerLink}>
          {props.children}
        </a>
      )}
    </>
  );
};

const Text1 = styled.p`
  ${ValignTextMiddle}
  ${MontserratLightIron14px}
  width: 270px;
  height: 40px;
  margin-top: 0.5rem;
  letter-spacing: 0;
  line-height: 25.2px;
`;

const OverlapGroup = (props) => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '306px',
          md: '306px',
          lg: '306px',
          xl: '306px',
        },
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        padding: '19.6px 0',
        alignItems: 'center',
        minHeight: '162px',
        backgroundColor: 'var(--white-3)',
        borderRadius: '8px',
      }}
    >
      {props.children}
    </Box>
  );
};

const Submit = styled.div`
  ${Border1pxWhite2}
  height: 30.85px;
  display: flex;
  padding: 3.9px 4.4px;
  align-items: center;
  justify-content: center;
  min-width: 30.85px;
  background-color: var(--white);
  border-radius: 4px;
  position: relative;
  left: 108px;
  top: -41px;
`;

const CopyrightContainer = styled.div`
  height: 82px;
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--white-3);
`;

const CopyrightText = styled.p`
  ${ValignTextMiddle}
  ${MontserratLightWhite16px}
  text-align: center;
  letter-spacing: 0;
  line-height: 1.5;
`;

/* mobile */
const SmallFooter = (props) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#00C8C8',
          filter: 'blur(180px)',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      ></Box>

      <Grid
        container
        spacing={2}
        sx={{
          padding: '1rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* get in touch */}
        <Grid
          item
          xs={12}
          sx={{
            mb: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ColumnHeading>get in touch</ColumnHeading>
            <Text1>
              Curious about where we’re heading? Introduce yourself here 👇🏼
            </Text1>
            <OverlapGroup>
              <FullNameTextField
                sx={{
                  width: {
                    xs: '266px',
                    lg: '327px',
                  },
                }}
              />

              <EmailTextField onClick={props.onClick} />
            </OverlapGroup>
          </Box>
        </Grid>

        {/* logo */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginBottom: {
                xs: '2rem',
              },
            }}
          >
            <FlexCol>
              <WxllspaceFullLogo />
              <SocialMediaLinks>
                <Box
                  sx={{
                    marginBottom: '20px',
                    justifyContent: 'space-between',
                    display: 'flex',
                  }}
                >
                  <SocialMediaLink href="https://twitter.com/WXLLSPACE">
                    <IconButton
                      aria-label="WXLLSPACE Twitter"
                      size="small"
                      className={classes.socialButtons}
                    >
                      <TwitterIcon className={classes.socialIcon} />
                    </IconButton>
                  </SocialMediaLink>

                  <SocialMediaLink href="https://www.facebook.com/wxllspace">
                    <IconButton
                      aria-label="WXLLSPACE Facebook"
                      className={classes.socialButtons}
                      size="small"
                    >
                      <FacebookIcon className={classes.socialIcon} />
                    </IconButton>
                  </SocialMediaLink>

                  <SocialMediaLink href="https://www.instagram.com/wxll.space/">
                    <IconButton
                      aria-label="WXLLSPACE Instagram"
                      className={classes.socialButtons}
                      size="small"
                    >
                      <InstagramIcon className={classes.socialIcon} />
                    </IconButton>
                  </SocialMediaLink>

                  <SocialMediaLink href="https://www.linkedin.com/company/wxllspace">
                    <IconButton
                      aria-label="WXLLSPACE LinkedIn"
                      className={classes.socialButtons}
                      size="small"
                    >
                      <LinkedInIcon className={classes.socialIcon} />
                    </IconButton>
                  </SocialMediaLink>
                </Box>
              </SocialMediaLinks>

              <Box
                sx={{
                  mt: '15px',
                }}
              >
                <ProductHuntBadgeContainer>
                  <a
                    href="https://www.producthunt.com/posts/wxllspace?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wxllspace"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290024&theme=dark"
                      alt="WXLLSPACE - Marketplace platform connecting muralists to wall-space | Product Hunt"
                      width="250"
                      height="54"
                    />
                  </a>
                </ProductHuntBadgeContainer>
              </Box>

              <Box
                sx={{
                  marginTop: '25px',
                }}
              >
                <iframe
                  src="https://wxllspace.instatus.com/embed-status/dark-sm"
                  width={230}
                  height={61}
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: 'none' }}
                ></iframe>
              </Box>
            </FlexCol>
          </Box>
        </Grid>

        {/* quick link */}
        <Grid item xs={12} spacing={0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {/* explorer */}
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <ColumnHeading>Explore</ColumnHeading>
              <FooterLink href="https://community.wxllspace.com">
                Community
              </FooterLink>
              <FooterLink to="https://anchor.fm/wxllspace">Podcast</FooterLink>
              <FooterLink to="https://clever-seal-a49.notion.site/Changelog-f10b94173f794d02a8f5674b81724f36">
                Changelog
              </FooterLink>
              <FooterLink href="https://wxllspace.instatus.com">
                Status
              </FooterLink>
              <FooterLink to="https://clever-seal-a49.notion.site/WXLLSPACE-Press-Kit-2132714d418849959ad284d0d2ce0990">
                Press Kit
              </FooterLink>
              <FooterLink to="/artist-search">Artist Search</FooterLink>
            </Box>

            {/* learn more */}
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <ColumnHeading>Learn More</ColumnHeading>
              <FooterLink to="/about">Mission</FooterLink>
              <FooterLink to="/creatives">Creatives</FooterLink>
              <FooterLink to="/real-estate">Real Estate</FooterLink>
            </Box>

            {/* support */}
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                mt: '20px',
              }}
            >
              <ColumnHeading>Support</ColumnHeading>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/cookies-policy">Cookies Policy</FooterLink>
              <FooterLink to="/terms-of-use">Terms & Conditions</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <CopyrightContainer>
        <CopyrightText>
          Designed in New York Copyright © 2022 WXLLSPACE 🚀 All Rights
          Reserved.
        </CopyrightText>
      </CopyrightContainer>
    </Box>
  );
};

export default ProxyComponent;
