import Image from 'next/image';


export type loadingProps ={
    isloading:boolean,
    className?:string
}
export type tabsProps={
    open:boolean
}
export type avatarProps ={
    img:any,
    name?:string
}

export type profileProps = {
    avatar:avatarProps,
    cover:any
    bio?:string
    social?:[string],
    role:string,
    email:string,
    followers:string,
    likes:string
}

export  type dropdownItem ={
    value:string,
    icon:string,
    onClick:Function
    
}
export type dropdownProps = {
    dropdownItems: {

    }
}

export type logoProps = {
    isAtTop:boolean
  }
type megaItem={
    title: string,
    href: string,
    logo: string,
    description: string,
    dropdown: boolean,
    megaMenu: boolean
}
export type megaMenuProps = {
    data:Array<megaItem>
    onClose: () => void;
    
  };

export type navbarProps  ={
darkMode: boolean,
setDarkMode: Function
}

export type navButtonsProps = {
    darkMode: boolean;
    setDarkMode: Function;
  };

export type navItemsProps ={
    setOpen:Function,
    open:boolean
    icon:any,
    text:string,
    link?:string,
    children?:React.ReactNode
}
export type themeSelectorProps = {
    darkMode: boolean;
    setDarkMode: Function;
};
  
export type constantsProps = {
    svg: string;
    heading: string;
    description: string;
    svgleft: boolean;
};


export type ErrorLogin={
    email?:string,
    password?:string
}
export type ErrorRegister={
    email?:string,
    password?:string,
    username?:string,
    cpassword?:string
}
export type ValueLogin={
    email?:string,
    password?:string
}
export type ValueRegister={
    email?:string,
    password?:string,
    username?:string,
    cpassword?:string
}

  


// export type {megaMenuProps,
//             logoProps,
//             navbarProps,
//             navButtonsProps,
//             navItemsProps,
//             themeSelectorProps,
//             constantsProps,
//             ErrorLogin,
//             ErrorRegister,
//             ValueLogin,
//             ValueRegister
//         }