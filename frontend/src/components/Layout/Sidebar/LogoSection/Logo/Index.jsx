import { useTheme } from "@emotion/react";

const Logo = () => {
    const theme = useTheme();
    const bgcolor = theme.palette.primary.main;
    return (
        <svg width="64px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 10V13" stroke={bgcolor} strokeWidth="1.7" strokeLinecap="round"></path> <path d="M16 10V13" stroke={bgcolor} strokeWidth="1.7" strokeLinecap="round"></path> <path d="M7 7L7 16" stroke="#DF1463" strokeWidth="1.7" strokeLinecap="round"></path> <path d="M13 7L13 16" stroke={bgcolor} strokeWidth="1.7" strokeLinecap="round"></path> <path d="M19 7L19 16" stroke={bgcolor} strokeWidth="1.7" strokeLinecap="round"></path> <path d="M10 4L10 19" stroke={bgcolor} strokeWidth="1.7" strokeLinecap="round"></path> </g></svg>
    )
};
export default Logo;
