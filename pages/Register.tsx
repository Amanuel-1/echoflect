import Head from 'next/head'
import Layout from './layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';
import "@/app/globals.css"

import Footer from '@/app/components/shared/footer/Footer';
import { Images } from '@/public/resources';

type ValueLogin={
    email?:string,
    password?:string
}

export default function Login(){

    const [show, setShow] = useState(false)
    const router = useRouter()
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : login_validate,
        onSubmit
    })

    /**
     * haleykennedy@gmail.com
     * admin123
     */

    async function onSubmit(values:ValueLogin){
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })

        if(status?.ok) router.push(status?.url??'/')
        
    }

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

    // Github Login 
    async function handleGithubSignin(){
        signIn('github', { callbackUrl : "http://localhost:3000"})
    }
    async function handleFaSignin(){
        signIn('github', { callbackUrl : "http://localhost:3000"})
    }

    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-[90%] mx-auto flex flex-col gap-10'>
            <div className="title"> 
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Welcome Echoers!!</h1>
                <p className='w-3/4 md:w-[90%] mx-auto  text-gray-400'>You have just made your first step to join our talented,creative communit! sign in and start reflecting your creativity</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}
                    ${styles.input_group} ${!formik.errors.email && formik.touched.email ? 'border-green-600' : ''}
                `}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4 rounded-r-xl bg-white hue-rotate-30'>
                        <HiAtSymbol size={25} />
                    </span>
                   
                </div>
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}
                    ${styles.input_group} ${!formik.errors.email && formik.touched.email ? 'border-green-600' : ''}
                `}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4 rounded-r-xl bg-white hue-rotate-30' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                   
                </div>

                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}
                {/* login buttons */}
                <div className="input-button">
                    
                    <button type='submit' className='w-full bg-amber-800 py-3 rounded-[10px] text-gray-100 font-semibold text-lg'>
                        Login
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex gap-4 input-button">
                    
                    <button type='button' onClick={handleGoogleSignin} className={`flex gap-4 items-center bg-blue-600  ${styles.button_custom} `}>
                        <Image src={Images.google} alt='google' width={25} height={25} />
                        <p>Sign In with Google </p>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGithubSignin} className={`flex gap-4 items-center bg-gray-600 ${styles.button_custom} `} >
                        <Image src={Images.github} alt='google' width={25} height={25} />
                        <p>Sign In with Github </p>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGithubSignin} className={`flex gap-4 items-center bg-indigo-600 ${styles.button_custom} `} >
                        <Image src={Images.facebook} alt='google' width={25} height={25} />
                        <p>Sign In with Facebook </p>
                    </button>
                </div>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400  '>
                  have an account yet? <Link href={'/register'}className='text-blue-700'>Sign Up</Link>
            </p>
        </section>
     

        </Layout>
    )
}