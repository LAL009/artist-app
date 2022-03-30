import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTransition, animated } from 'react-spring';

import { LogoutButton, LogoutButtonMobile } from './../controls/LogoutButton';
import { SignupButton } from './../controls/SignupButton';
import { useSelector } from 'react-redux';
import {
  selectIsUserSignedIn,
  selectSignedInUser,
} from 'src/reducers/userReducers';

const useStyles = makeStyles({
  menu_btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40px',
    height: '30px',
    position: 'fixed',
    right: '36px',
    top: '25px',
    color: 'var(--white)',
    cursor: 'pointer',
    zIndex: 1001,
  },
  open: {
    '& div:nth-child(1)': {
      transform: 'rotate(45deg)',
      width: '20px',
    },
    '& div:nth-child(2)': {
      transform: 'translateX(-20px)',
      background: 'transparent',
    },
    '& div:nth-child(3)': {
      transform: 'rotate(-45deg)',
      width: '20px',
    },
  },
  menu_btn__burger_one: {
    width: '30px',
    height: '2px',
    background: 'white',
    borderRadius: '10px',
    transform: 'translateY(-5px)',
    transition: 'all .5s ease-in-out',
  },
  menu_btn__burger_two: {
    position: 'absolute',
    width: '25px',
    height: '2px',
    background: 'white',
    borderRadius: '10px',
    transition: 'all .5s ease-in-out',
  },
  menu_btn__burger_three: {
    position: 'absolute',
    width: '20px',
    height: '2px',
    background: 'white',
    borderRadius: '10px',
    transform: 'translateY(5px)',
    transition: 'all .5s ease-in-out',
  },
});

const BurgerMenuBtn = (props) => {
  const classes = useStyles();
  if (props.show) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return (
    <div
      className={`${classes.menu_btn}  ${props.show && classes.open}`}
      onClick={() => props.setShow(!props.show)}
    >
      <div className={classes.menu_btn__burger_one}></div>
      <div className={classes.menu_btn__burger_two}></div>
      <div className={classes.menu_btn__burger_three}></div>
    </div>
  );
};

export class MenuWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentDidUpdate(prevProps) {
    const sideChanged =
      this.props.children.props.right !== prevProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
        }}
        style={style}
        className={this.props.side}
      >
        {this.props.children}
      </Box>
    );
  }
}

export const TopNavigationBar = (props) => {
  const { isMarketplaceScreen } = props;
  const isUserSignedIn = useSelector(selectIsUserSignedIn);
  const userDetail = useSelector(selectSignedInUser);
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, {
    from: {
      opacity: 0,
      clipPath: 'circle(0px at 100% -10%)',
    },
    enter: {
      opacity: 1,
      clipPath: 'circle(5000px at 100% -10%)',
      position: 'relative',
      zIndex: 1002,
    },
    leave: {
      opacity: 0,
      clipPath: 'circle(0px at 100% -10%)',
    },
    reverse: show,
    delay: 200,
  });

  return (
    <>
      <Box>
        <MenuWrap wait={20} side="right" className="menu-wrap">
          <Box>
            <BurgerMenuBtn setShow={setShow} show={show} />
            <Box>
              {transitions(
                (styles, items) =>
                  items && (
                    <animated.div style={styles}>
                      <Box
                        className="overlay"
                        sx={{
                          display: 'flex',
                          background: '#00000087',
                          width: '100vw',
                          height: '100vh',
                          justifyContent: 'flex-end',
                          overflowY: 'scroll',
                          position: 'fixed',
                          top: '80px',
                          transition: 'all .5s ease-out',
                        }}
                        onClick={(e) => {
                          if (e.target.classList.contains('overlay')) {
                            setShow(!show);
                          }
                        }}
                      >
                        <Box
                          sx={{
                            maxWidth: '428px',
                            width: '100vw',
                            height: '570px',
                            background: '#353333d3',
                            backdropFilter: 'blur(70px)',
                            borderRadius: '16px',
                            padding: '23px 0',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '90%',
                              margin: 'auto',
                            }}
                          >
                            <Link
                              onClick={() => {
                                setShow(!show);
                              }}
                              style={{
                                width: '100%',
                                textDecoration: 'none',
                              }}
                              to="/about"
                            >
                              <LinkItems>
                                <IconImage
                                  src="/icons/About_Us.svg"
                                  alt="About Us Icon"
                                />
                                <LinkText>about us</LinkText>
                              </LinkItems>
                            </Link>
                            <Link
                              onClick={() => {
                                setShow(!show);
                              }}
                              style={{
                                width: '100%',
                                textDecoration: 'none',
                              }}
                              to="/marketplace"
                            >
                              <LinkItems>
                                <IconImage
                                  src="/icons/Marketplace.svg"
                                  alt="Marketplace Icon"
                                />
                                <LinkText>marketplace</LinkText>
                              </LinkItems>
                            </Link>
                            <Link
                              onClick={() => {
                                setShow(!show);
                              }}
                              style={{
                                width: '100%',
                                textDecoration: 'none',
                              }}
                              to="/contact"
                            >
                              <LinkItems>
                                <IconImage
                                  src="/icons/Contact.svg"
                                  alt="Contact Icon"
                                />
                                <LinkText>contact</LinkText>
                              </LinkItems>
                            </Link>
                            <Link
                              onClick={() => {
                                setShow(!show);
                              }}
                              style={{
                                width: '100%',
                                textDecoration: 'none',
                              }}
                              to="/creatives"
                            >
                              <LinkItems>
                                <IconImage
                                  src="/icons/Creatives.svg"
                                  alt="Creatives Icon"
                                />
                                <LinkText>creatives</LinkText>
                              </LinkItems>
                            </Link>
                            <Link
                              onClick={() => {
                                setShow(!show);
                              }}
                              style={{
                                width: '100%',
                                textDecoration: 'none',
                              }}
                              to="/real-estate"
                            >
                              <LinkItems>
                                <IconImage
                                  src="/icons/Real_Estate.svg"
                                  alt="Real Estate Icon"
                                />
                                <LinkText>Real estate</LinkText>
                              </LinkItems>
                            </Link>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.09)',
                                backdropFilter: 'blur(70px)',
                                borderRadius: '8px',
                                padding: '13px',
                              }}
                            >
                              {isUserSignedIn ? (
                                <Box
                                  style={{
                                    width: '80%',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginRight: '10px',
                                  }}
                                >
                                  {userDetail.name}
                                </Box>
                              ) : (
                                <Link
                                  onClick={() => {
                                    setShow(!show);
                                  }}
                                  style={{
                                    width: '100%',
                                    textDecoration: 'none',
                                    marginRight: '10px',
                                  }}
                                  to="/login"
                                >
                                  <LinkItems>
                                    <IconImage
                                      src="/icons/Login.svg"
                                      alt="Login Icon"
                                    />
                                    <LinkText>login</LinkText>
                                  </LinkItems>
                                </Link>
                              )}
                              {isUserSignedIn ? (
                                <LogoutButtonMobile />
                              ) : (
                                <Link
                                  onClick={() => {
                                    setShow(!show);
                                  }}
                                  style={{
                                    width: '100%',
                                    textDecoration: 'none',
                                  }}
                                  to="/signup"
                                >
                                  <LinkItems
                                    background={
                                      'linear-gradient(82.62deg, #5700FF 0%, #64E1DC 126.17%)'
                                    }
                                  >
                                    <IconImage
                                      src="/icons/Sign_Up.svg"
                                      alt="Sign Up Icon"
                                    />
                                    <LinkText>sign up</LinkText>
                                  </LinkItems>
                                </Link>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </animated.div>
                  )
              )}
            </Box>
          </Box>
        </MenuWrap>

        <TopNavigationBarContainer isMarketplaceScreen={isMarketplaceScreen}>
          <Box
            sx={{
              marginLeft: '2rem',
            }}
          >
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to="/"
            >
              <Logo
                src={
                  isMarketplaceScreen
                    ? `${process.env.REACT_APP_S3_BASE_URL}/assets/logo-black-for-map.svg`
                    : `${process.env.REACT_APP_S3_BASE_URL}/assets/wxllspace-logo.png`
                }
              />
            </Link>
          </Box>

          <Box
            sx={{
              justifyContent: 'center',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
              flexGrow: 1,
            }}
          >
            <MenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/about"
              >
                about us
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/marketplace"
              >
                marketplace
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/creatives"
              >
                artist
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/real-estate"
              >
                real estate
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/contact"
              >
                contact
              </Link>
            </MenuItem>
          </Box>

          <Box
            sx={{
              justifyContent: 'center',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            <LoginAndSignupContainer>
              <Link
                to={isUserSignedIn ? '#' : '/login'}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Login
                  style={{ color: isMarketplaceScreen ? '#06102B' : '#FFF' }}
                >
                  {isUserSignedIn ? userDetail.name : 'login'}
                </Login>
              </Link>
              <span
                style={{
                  marginLeft: '16px',
                }}
              >
                {isUserSignedIn ? (
                  <LogoutButton />
                ) : (
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <SignupButton />
                  </Link>
                )}
              </span>
            </LoginAndSignupContainer>
          </Box>
        </TopNavigationBarContainer>
      </Box>
    </>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite10px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xs);
  font-weight: 700;
  font-style: normal;
`;

const TopNavigationBarContainer = (props) => {
  const topNavBarContainerStyles = props.isMarketplaceScreen
    ? {
        height: '80px',
        display: 'flex',
        padding: {
          xs: '0px',
          sm: '0px',
          md: '18.8px 61px',
          lg: '18.8px 61px',
          xl: '18.8px 61px',
        },
        justifyContent: {
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
        },
        alignItems: 'center',
        width: '100%',
        backgroundColor: props.isMarketplaceScreen ? 'transparent' : '#06102b',
        color: '#06102b',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 700,
        fontStyle: 'normal',
      }
    : {
        position: 'fixed',
        height: '80px',
        display: 'flex',
        padding: {
          xs: '0px',
          sm: '0px',
          md: '18.8px 61px',
          lg: '18.8px 61px',
          xl: '18.8px 61px',
        },
        justifyContent: {
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
        },
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'var(--bon-jour)',
        backdropFilter: 'blur(40px) brightness(100%)',
        color: 'var(--white)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 700,
        fontStyle: 'normal',
        WebkitBackdropFilter: 'blur(40px) brightness(100%)',
        zIndex: 1000,
      };

  return (
    <Box sx={topNavBarContainerStyles} {...props}>
      {props.children}
    </Box>
  );
};

export const MenuItem = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: {
          xs: '48px',
          sm: '48px',
          md: '15px',
          lg: '15px',
          xl: '15px',
        },
        margin: {
          md: '0 1em',
          lg: '0 1em',
          xl: '0 1em',
        },
        minWidth: '46px',
        letterSpacing: 0,
        lineHeight: '15px',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Box>
  );
};

const LoginAndSignupContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  min-width: 145px;
`;

const Login = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite10px}
  height: 15px;
  margin-bottom: 0;
  min-width: 30px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  text-transform: capitalize;
`;

TopNavigationBar.propTypes = {
  isMarketplaceScreen: PropTypes.bool,
};

TopNavigationBar.defaultProps = {
  isMarketplaceScreen: false,
};

const Logo = styled.img`
  width: 183px;
  height: 33px;
`;
const IconImage = styled.img`
  width: 20px;
`;

const LinkItems = (props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        alignItems: 'center',
        background: props.background || 'rgb(28, 37, 61)',
        border: '1px solid var(--big-stone)',
        borderRadius: '8px',
        padding: '21px 27px',
        margin: '10px auto',
      }}
    >
      {props.children}
    </Box>
  );
};

const LinkText = (props) => {
  return (
    <Typography
      style={{
        color: 'rgb(184, 183, 173)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-m)',
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Typography>
  );
};
